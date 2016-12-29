<?php
     header("Content-type:application/json;charset=utf-8");
	require_once('db.php');
	
	
	
	
	if($link){
		//执行成功
		
		
		if(@$_GET['newstype']){
			$newstype = $_GET['newstype'];
		
		$sql = "SELECT * FROM `news` WHERE `newstype`='{$newstype}' ";
		
			
		
		mysqli_query($link,"SET NAMES utf8");
		
		$result = mysqli_query($link,$sql);
		
		$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata,array(
			    
			    'id' => htmlspecialchars_decode($row['id']),
			    'newstype' => htmlspecialchars_decode($row['newstype']),
			    'newstitle' => htmlspecialchars_decode($row['newstitle']),
			    'newsimg' => htmlspecialchars_decode($row['newsimg']),
			    'newstime' => htmlspecialchars_decode($row['newstime']),
			    'newssrc' =>htmlspecialchars_decode($row['newssrc']),
			    
			    
			));
		} 
		echo json_encode($senddata);
	}else{
		$sql = 'SELECT * FROM news';
		mysqli_query($link,"SET NAMES utf8");
		
		$result = mysqli_query($link,$sql);
		
		$senddata = array();
		while($row = mysqli_fetch_assoc($result)){
			array_push($senddata,array(
			    
			    'id' => $row['id'],
			    'newstype' => $row['newstype'],
			    'newstitle' => $row['newstitle'],
			    'newsimg' => $row['newsimg'],
			    'newstime' => $row['newstime'],
			    'newssrc' =>$row['newssrc'],
			    
			    
			));
		} 
		echo json_encode($senddata);
	}
	
	}else{
		echo json_encode(array('success' => 'none'));
		
	}
//mysqli_colse($link);

//	$arr = array(
//					'newstype' => '百家',
//					'newsimg' => 'img/2.jpg',
//					'newstime' => '2016-02-28',
//					'newssrc' => '极客学院',
//					'newstitle' => '测试动态获取的新闻标题',
//	);
	
//	echo json_encode($arr);
?>