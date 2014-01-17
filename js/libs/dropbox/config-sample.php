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
	"dbx_key"			=> "Your application key",

	// @type string your application secret
	"dbx_secret"		=> "Your application secret",

	// @type string dropbox permission type {@link https://www.dropbox.com/developers/reference}
	// AppFolder/FullDropbox follow by your selection on app register.
	"dbx_access_type"	=> "FullDropbox",

	// @type string DON NOT CHANGE dropbox access token auto save by jpx dropbox plugin.
	"dbx_access_token"	=> "This is will generate with dbx setting",

	// @type string dropbox start root
	"dbx_root"			=> "/",

	// @type string url to access this application
	"jpx_url"			=> "[Your Domain]/wp-content/plugins/jpx_dropbox/dbx",

	// @type boolean user can edit file/folder
	"user_can_edit"		=> true,

	// @type boolean user can delete file/folder.
	"user_can_delete"	=> true,

	// @type boolean separate user folder
	"user_separate"		=> false
)));

// defint path to slim,dropbox library
define("JPX_VENDOR", "[Absolute Path to Your]/wp-content/plugins/jpx_dropbox/vendors");
?>