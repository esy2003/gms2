var meta=meta || {};

meta.common=(function() {
	var init = function(ctx) {
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=function() {
		setContentView();
	};
	var setContentView=function() {
		
	};
	return {
		init:init
	};
})();

meta.auth=(function() {
	var $wrapper,ctx,img,js,css;
	var init=function() {
		onCreate();
	};
	var onCreate=function() {
		setContentView();
	};
	var setContentView=function() {
		$wrapper=$('#wrapper');
		img = $$('i');
		loginView();
	};
	var loginView=function() {
		var $ui = 
			    '<div id="gms-container">'
		      + '<div id="login_box">'
		      +   '<img class="gms-imgsize" src="'+ img +'/nara.jpg" alt="" /><br />'
		      +   '<div id="login-fail" style="margin: 0 auto; width:150px; height: 20px; color: red;"></div>'
		      +   '<span class="gms-idtex">ID</span>'
		      +   '<input type="text" id="login_input" name="id" /><br />'
		      +   '<span class="gms-tex-sty" >PASSWORD</span>'
		      +   '<input type="password" id="input_pass" name="pass" /><br />'
		      +   '<br />'
		      +   '</div>'
		      +	  '</div>'
		$wrapper.append($ui);

		$('#login_input').after(meta.comp.input({
			type:'button',
			id:'login_button',
			value: '로그인'
		}));
		$('#login_box').append(meta.comp.input({
			type:'button',
			id:'cancle_button',
			value: '취소'
		}));
	};
	return {
		init:init
	};
})();

meta.ui=(function() {
	var $wrapper,ctx,img,js,css;
	var init = function() {
		$wrapper=$('#wrapper');
		img=$$('i');
	};
	var navbar = function() {
		$wrapper.html(
				'<nav class="navbar navbar-inverse">'
				+'  <div class="container-fluid">'
				+'    <div class="navbar-header">'
				+'      <a class="navbar-brand" href="#">WebSiteName</a>'
				+'    </div>'
				+'    <ul class="nav navbar-nav">'
				+'      <li class="active"><a id="main-go"><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
				+'      <li class="dropdown">'
				+'      	<a href="#" class="dropdown-toggle"'
				+'      	data-toggle="dropdown" role="button"'
				+'      	aria-haspopup="true" aria-expanded="false">회원관리<span class="caret"></span></a>'
				+'      	<ul id="navbar_drop_stu" class="dropdown-menu">'
				+'      		<li><a>학생추가</a></li>'
				+'      		<li><a>학생목록</a></li>'
				+'      		<li><a>학생조회</a></li>'
				+'      		<li></li>'
				+'      		<li><a>학생삭제</a></li>'
				+'      	</ul>'
				+'      </li>'
				+'      <li class="dropdown">'
				+'      	<a href="#" class="dropdown-toggle"'
				+'      	data-toggle="dropdown" role="button"'
				+'      	aria-haspopup="true" aria-expanded="false">성적관리<span class="caret"></span></a>'
				+'      	<ul id="navbar_drop_grade" class="dropdown-menu">'
				+'      		<li><a>성적입력</a></li>'
				+'      		<li><a>성적목록</a></li>'
				+'      		<li><a>성적조회</a></li>'
				+'      		<li></li>'
				+'      		<li><a>성적삭제</a></li>'
				+'      	</ul>'
				+'      </li>'
				+'      <li class="dropdown">'
				+'      	<a href="#" class="dropdown-toggle"'
				+'      	data-toggle="dropdown" role="button"'
				+'      	aria-haspopup="true" aria-expanded="false">게시판관리<span class="caret"></span></a>'
				+'      	<ul id="navbar_drop_board" class="dropdown-menu">'
				+'      		<li><a>게시글추가</a></li>'
				+'      		<li><a>게시글목록</a></li>'
				+'      		<li><a>게시글조회</a></li>'
				+'      		<li></li>'
				+'      		<li><a>게시글삭제</a></li>'
				+'      	</ul>'
				+'      </li>'
				+		'<li class="dropdown">'
				+'      	<a href="#" class="dropdown-toggle"'
				+'      	data-toggle="dropdown" role="button"'
				+'      	aria-haspopup="true" aria-expanded="false">수열<span class="caret"></span></a>'
				+'      	<ul id="navbar_drop_board" class="dropdown-menu">'
				+'      		<li><a id="arithBtn">등차수열</a></li>'
				+'      		<li><a id="switchBtn">스위치수열</a></li>'
				+'      		<li><a id="geoBtn">등비수열</a></li>'
				+'      		<li><a id="facBtn">팩토리얼</a></li>'
				+'      		<li><a id="fiboBtn">피보나치</a></li>'
				+'      	</ul>'
				+'      </li>'
				+'    </ul>'
				+'    	<div class="user-box-container">'
			+'		    	<span class="user-box">${user.name } &nbsp; <a id="logout">로그아웃</a></span>'
		+'			    </div>'
		+'		  </div>'
		+'		</nav>'
	);};
	var arithmetic=function() {
		var content= '<div id="content">' 
			+'<h1>등차수열의 합</h1>'
			+ '<span id="start_text">시작값:&nbsp;&nbsp;</span>'
			+ '<br/><span id="end_text">끝    값:</span>'
			+ '<div id="result"></div></div>';
		$wrapper.after(content);
		$('#start_text').after(meta.comp.input({
			id:'start_txt',
			type:'text',
			placeholder:'시작값'
		}))
		$('#end_text').after(meta.comp.input({
			id:'end_txt',
			type:'text',
			placeholder:'끝값'
		}))
		$('#end_txt').after(meta.comp.input({
			type:'button',
			id:'operate_btn1',
			value:'계산하기'
		}));
	};
	var switchSeries = function() {
		var content= '<div id="content">' 
			+'<h1>스위치시리즈</h1>'
			+ '<span id="start_text">시작값:&nbsp;&nbsp;</span>'
			+ '<br/><span id="end_text">끝    값:</span>'
			+ '<div id="result"></div></div>';
		$wrapper.after(content);
		$('#start_text').after(meta.comp.input({
			id:'start_txt',
			type:'text',
			placeholder:'시작값'
		}));
		$('#end_text').after(meta.comp.input({
			id:'end_txt',
			type:'text',
			placeholder:'끝값'
		}));
		$('#end_txt').after(meta.comp.input({
			type:'button',
			id:'operate_btn2',
			value:'계산하기'
		}));
	};
	
	return {
		init:init, arithmetic:arithmetic, navbar : navbar, switchSeries : switchSeries
	};
})();

meta.comp={
		input : function(json) {
			return $('<input/>',json);
		}
	};

meta.session={
	init : function(x) {
		sessionStorage.setItem('x', x);
		sessionStorage.setItem('j', x+'/resources/js');
		sessionStorage.setItem('i', x+'/resources/img');
		sessionStorage.setItem('c', x+'/resources/css');
	},
	getPath : function(x) {
		return sessionStorage.getItem(x);
		}
	};

var $$ = function(x) {return meta.session.getPath(x);};

meta.index=(function() {
	var init=function() {
		onCreate();
		meta.ui.init();
	};
	var onCreate=function() {
		setContentView();
		$('#loadingBtn').on('mouseover', function() {
			$wrapper.empty();
			//meta.auth.init();
			meta.ui.navbar();
			meta.ui.arithmetic();
			$('#operate_btn1').on('click', function() {
				$('#result').text('결과 : ' + meta.algo.arithmetic(
						$('#start_txt').val(),
						$('#end_txt').val()
						));
			});
			$('#arithBtn').on('click', function() {
				alert('등차수열 클릭');
				$('#content').empty();
				meta.ui.arithmetic();
				$('#operate_btn1').on('click', function() {
					$('#result').text('결과 : ' + meta.algo.arithmetic(
							$('#start_txt').val(),
							$('#end_txt').val()
							));
				});
				$('#operate_btn1').on('click', function() {
					$('#result').text('결과 : ' + meta.algo.arithmetic(
							$('#start_txt').val(),
							$('#end_txt').val()
							));
			});
			});
			$('#switchBtn').on('click', function() {
				alert('스위치 클릭');
				$('#content').empty();
				meta.ui.switchSeries();
				$('#operate_btn2').on('click', function() {
					$('#result').text('결과 : ' + meta.algo.switchSeries(
							$('#start_txt').val(),
							$('#end_txt').val()
							));
				});
			});
			$('#geoBtn').on('click', function() {
				alert('등비수열 클릭');
				$('#content').empty();
			});
			$('#facBtn').on('click', function() {
				alert('팩토리얼 클릭');
				$('#content').empty();
			});
			$('#fiboBtn').on('click', function() {
				alert('피보나치 클릭');
				$('#content').empty();
			});
			//meta.ui.switchSeries();
		});
	};
	var setContentView=function() {
		$wrapper = $('#wrapper');
		img = $$('i');
		ctx = $$('x');
		var $image = $('<img/>',
				{
					id : 'loading',
					src : img + '/loading.gif'
				});
		$wrapper.append($image);
		
		var $imageBtn = $('<input/>',{
			id : 'loadingBtn',
			type :'button',
			value :'로딩버트은~~~'
		});
		$wrapper.append($imageBtn);
	};
	return {
		init:init
	};
})();

meta.algo={
	arithmetic : function(s,e) {
		/*1부터 100까지 등차수열의 합*/
			var sum=0;
			var start = s*1;
			var end = e*1;
			for(var i=start;i<=end;i++) {
				sum +=i;
			}
			return sum;
	},
	switchSeries : function(s,e) {
		var sum=0;
		var sw=0;
		var start = s*1;
		var end = e*1;
		do {
			start=start+1;
			if(sw==0) {
				sum=sum+start;
				sw=1;
			}
			else {
				sum=sum-start;
				sw=0;
			}
		}while(start<=end);
		return sum;
	}
};