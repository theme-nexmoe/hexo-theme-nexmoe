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
for($x=0;isset($array[$x]);$x++){
    echo '<li><i class="nexmoefont icon-'.strstr($array[$x],'.svg',true).'"></i><span>icon-'.strstr($array[$x],'.svg',true).'</span></li>'."\n";
}