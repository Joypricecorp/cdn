<?php
/**
 * -----------------------------------
 * Jpx Dropbox - core php
 * v1.0
 *
 * Copyright 2013, nukboon@gmail.com
 * -----------------------------------
 * 
 * @package Jpx_Dropbox
 * @version 1.0
 * @author ツliverbool
 * @copyright (c) 2013 nukboon@gmail.com
 * 
 **/

defined('JPX_CFG') or die('restrict access.');

if(!function_exists('printr')){
/**
 * print debug message use it when you want print pre tag message
 * and see rendered message format with parse special charecters like \n\r
 *
 * @param mixed $a
 * @param null  $title
 */
function printr($a, $title = null) {
	echo '<pre>';
	echo $title ? ('<b>' . $title .':</b>') : '';
	print_r($a);
	echo '</pre>';
	echo "\n";
}
}

function jpx_($str){
	return $str;
}

/**
 * parse dropbox time to your server time
 *
 * @param string $str   dropbox date time string format:
 *                      "%a, %d %b %Y %H:%M:%S %z" ("Sat, 21 Aug 2010 22:31:20 +0000")
 *
 * @return string
 * @see https://www.dropbox.com/developers/core/docs#date-format
 */
function jpx_time($str) {
	return strftime("%a, %d %b %Y %H:%M:%S", strtotime($str));
}

/**
 * exit application with json encode option
 *
 * @param string|array  $val message to exit
 * @param bool          $json true to json_encode
 *
 * @return void
 */
function jpx_exit($val, $json = false) {
	if($json){
		echo json_encode($val);
		exit;
	}

	if(is_array($val) || is_object($val)){
		printr($val);
		exit;
	}

	echo $val;
	exit;
}

class JpxView extends \Slim\View {
	/**
	 * magic get and set data
	 *
	 * @return mixed
	 */
	public function data(){
		$args = func_get_args();
		if(empty($args))
			return $this->getData();

		if(count($args) == 1 && gettype($args[0]) == 'string')
			return $this->getData($args[0]);

		if(count($args) == 2)
			return $this->setData($args[0], $args[1]);

		return $this->setData($args[0]);
	}

	/**
	 * @override slim view
	 *
	 * @param string $template
	 */
	public function display($template)
	{
		$tpl = $this->fetch($template);
		echo $tpl;
	}
}