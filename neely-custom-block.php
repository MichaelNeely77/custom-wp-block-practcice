<?php 

/**
 * Plugin Name: Neely Custom Block 
 * Description: My custom plugin for contact information
 * 
 * 
 */

 function neely_custom_block_script_register() {

 
 }
 add_action('enqueue_block_editor_assets', 'neely_custom_block_script_register');