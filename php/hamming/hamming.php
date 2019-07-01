<?php

//
// This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function distance($a, $b)
{
    $arrayA = str_split($a);
    $arrayB = str_split($b);


    var_dump($arrayA);

    $result = array_reduce($arrayA, function($acc, $item) {
        if ($arrayA[$item] !== $arrayB[$item]) {
          return $acc + $item;
        }
    }, 0);
    return $result;
}
