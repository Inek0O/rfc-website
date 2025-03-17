<?php 
    $current_page=$_SERVER['REQUEST_URI'];
    
    $script_name = $_SERVER['SCRIPT_NAME'];
    $base_path = dirname($script_name);
    
    if ($base_path == '/' || $base_path == '\\') {
        $base_path = '';
    }
    
    $current_page = str_replace($base_path, '', $current_page);
    $current_page = trim($current_page, '/');
    
    if(empty($current_page)){
        $current_page='home';
    }

    $base = $base_path;
