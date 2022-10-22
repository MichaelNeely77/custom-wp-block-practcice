<?php 

/**
 * Plugin Name: Neely Custom Block 
 * Description: My custom plugin for contact information
 * 
 * 
 */

 function neely_custom_block_script_register() {
    wp_enqueue_script('neely-custom-block', plugin_dir_url(__FILE__).'neely-block.js', array('wp-blocks','wp-i18n','wp-editor'),true,false);
 
 }
 add_action('enqueue_block_editor_assets', 'neely_custom_block_script_register');