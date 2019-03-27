<?php
function runcmd($cmd){
    $message = exec($cmd);
    return $message;
}
for($i=1;$i<=72;$i++){
    $cmd1='/usr/bin/gdal_translate -of GTiff -gcp 200.277 783.707 104.722 8.602 -gcp 144.839 549.381 103.696 13.2466 -gcp 390.007 285.048 108.691 18.5118 -gcp 474.866 184.001 110.537 20.471 -gcp 431.522 567.563 109.474 12.8977 "/opt/lampp/htdocs/Vietnam_map_history/img/Timeline/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky'.$i.'.jpg" "/tmp/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky'.$i.'.jpg"';    
    $cmd2='/usr/bin/gdalwarp -r near -tps -co COMPRESS=NONE  "/tmp/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky'.$i.'.jpg" "/opt/lampp/htdocs/Vietnam_map_history/img/Timeline_georeferencer/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky'.$i.'_modified.tif"';
    
    
    echo $cmd1;
    echo '<br>';
    echo $cmd2;
    echo '<br>';
    
    //echo runcmd($cmd1);
    //echo runcmd($cmd2);    
}

/*
gdal_translate -of GTiff -gcp 200.277 783.707 104.722 8.602 -gcp 144.839 549.381 103.696 13.2466 -gcp 390.007 285.048 108.691 18.5118 -gcp 474.866 184.001 110.537 20.471 -gcp 431.522 567.563 109.474 12.8977 "/opt/lampp/htdocs/Vietnam_map_history/img/Timeline/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky8.jpg" "/tmp/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky8.jpg"
gdalwarp -r near -tps -co COMPRESS=NONE  "/tmp/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky8.jpg" "/opt/lampp/htdocs/Vietnam_map_history/img/Timeline_georeferencer/ban-do-lanh-tho-viet-nam-qua-cac-thoi-ky8_modified.tif"
*/

//echo runcmd('sudo -S python /opt/lampp/htdocs/python/raster_process.py --input "/opt/lampp/htdocs/python/upload/0901201993905am_h1.tif" 2>&1');

?>
