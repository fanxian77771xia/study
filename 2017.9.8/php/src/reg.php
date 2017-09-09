<?php
    
    
    $username = isset($_GET['username'])?$_GET['username']:'没有传参';
    echo $username;

    $arr = array('奥巴马');
    if(in_array($username,$arr)){
        echo 'yes';
    }else{
        echo 'no';
    }
?>