<?php
/**
 * -----------------------------------
 * Jpx Dropbox for wordpress
 * v1.0
 *
 * Copyright 2013, nukboon@gmail.com
 * -----------------------------------
 * 
 * Dropbox application configuration
 * If you need more information see {@link https://www.dropbox.com/developers/core/start/php}
 *
 * @package Jpx_Dropbox
 * @version 1.0
 * @author ツliverbool
 * @copyright (c) 2013 nukboon@gmail.com
 * 
 **/

define("JPX_CFG", json_encode(array(

	// @type string your application key
	"dbx_key"			=> "dhtt6c67huwuvor",

	// @type string your application secret
	"dbx_secret"		=> "7cxrl9uh5h2c95k",

	// @type string dropbox permission type {@link https://www.dropbox.com/developers/reference}
	// AppFolder/FullDropbox follow by your selection on app register.
	"dbx_access_type"	=> "FullDropbox",

	// @type string DON NOT CHANGE dropbox access token auto save by jpx dropbox plugin.
	"dbx_access_token"	=> "a|41aibzuqo7hgd9s|dzya2w6kb5sjmyf",

	// @type string dropbox start root
	"dbx_root"			=> "/help-service",

	// @type string url to access this application
	"jpx_url"			=> "http://cdn.joyprice.com/js/libs/dropbox",

	// @type boolean user can edit file/folder
	"user_can_edit"		=> false,

	// @type boolean user can delete file/folder.
	"user_can_delete"	=> false,

	// @type boolean separate user folder
	"user_separate"		=> true
)));

// defint path to slim,dropbox library
define("JPX_VENDOR", "/home/joyprice.core/System/Vendor");

?>