<?php 
    $current_page=$_SERVER['REQUEST_URI'];
    $current_page=str_replace('/rfc-website/','',$current_page);
    $current_page=str_replace('/','',$current_page);
    if(empty($current_page)){
        $current_page='home';
    }

    $base='/rfc-website';
