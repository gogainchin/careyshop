<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    Geohash扩展库
 *
 * @author      zxm <252404501@qq.com>
 * @date        2017/7/31
 */

namespace util;

class Geohash
{
    //private $bitss = [16, 8, 4, 2, 1];
    private array $neighbors = [];
    private array $borders = [];

    private string $coding = '0123456789bcdefghjkmnpqrstuvwxyz';
    private array $codingMap = [];

    public function __construct()
    {
        $this->neighbors['right']['even'] = 'bc01fg45238967deuvhjyznpkmstqrwx';
        $this->neighbors['left']['even'] = '238967debc01fg45kmstqrwxuvhjyznp';
        $this->neighbors['top']['even'] = 'p0r21436x8zb9dcf5h7kjnmqesgutwvy';
        $this->neighbors['bottom']['even'] = '14365h7k9dcfesgujnmqp0r2twvyx8zb';

        $this->borders['right']['even'] = 'bcfguvyz';
        $this->borders['left']['even'] = '0145hjnp';
        $this->borders['top']['even'] = 'prxz';
        $this->borders['bottom']['even'] = '028b';

        $this->neighbors['bottom']['odd'] = $this->neighbors['left']['even'];
        $this->neighbors['top']['odd'] = $this->neighbors['right']['even'];
        $this->neighbors['left']['odd'] = $this->neighbors['bottom']['even'];
        $this->neighbors['right']['odd'] = $this->neighbors['top']['even'];

        $this->borders['bottom']['odd'] = $this->borders['left']['even'];
        $this->borders['top']['odd'] = $this->borders['right']['even'];
        $this->borders['left']['odd'] = $this->borders['bottom']['even'];
        $this->borders['right']['odd'] = $this->borders['top']['even'];

        // build map from encoding char to 0 padded bitfield
        for ($i = 0; $i < 32; $i++) {
            $this->codingMap[mb_substr($this->coding, $i, 1, 'utf-8')] = str_pad(decbin($i), 5, '0', STR_PAD_LEFT);
        }
    }

    /**
     * Decode a geohash and return an array with decimal lat,long in it
     * @param $hash
     * @return array
     */
    public function decode($hash): array
    {
        // decode hash into binary string
        $binary = '';
        $hl = mb_strlen($hash);
        for ($i = 0; $i < $hl; $i++) {
            $binary .= $this->codingMap[mb_substr($hash, $i, 1, 'utf-8')];
        }

        // split the binary into lat and log binary strings
        $bl = mb_strlen($binary);
        $blat = '';
        $blong = '';
        for ($i = 0; $i < $bl; $i++) {
            if ($i % 2) {
                $blat = $blat . mb_substr($binary, $i, 1, 'utf-8');
            } else {
                $blong = $blong . mb_substr($binary, $i, 1, 'utf-8');
            }
        }

        // now concert to decimal
        $lat = $this->binDecode($blat, -90, 90);
        $long = $this->binDecode($blong, -180, 180);

        // figure out how precise the bit count makes this calculation
        $latErr = $this->calcError(mb_strlen($blat), -90, 90);
        $longErr = $this->calcError(mb_strlen($blong), -180, 180);

        // how many decimal places should we use? There's a little art to
        // this to ensure I get the same roundings as geohash.org
        $latPlaces = max(1, -round(log10($latErr))) - 1;
        $longPlaces = max(1, -round(log10($longErr))) - 1;

        // round it
        $lat = round($lat, $latPlaces);
        $long = round($long, $longPlaces);

        return [$lat, $long];
    }

    private function calculateAdjacent($srcHash, $dir): string
    {
        if (!isset($srcHash[mb_strlen($srcHash) - 1])) {
            return '';
        }

        $srcHash = mb_strtolower($srcHash, 'utf-8');
        $lastChr = $srcHash[mb_strlen($srcHash) - 1];
        $type = (mb_strlen($srcHash) % 2) ? 'odd' : 'even';
        $base = mb_substr($srcHash, 0, mb_strlen($srcHash) - 1, 'utf-8');

        if (mb_strpos($this->borders[$dir][$type], $lastChr, null, 'utf-8') !== false) {
            $base = $this->calculateAdjacent($base, $dir);
        }

        return $base . $this->coding[mb_strpos($this->neighbors[$dir][$type], $lastChr, null, 'utf-8')];
    }

