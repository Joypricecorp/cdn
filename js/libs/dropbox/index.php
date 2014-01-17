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

// make sure session started
if(!session_id())
	session_start();

// require configuration file
if(!file_exists(dirname(__FILE__) . '/config.php'))
	die('Setting up your Jpx Dropbox before use it.');

require_once dirname(__FILE__) . '/config.php';

// boot up application
defined('JPX_CFG') or die('restrict access.');

// require the Slim Framework and Dropbox library
include_once JPX_VENDOR. '/Slim/Slim.php';
include_once JPX_VENDOR. '/Dropbox/autoload.php';
use \Slim\Slim as Slim;

// autoload slim framework and custom view
Slim::registerAutoloader();
require_once 'view.php';

/**
 * create jpx application
 */
$app = new Slim(array(
	'mode'  => 'production',
	'debug' => false,
	'view'  => new JpxView(),
	'templates.path' => dirname(__FILE__) . '/tpls'
));

// define blank image
define('JPX_IMG', 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');

/**
 * get dropbox client instance
 * 
 * @return \Dropbox\Client
 */
function jpx_dropbox(){
	try {
		$cfg 	 = json_decode(JPX_CFG);
		$appInfo = Dropbox\AppInfo::loadFromJson(array(
			'key'           => $cfg->dbx_key,
			'secret'        => $cfg->dbx_secret,
			'access_type'   => $cfg->dbx_access_type
		));

		$dbxConfig      = new Dropbox\Config($appInfo, "JPX-Dropbox/1.0");
		$accessToken    = Dropbox\AccessToken::deserialize($cfg->dbx_access_token);
		$dbxClient      = new Dropbox\Client($dbxConfig, $accessToken);

		// append config to easy access
		$dbxClient->cfg = $cfg;

		return $dbxClient;
	}catch(\Exception $e){
		jpx_exit('Opps!. Your dropbox application info incorrected. Please check your key/secret and re-connect to dorpbox.');
	}
}

/**
 * get dropbox root
 * 
 * @param string $append path to append to root (default null)
 * 
 * @return droppath
 */
function jpx_dbx_root($append = null){
	
	$cfg  = json_decode(JPX_CFG);
	$root = jpx_clean_slashe('/'. $cfg->dbx_root);
	$path = $root;

	if($append){
		$apnd = jpx_clean_slashe('/' . $append);
		$path = $root === '/' ? $apnd : str_replace($root, '', $apnd);
		$path = $root . $path;
	}

	if($path !== '/')
		$path = substr($path, -1) === '/' ? substr($path, 0, -1) : $path;

	$path	= jpx_clean_slashe($path);

	if(empty($path))
		throw new Exception("Application require root of dropbox to access. Please setting your application. (jpx.jpx_dbx_root-0)", 0);

	// limit user to access to root path
	if(!jpx_user_is_admin()
		&& ($path === $cfg->dbx_root)
		&& !empty($cfg->user_separate)
	){
		throw new Exception("<strong>Opps!</strong> You can not access to this area. (jpx.jpx_dbx_root-1)", 1);
	}

	return $path;
}

function jpx_clean_slashe($str){
	return preg_replace('#/{2,}#', '/', $str);
}

function jpx_clean_name($path, $name){
	return str_replace('/', '', str_replace($path, '', $name));
}

function jpx_is_image($str){
	return preg_match('/^.*\.(jpg|jpeg|png|gif)$/i', $str);
}

/**
 * remove dbx root path for hidden from code
 */
function jpx_remove_root($path){
	if(jpx_user_is_admin()) return $path;

	$cfg = json_decode(JPX_CFG);
	
	if($cfg->dbx_root === '/') return $path;

	return str_replace($cfg->dbx_root, '', $path);
}

/**
 * check current user is admin
 */
function jpx_user_is_admin(){
	return !empty($_SESSION['jpx_user_is_admin']);
}

/**
 * check user permission, if admin away return true
 * 
 * @param string $key permiss key (delete/edit)
 * 
 * @return boolean
 */
function jpx_user_can($key){
	if(jpx_user_is_admin())
		return true;

	$cfg  = json_decode(JPX_CFG, true);

	return !empty($cfg['user_can_' . $key]);

}

/**
 * get thumb image
 *
 * @param array $img image path
 */
function jpx_tmb($img){
	$dbx = jpx_dropbox();
	$img = jpx_dbx_root(implode('/', $img));
	$tmb = $dbx->getThumbnail('/' . $img, 'png', 'm');

	// this cannot use heaer function to send header !!
	$app = Slim::getInstance();
	$res = $app->response();
	$res['Content-Type'] = 'image/png';

	echo $tmb[1];
}

$app->get('/tmb/:img+', 'jpx_tmb');


/**
 * @param array $img image path
 */
function jpx_link($img) {
	$dbx  = jpx_dropbox();
	$img  = jpx_dbx_root(implode('/', $img));
	$link = $dbx->createShareableLink('/' . $img);
	echo str_replace('www.dropbox.com', 'dl.dropboxusercontent.com', $link);
	exit;
}

$app->get('/link/:img+', 'jpx_link');


/**
 * save folder
 */
function jpx_folder_save() {
	$app = Slim::getInstance();
	// this cannot use response objec to send header !!
	header('Content-Type: application/json');
	$name = $app->request()->post('name');
	$path = $app->request()->post('path');

	$dbx = jpx_dropbox();

	try{

		$path = jpx_dbx_root($path);
		$res  = (object) $dbx->createFolder($path .'/'. $name);

		$res->modified  = jpx_time($res->modified);
		$res->path		= jpx_remove_root($res->path);

		jpx_exit(array(
			'meta'  => $res,
			'name'  => $name,
			'error' => false
		), true);

	}catch (\Exception $e){
		jpx_exit(array(
			'error' => true,
			'msg'   => json_decode($e->getMessage())
		), true);
	}
}

$app->post('/folder/save', 'jpx_folder_save');


/**
 * rename file/folder
 */
function jpx_rename() {
	// this cannot use response objec to send header !!
	header('Content-Type: application/json');

	if(!jpx_user_can('edit'))
		throw new Exception("You can not edit this object. (jpx.jpx_rename)", 2);

	try{

		$app  = Slim::getInstance();
		$req  = $app->request();
		$orig = $req->post('origin');
		$name = trim($req->post('name'));
		$path = jpx_dbx_root($req->post('path')). '/';
		$dbx  = jpx_dropbox();


		$res  = (object) $dbx->move($path.$orig, $path.$name);
		$name = jpx_clean_name($path, $res->path);

		$res->modified  = jpx_time($res->modified);
		$res->path		= jpx_remove_root($res->path);

		jpx_exit(array(
			'meta'  => $res,
			'name'  => $name,
			'error' => false
		), true);

	}catch (\Exception $e){
		jpx_exit(array(
			'error' => true,
			'msg'   => json_decode($e->getMessage())
		), true);
	}
}

$app->post('/rename', 'jpx_rename');

/**
 * upload file
 */
function jpx_upload() {
	// this cannot use response objec to send header !!
	header('Content-Type: application/json');

	$file = (object) $_FILES['file'];
	$app  = Slim::getInstance();
	$path = $app->request()->post('path');
	$name = $app->request()->post('name');// plupload 2 beta
//	$name = $file->name;

	$dbx = jpx_dropbox();

	try {
		$path = jpx_dbx_root($path);
		$f    = fopen($file->tmp_name, 'rb');
		$res  = (object) $dbx->uploadFile($path . '/' . $name, Dropbox\WriteMode::add(), $f);
		$name = jpx_clean_name($path, $res->path); // new name may be rename by dropbox don't use $file->name

		$res->modified  = jpx_time($res->modified);
		$res->path		= jpx_remove_root($res->path);

		@fclose($f);
		@unlink($file->tmp_name);

		jpx_exit(array(
			'file'  => $file,
			'meta'  => $res,
			'name'  => $name,
			'error' => false
		), true);

	}catch (\Exception $e){
		jpx_exit(array(
			'file'  => $file,
			'error' => true,
			'msg'   => json_decode($e->getMessage())
		), true);
	}
}

$app->post('/upload', 'jpx_upload');

function jpx_delete() {
	// this cannot use response objec to send header !!
	header('Content-Type: application/json');

	try {

		if(!jpx_user_can('delete'))
			throw new Exception("You can not delete this object. (jpx.jpx_delete)", 3);
			
		$app  = Slim::getInstance();
		$path = jpx_dbx_root($app->request()->post('path'));
		$dbx  = jpx_dropbox();

		$res  = (object) $dbx->delete($path);
		$name = str_replace($path, '', $res->path);

		$res->modified  = jpx_time($res->modified);
		$res->path		= jpx_remove_root($res->path);

		jpx_exit(array(
			'meta'  => $res,
			'name'  => $name,
			'error' => false
		), true);

	}catch (\Exception $e){
		jpx_exit(array(
			'error' => true,
			'msg'   => json_decode($e->getMessage())
		), true);
	}
}

$app->post('/delete', 'jpx_delete');

/**
 * list files
 *
 * @param string $paths
 */
function jpx_files($paths = ''){

	$app = Slim::getInstance();

	if($app->request()->isOptions())
			jpx_exit(0);

	$dbx = jpx_dropbox();

	if(!empty($paths))
		$path = '/' . implode('/', $paths);

	try {

		$path  = jpx_dbx_root($path);
		$items = (array) $dbx->getMetadataWithChildren($path);
		$path  = jpx_remove_root($path);

		if(empty($items)){
			$items['path'] = $path;

		}else{

			foreach($items['contents'] as $itm){
				$itm = (object) $itm;

				$itm->path = jpx_remove_root($itm->path);
				// replace path and all /
				$itm->name = jpx_clean_name($path, $itm->path);

				if($itm->is_dir){
					$items['folders'][] = $itm;
				}else{
					$items['files'][] = $itm;
				}
			}

			unset($items['contents']);
		}

		$items['path'] = jpx_remove_root($items['path']);
		$app->setCookie('previous-path', $dbx->cfg->jpx_url . $path);

	}catch (\Exception $e){
		$items = array(
			'error' => true,
			'msg'	=> $e->getMessage(),
			'path'	=> $path,
			'refer'	=> $app->getCookie('previous-path')
		);
	}

	$app->view()->data(array(
		'cfg'	=> $dbx->cfg,
		'item'  => $items
	));

	$app->render('index.php');
}

$app->get('/(:paths+)', 'jpx_files');

/**
 * Run the Slim application
 */
$app->run();