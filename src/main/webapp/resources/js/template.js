var compUI={
	image : (x,y)=>{
			return $('<img/>',
			{	
				id : x,
				src : y
			}); 
		},
	input : (x,y)=>{
		return $('<input/>',
		{
			id : x,
			type : y
		});
	},
	h1 : x => {
		return $('<h1/>', 
				{
			id : x
		});
	},
	span : x => {
		return $('<span/>', 
				{
			id : x
		});
	},
	div : x => {
		return $('<div/>', 
				{
			id : x
		});
	},
	iTxt : x => {
		return $('<input/>', 
				{
			id : x, type : 'text'
		});
	},
	aBtn : x => {
		return $('<a>',
				{
			href : '#', role : 'button', id : x
		});
	},
	iBtn : x => {
		return $('<input/>', 
				{
			id : x, type : 'button'
		});
	},
	br : ()=> {
		return $('<br/>');
	},
	tag : (x,y) => {
		return $('<'+x+'/>',{
			id:y
		});
	},
	noIdTag : (x) => {
		return $('<'+x+'/>')
	},
	classTag : (x,y)=> {
		return $('<'+x+'/>',{
			class:y
		});
	}
}
var introUI={
	
	login : i=>{ return '<div id="container">'
		+'<div id="login_box">'
		+	'<img src="'+i+'/login.jpg" alt="" /><br />'
		+	'<span id="login_id">ID</span>'
		+	'<input id="login_input" type="text"  /> <br />'
		+	'<span id="login_pass">PASSWORD</span> '
		+	'<input type="text"  /> <br />'
		+'</div>'
	+'</div>';
	},
	navbar : ()=>{
		return '<nav class="navbar navbar-inverse">'
		+'  <div class="container-fluid">'
		+'    <div class="navbar-header">'
		+'      <a class="navbar-brand" href="#">GMS</a>'
		+'    </div>'
		+'    <ul class="nav navbar-nav">'
		+'      <li class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" '
		+'          	aria-haspopup="true" '
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">회원관리 <span class="caret"></span></a>'
		+'          	</span></a>'
		+'          <ul id="navbar_ul_stu" class="dropdown-menu">'
		+'            <li><a>학생추가</a></li>'
		+'            <li><a>학생목록</a></li>'
		+'            <li><a>학생조회</a></li>'
		+'            <li></li>'
		+'            <li><a>학생삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_grade" class="dropdown-menu">'
		+'            <li><a>성적추가</a></li>'
		+'            <li><a>성적목록</a></li>'
		+'            <li><a>성적조회</a></li>'
		+'            <li></li>'
		+'            <li><a>성적삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a>게시글추가</a></li>'
		+'            <li><a>게시글목록</a></li>'
		+'            <li><a>게시글조회</a></li>'
		+'            <li></li>'
		+'            <li><a>게시글삭제</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="arithBtn">등차수열</a></li>'
		+'            <li><a id="switchBtn">스위치수열</a></li>'
		+'            <li><a id="diffBtn">계차수열</a></li>'
		+'            <li><a id="facBtn">팩토리얼</a></li>'
		+'            <li><a id="fiboBtn">피보나치</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배 열<span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="selBtn">선택정렬</a></li>'
		+'            <li><a id="bubbleBtn">버블정렬</a></li>'
		+'            <li><a id="insertBtn">삽입정렬</a></li>'
		+'            <li><a id="lankBtn">석차구하기</a></li>'
		+'            <li><a id="binsearchBtn">이분검색</a></li>'
		+'            <li><a id="mergeBtn">병합</a></li>'
		+'            <li><a id="stackBtn">스택</a></li>'
		+'          </ul>'
		+'        </li>'
		+'      <li class="dropdown">'
		+'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">매트릭스<span class="caret"></span></a>'
		+'          <ul id="navbar_ul_board" class="dropdown-menu">'
		+'           <li><a id="matrixBtn">기본 5행 5열</a></li>'
		+'            <li><a id="rightBtn">직각삼각형</a></li>'
		+'            <li><a id="zigzagBtn">지그재그</a></li>'
		+'            <li><a id="diamondBtn">다이아몬드</a></li>'
		+'            <li><a id="sandglass">모래시계</a></li>'
		+'            <li><a id="beanBtn">오른쪽 빈삼각형</a></li>'
		+'            <li><a id="twoSameBtn">이등변삼각형</a></li>'
		+'            <li><a id="90TurnBtn">90도 회전</a></li>'
		+'            <li><a id="snailBtn">달팽이</a></li>'
		+'            <li><a id="diagonalBtn">대각선채우기</a></li>'
		+'            <li><a id="magicBtn">마방진</a></li>'
		+'            <li><a id="matrixChangeBtn">행렬변환</a></li>'
		+'          </ul>'
		+'        </li>'
		+'    </ul>'
		+'    <span class="float-right">${user.name} &nbsp;'
		+'    	<a id="logout" >로그아웃</a></span>'
		+'  </div>'
		+'</nav>';
	}
};