    public function neighbors($srcHash): array
    {
        //$geohashPrefix = mb_substr($srcHash, 0, strlen($srcHash) - 1, 'utf-8');

        $neighbors['top'] = $this->calculateAdjacent($srcHash, 'top');
        $neighbors['bottom'] = $this->calculateAdjacent($srcHash, 'bottom');
        $neighbors['right'] = $this->calculateAdjacent($srcHash, 'right');
        $neighbors['left'] = $this->calculateAdjacent($srcHash, 'left');

        $neighbors['topleft'] = $this->calculateAdjacent($neighbors['left'], 'top');
        $neighbors['topright'] = $this->calculateAdjacent($neighbors['right'], 'top');
        $neighbors['bottomright'] = $this->calculateAdjacent($neighbors['right'], 'bottom');
        $neighbors['bottomleft'] = $this->calculateAdjacent($neighbors['left'], 'bottom');

        return $neighbors;
    }

    /**
     * Encode a hash from given lat and long
     * @param $lat
     * @param $long
     * @return string
     */
    public function encode($lat, $long): string
    {
        // how many bits does latitude need?
        $plat = $this->precision($lat);
        $latbits = 1;
        $err = 45;
        while ($err > $plat) {
            $latbits++;
            $err /= 2;
        }

        // how many bits does longitude need?
        $plong = $this->precision($long);
        $longbits = 1;
        $err = 90;
        while ($err > $plong) {
            $longbits++;
            $err /= 2;
        }

        // bit counts need to be equal
        $bits = max($latbits, $longbits);

        // as the hash create bits in groups of 5, lets not
        // waste any bits - lets bulk it up to a multiple of 5
        // and favour the longitude for any odd bits
        $longbits = $bits;
        $latbits = $bits;
        $addlong = 1;
        while (($longbits + $latbits) % 5 != 0) {
            $longbits += $addlong;
            $latbits += !$addlong;
            $addlong = !$addlong;
        }

        // encode each as binary string
        $blat = $this->binEncode($lat, -90, 90, $latbits);
        $blong = $this->binEncode($long, -180, 180, $longbits);

        // merge lat and long together
        $binary = '';
        $uselong = 1;
        while (mb_strlen($blat) + mb_strlen($blong)) {
            if ($uselong) {
                $binary = $binary . mb_substr($blong, 0, 1, 'utf-8');
                $blong = mb_substr($blong, 1, null, 'utf-8');
            } else {
                $binary = $binary . mb_substr($blat, 0, 1, 'utf-8');
                $blat = mb_substr($blat, 1, null, 'utf-8');
            }
            $uselong = !$uselong;
        }

        // convert binary string to hash
        $hash = '';
        for ($i = 0; $i < mb_strlen($binary); $i += 5) {
            $n = bindec(mb_substr($binary, $i, 5, 'utf-8'));
            $hash = $hash . $this->coding[$n];
        }

        return $hash;
    }

    /**
     * What's the maximum error for $bits bits covering a range $min to $max
     * @param $bits
     * @param $min
     * @param $max
     * @return float|int
     */
    private function calcError($bits, $min, $max)
    {
        $err = ($max - $min) / 2;

        while ($bits--) {
            $err /= 2;
        }

        return $err;
    }

    /*
     * returns precision of number
     * precision of 42 is 0.5
     * precision of 42.4 is 0.05
     * precision of 42.41 is 0.005 etc
     */
    private function precision($number)
    {
        $precision = 0;
        $pt = mb_strpos($number, '.', null, 'utf-8');

        if ($pt !== false) {
            $precision = -(mb_strlen($number) - $pt - 1);
        }

        return pow(10, $precision) / 2;
    }

    /**
     * create binary encoding of number as detailed in http://en.wikipedia.org/wiki/Geohash#Example
     * removing the tail recursion is left an exercise for the reader
     *
     * Author: Bruce Chen (weibo: @一个开发者)
     * @param $number
     * @param $min
     * @param $max
     * @param $bitcount
     * @return string
     */
    private function binEncode($number, $min, $max, $bitcount): string
    {
        if ($bitcount == 0) {
            return '';
        }

        #echo "$bitcount: $min $max<br>";

        // this is our mid point - we will produce a bit to say
        // whether $number is above or below this mid point
        $mid = ($min + $max) / 2;
        if ($number > $mid) {
            return '1' . $this->binEncode($number, $mid, $max, $bitcount - 1);
        } else {
            return '0' . $this->binEncode($number, $min, $mid, $bitcount - 1);
        }
    }

    /**
     * decodes binary encoding of number as detailed in http://en.wikipedia.org/wiki/Geohash#Example
     * removing the tail recursion is left an exercise for the reader
     * @param $binary
     * @param $min
     * @param $max
     * @return float|int
     */
    private function binDecode($binary, $min, $max)
    {
        $mid = ($min + $max) / 2;
        if (mb_strlen($binary) == 0) {
            return $mid;
        }

        $bit = mb_substr($binary, 0, 1, 'utf-8');
        $binary = mb_substr($binary, 1, null, 'utf-8');

        if ($bit == 1) {
            return $this->binDecode($binary, $mid, $max);
        } else {
            return $this->binDecode($binary, $min, $mid);
        }
    }
}
