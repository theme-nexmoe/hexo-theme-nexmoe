<?php
// 该脚本用于自动生成字体图标文档
function listDir($dir){
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            $x=0;
            while (($file = readdir($dh)) !== false) {
                if ($file != '.' && $file != '..') {
                    $array[$x] = $file;
                    $x++;
                }
            }
            return $array;
            closedir($dh);
        }
    }
}
$array = listDir('font');
function oneLine($array,$head=false) {
    echo "\n".'| ';
    for($x=0;isset($array[$x]);$x++){
        echo '![icon-'.strstr($array[$x],'.svg',true).'](font/'.$array[$x].') | ';
    }
    if($head){
        echo "\n".'| :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: | :------------: |';
    }
    echo "\n".'| ';
    for($x=0;isset($array[$x]);$x++){
        echo 'icon-'.strstr($array[$x],'.svg',true).' | ';
    }
}
for($x=0;isset($array[$x]);$x++){
    if($x%10==0){
        $y=0;
    }

    $array_y[$y] = $array[$x];
    $y++;

    if(0 < $x && $x <= 10 && ($x%10 == 0 || ($x+1)==count($array))){
        oneLine($array_y,true);
    }

    if($x > 10 && ($x%10 == 0 || ($x+1)==count($array))){
        oneLine($array_y);
    }
}