var algoUI={
	series : ()=>{
		return '<div id="content">'
			+'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
			+'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
			+'<br/><span id="end_txt">끝   값:</span><br/>'
			+'<div id="result"></div>';
	},
	sort : () => {
		return '<div id="content">'
		+'<h1>선택정렬</h1>'
		+'<span id="start_txt">배열값: &nbsp;&nbsp;</span>'
		+'<div id="result"></div>';
	}
};
var bbsUI={
		count : ()=> {
			return '<div id="total" style="height: 40px; width: 300px;"></div>'
			+'<div style="height: 40px; width: 300px;">'
			+'</div>';
		},
		writeBtn : ()=> {
			return '<input id="writeBtn" type="button" value="글쓰기" class="btn btn-primary"></input>';
		},
		pagination : ()=> {
			return '<nav aria-label="Page navigation" style="text-align: center;">'
			+'  <ul class="pagination">'
			+'  <li><a href="#"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a></li>'
			+'    <li>'
			+'      <a href="#" aria-label="Previous">'
			+'        <span aria-hidden="true">&laquo;</span>'
			+'      </a>'
			+'      </li>'
			+'				<li class="active"><a href="#">1</a></li>'
			+'				<li><a>2</a></li>'
			+'				<li><a>3</a></li>'
			+'				<li><a>4</a></li>'
			+'				<li><a>5</a></li>'
			+'    <li>'
			+'      <a href="#" aria-label="Next">'
			+'        <span aria-hidden="true">&raquo;</span>'
			+'      </a>'
			+'    </li>'
			+'    <li><a href="#"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>'
			+'  </ul>'
			+'</nav>';
		},
		search : ()=> {
			return '	<div class="row">'
			+  '<div class="col-lg-6" style="width:500px; margin:0 auto;">'
			+    '<div class="input-group">'
			+      '<input id="searchName" name="searchName" type="text" class="form-control" placeholder="Search for...">'
			+      '<span class="input-group-btn">'
			+     '   <button class="btn btn-default" type="button" onclick="app.controller.searchStudent()">Go!</button>'
			+     ' </span>'
			+   ' </div><!-- /input-group -->'
			+  '</div><!-- /.col-lg-6 -->'
			+'</div><!-- /.row -->';
		},
		tbl : ()=> {
			var tbl='<table id=tbl border=1 style = "margin:0 auto; width: 1100px; text-align:center;"'
				+ '<thead><tr style="30px;">';
			var a = [{width:'5%',txt:'NO'},
				{width:'15%',txt:'제 목'},
				{width:'40%',txt:'내 용'},
				{width:'12%',txt:'글쓴이'},
				{width:'10%',txt:'작성일'},
				{width:'10%',txt:'조회수'}];
			$.each(a, (i,j)=> {
				tbl+= '<th style="width:"' + j.width
					+ '; text-align : center;">' + j.txt + '</th>'
			});
			tbl += '</tr></thead><tbody id="tbody">';
			tbl += '</tbody></table></div>';
			return tbl;
		},
		detail : ()=> {
			return '<div class="page-header" style="text-align: center;">'
			+'	<h1 style="display:inline;">게시판</h1>'
			+'		<a id="goList" style="font-size: large;">목록보기</a>'
			+'</div>'
			+'<div class="container">'
			+'	<div class="row">'
			+'		<div class="col-md-12">'
			+'			<div class="well well-sm">'
			+'				<form class="form-horizontal" method="post">'
			+'				<fieldset>'
			+'				<legend id="text-header-board" class="text-center header">게시글쓰기</legend>'
			+'				<div id="form-group" class="form-group">'
			+'				<span id="regdate" name="regdate"/>'
			+'					<span class="col-md-1 col-md-offset-2 text-center">'
			+'						<i class="fa fa-user bigicon"></i>'
			+'					</span>'
			+'					<div class="col-md-12">'
			+'						<input id="fname" name="title" type="text" placeholder="제 목" class="form-control" />'
			+'					</div>'
			+'				</div>'
			+'				<div class="form-group">'
			+'					<span class="col-md-1 col-md-offset-2 text-center">'
			+'						<i class="fa fa-user bigicon"></i>'
			+'					</span>'
			+'					<div class="col-md-12">'
			+'						<input id="name" name="name" type="text" placeholder="글쓴이" class="form-control" />'
			+'					</div>'
			+'				</div>'
			+'				<div class="form-group">'
			+'					<span class="col-md-1 col-md-offset-2 text-center">'
			+'						<i class="fa fa-pencil-square-o bigicon"></i>'
			+'					</span>'
			+'					<div class="col-md-12">'
			+'						<textarea class="form-control" name="message" id="message" rows="15"></textarea>'
			+'					</div>'
			+'				</div>'
			+'				<div class="form-group">'
			+'					<div class="col-md-12 text-center">'
			+'						<button id="okBtn" type="submit" style="width:200px" class="btn +btn-primary btn-lg">확인</button>'
			+'						<button id="cancleBtn" type="reset" style="width:200px" class="btn +btn-danger btn-lg">취소</button>'
			+'					</div>'
			+'				</div>'
			+'				</fieldset>'
			+'				</form>'
			+'			</div>'
			+'		</div>'
			+'	</div>'
			+'</div>'
			+'<div class="modal fade alert" id="modal" tabindex="-1" '
			+'role="dialog" aria-labelledby="modalLabel" aria-hidden="true">'
			+'<div class="modal-dialog">'
			+'<div class="modal-content">'
			+'<div class="modal-header">'
			+'<button type="button" class="close" data-dismiss="modal">'
			+'<span aria-hidden="true">x</span>'
			+'<span class="sr-only">Close</span></button>'
			+'<h3 class="modal-title" id="modalLabel">정말 삭제하시겠습니까?</h3>'
			+'</div>'
			+'<div class="modal-body">'
			+'<form>'
			+'<div class="form-group">'
			+'<label for="inputPass">Password</label>'
			+'<input type="password" class="form-control"'
			+'id="user-email2" placeholder="Enter Password">'
			+'</div>'
			+'<button type="submit" style="width:200px" '
			+'id="passCheckBtn" class="btn btn-primary center-block">확인</button>'
			+'</form>'
			+'</div>'
			+'</div>'
			+'</div>'
			+'</div>'
		}
}