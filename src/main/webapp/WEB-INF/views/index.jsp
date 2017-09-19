<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<link rel="stylesheet" href="${path.css}/meta.css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="${path.js}/meta.js"></script>
<head>
   <meta charset="UTF-8" />
   <title>Document</title>
</head>
<body>
<div id="wrapper">
	<div id="navbar"></div>
	<div id="container"></div>
</div>
<script>
meta.common.init('${path.ctx }');
</script>
</body>
</html>