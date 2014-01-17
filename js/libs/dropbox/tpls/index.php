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

/**
 * @var JpxView $this
 */
$rs         = (object) $this->data();
$item       = (object) $rs->item;
$folders    = (array) $item->folders;
$files      = (array) $item->files;
$jpx_url	= $rs->cfg->jpx_url;

$paths = explode('/', substr($item->path, 1));
$slugs = array();

if($rs->cfg->dbx_root === '/'){
	if(empty($paths[0])) unset($paths[0]);
	$paths = array_merge(array('/'), $paths);
}

?>
<?php if($item->error){?>
	<div class="jpx-access-deny">
		<h2><?php echo jpx_('Access Deny')?></h2>
		<div class="jpx-deny-body">
			<?php echo jpx_($item->msg);?>
		</div>
		<div class="jpx-deny-footer">
			<button type="button" class="jpx-btn jpx-btn-back jpx-icon-left" data-url="<?php echo $item->refer?>"><span><?php echo jpx_('Back')?></span></button>
		</div>
	</div>
<?php }else{?>
	<div class="jpx-path" data-path="<?php echo $item->path?>" data-url="<?php echo $jpx_url . $item->path;?>">
		<div class="jpx-path-name">
			<h2 class="jpx-icon-dropbox"><?php $path = $paths[count($paths)-1]; echo $path === '/' ? ':dropbox' : $path;?><span class="jpx-caret">▼</span></h2>
			<div class="jpx-path-dropdown">
				<ul>
					<?php
						$back = '';
						foreach($paths as $i => $path){
							$path_label = $path;

							if($path === '/'){
								$path = '';
								$path_label = ':dropbox';
							}

							$slugs[] = $path;
							$slug 	 = jpx_clean_slashe('/' . implode('/', $slugs));
					?>
					<?php if($i == count($paths)-1){?>
						<li title="<?php echo $slug?>"><?php echo $path_label?></li>
					<?php }else{?>
						<li><a href="<?php echo $jpx_url . $slug?>" title="<?php echo $slug?>"><?php echo $path_label?></a></li>
					<?php }?>
					<?php }?>
				</ul>
			</div>
		</div>
		<div class="jpx-tools">
			<button type="button" class="jpx-btn jpx-btn-add-folder jpx-icon-folder"><span><?php echo jpx_('Add Folder')?></span></button>
			<button type="button" class="jpx-btn jpx-btn-add-file jpx-icon-camera"><span><?php echo jpx_('Upload Photos')?></span></button>
			<?php if(jpx_user_can('edit')){?>
			<button type="button" class="jpx-btn jpx-btn-rename jpx-icon-pencil" disabled="disabled"><span><?php echo jpx_('Rename');?></span></button>
			<?php }?>
			<?php if(jpx_user_can('delete')){?>
			<button type="button" class="jpx-btn jpx-btn-delete jpx-icon-trash" disabled="disabled"><span><?php echo jpx_('Delete')?></span></button>
			<?php }?>
			<span class="jpx-btn-separate"></span>
			<?php
				if(count($slugs) > 1){
					unset($slugs[count($slugs)-1]);
					$back = $jpx_url .'/'. implode('/', $slugs);
				}
			?>
			<button type="button"
					class="jpx-btn-x jpx-btn-back jpx-icon-left"<?php if(empty($back)){?> disabled="disabled"<?php }?>
			        data-url="<?php echo $back?>"><span><?php echo jpx_('Back')?></span></button>
			<button type="button" class="jpx-btn-x jpx-btn-refresh jpx-icon-cw"><span><?php echo jpx_('Refresh')?></span></button>
			<div class="jpx-btn-group">
				<button type="button" class="jpx-btn-x jpx-btn-thumb jpx-icon-th-large"><span><?php echo jpx_('Thumbnail')?></span></button>
				<button type="button" class="jpx-btn-x jpx-btn-list jpx-icon-th-list active"><span><?php echo jpx_('List')?></span></button>
			</div>
		</div>
	</div>
	<div class="jpx-list">
		<table class="jpx-header">
			<tr>
				<td class="jpx-name"><?php echo jpx_('Name')?></td>
				<td class="jpx-kind"><?php echo jpx_('Kind')?></td>
				<td class="jpx-size"><?php echo jpx_('Size')?></td>
				<td class="jpx-modified"><?php echo jpx_('Modified')?></td>
			</tr>
		</table>
		<div class="jpx-lists">
			<ul class="jpx-folders">
			<?php foreach($folders as $r){?>
				<li class="jpx-item" data-type="folder" data-img="no" data-path="<?php echo $r->path?>">
					<img src="<?php echo JPX_IMG?>" data-href="<?php echo $jpx_url . $r->path?>">
					<span class="jpx-name"><a href="<?php echo $jpx_url . $r->path?>" class="jpx-label"><?php echo $r->name;?></a></span>
					<span class="jpx-kind"><?php echo jpx_('folder')?></span>
					<span class="jpx-size"><?php echo jpx_('--')?></span>
					<span class="jpx-modified" title="<?php echo jpx_time($r->modified);?>"><?php echo jpx_time($r->modified);?></span>
				</li>
			<?php }?>
			</ul>
			<ul class="jpx-files">
			<?php foreach($files as $r){?>
				<li class="jpx-item" data-type="file" data-path="<?php echo $r->path;?>" data-img="<?php echo jpx_is_image($r->path) ? 'yes': 'no'?>">
					<img class="jpx-img jpx-<?php echo jpx_is_image($r->path) ? 'lazy': 'unknow'?>" src="<?php echo JPX_IMG?>" data-original="<?php echo $jpx_url . '/tmb' . $r->path;?>">
					<span class="jpx-name"><span class="jpx-label"><?php echo $r->name;?></span></span>
					<span class="jpx-kind"><?php echo $r->mime_type;?></span>
					<span class="jpx-size"><?php echo $r->size;?></span>
					<span class="jpx-modified" title="<?php echo jpx_time($r->modified);?>"><?php echo jpx_time($r->modified);?></span>
				</li>
			<?php }?>
			</ul>
		</div>
	</div>
	<div class="jpx-footer">
		<button type="button" class="jpx-btn jpx-btn-ok jpx-btn-choose" disabled="disabled"><span><?php echo jpx_('Select')?></span></button>
		<button type="button" class="jpx-btn jpx-btn-preview" disabled="disabled"><span><?php echo jpx_('Preview')?></span></button>
		<button type="button" class="jpx-btn jpx-btn-getlink" disabled="disabled"><span><?php echo jpx_('Get Link')?></span></button>
	</div>
<?php }?>