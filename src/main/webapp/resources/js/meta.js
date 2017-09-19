var meta=meta || {};

meta.common=(()=> {
	var init = (ctx)=> {
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=()=> {
		setContentView();
	};
	var setContentView=()=> {
		
	};
	return {
		init:init
	};
})();

meta.auth=(()=> {
	var $wrapper,ctx,img,js,css;
	var init=()=> {
		onCreate();
	};
	var onCreate=()=> {
		setContentView();
	};
	var setContentView=()=> {
		$wrapper=$('#wrapper');
		img = $$('i');
		loginView();
	};
	var loginView=()=> {
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

meta.navbar=(function(){
	   var algo, js;
	   var init=function(){
	      onCreate();
	      js=$$('j');
	      algo=js+'/algo.js';
	   };
	   
	   var onCreate=function(){
	      setContentView();
	   };
	   var setContentView=function(){
		   var $u1=$("#navbar_drop_stu");
		   var $u2=$("#navbar_drop_grade");
		   var $u3=$("#navbar_drop_board");
		   
		   $u1.addClass("dropdown-menu");
		   $u2.addClass("dropdown-menu");
		   $u3.addClass("dropdown-menu");
	      $('#main-go').on('click',function(){
	         app.controller.moveTo('common','main');
	      });
	      $('#logout').on('click',function(){
	    	  location.href=app.path.ctx()+"/auth/login_view";
	      });

	      $('.dropdown-menu a').eq(0).on('click',function(){
	         app.controller.moveTo('member','member_add');
	      });
	      $('.dropdown-menu a').eq(1).on('click',function(){
	         app.member.list(1);
	      });
	      $('.dropdown-menu a').eq(2).on('click',function(){
	         app.controller.moveTo('member','member_detail');
	      });
	      $('.dropdown-menu a').eq(3).on('click',function(){
	         app.controller.moveTo('member','member_delete');
	      });

	      $('.dropdown-menu a').eq(4).on('click',function(){
	         app.controller.moveTo('grade','grade_add');
	      });
	      $('.dropdown-menu a').eq(5).on('click',function(){
	         app.controller.list('grade','grade_list');
	      });
	      $('.dropdown-menu a').eq(6).on('click',function(){
	         app.controller.moveTo('grade','grade_detail');
	      });
	      $('.dropdown-menu a').eq(7).on('click',function(){
	         app.controller.moveTo('grade','grade_delete');
	      });
	      
	      $('.dropdown-menu a').eq(8).on('click',function(){
	         app.controller.moveTo('board','board_write');
	      });
	      $('.dropdown-menu a').eq(9).on('click',function(){
	         app.controller.list('board','board_list');
	      });
	      $('.dropdown-menu a').eq(10).on('click',function(){
	         app.controller.moveTo('board','board_detail');
	      });
	      $('.dropdown-menu a').eq(11).on('click',function(){
	         app.controller.moveTo('board','board_delete');
	      });
	      
			$('#arithBtn').on('click', ()=> {
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('1부터 100 등차수열');
				$('#operate_btn').on('mouseover', ()=> {
					$.getScript(algo,(x1,x2)=>{
						$('#result').html('결과 : ' + series.arithmetic());
					});
				});
			});
			$('#switchBtn').on('click', ()=> {
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('1부터 100 스위치 수열');
				$('#operate_btn').on('mouseover', ()=> {
					$.getScript(algo,()=>{
						$('#result').html('결과 : ' + series.switchSeries());						
					})
				});
			});
			$('#diffBtn').on('click', ()=> {
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('1부터 100 diff수열');
				$('#operate_btn').on('mouseover', ()=> {
					$.getScript(algo,()=>{
						$('#result').html('결과 : ' + series.diffSeries());						
					})
				});
			});
			$('#facBtn').on('click', ()=> {
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('팩토리얼');
				$('#operate_btn').on('mouseover', ()=> {
					$.getScript(algo,()=>{
						$('#result').html('결과 : ' + series.factorial());						
					})
				});
			});
			$('#fiboBtn').on('click', ()=> {
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('피보나치');
				$('#operate_btn').on('mouseover', ()=> {
					$.getScript(algo,()=>{
						$('#result').html('결과 : ' + series.fibonacci());						
					})
				});
			});
	   };
	   
	   return {
	      init : init
	      
	   };
	})();

meta.ui=(()=> {
	var $wrapper,ctx,img,js,css;
	var init = ()=> {
		$wrapper=$('#wrapper');
		img=$$('i');
	};
	var navbar = ()=> {
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
				+'      		<li><a id="diffBtn">등비수열</a></li>'
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
	var arithmetic=()=> {
		var content= '<div id="content">' 
			+'<h1>등차수열의 합</h1>'
			+ '<span id="start_text">시작값:&nbsp;&nbsp;</span>'
			+ '<br/><span id="end_text">끝    값:</span>'
			+ '<div id="result"></div></div>';
		$wrapper.after(content);
		$('#start_text').after(meta.comp.input({
			id:'start_txt',
			type:'text',
			placeholder:'시작값',
			value: '1'
		}))
		$('#end_text').after(meta.comp.input({
			id:'end_txt',
			type:'text',
			placeholder:'끝값',
			value:'100'
		}))
		$('#end_txt').after(meta.comp.input({
			type:'button',
			id:'operate_btn',
			value:'계산하기'
		}));
	};
	
	return {
		init:init, arithmetic:arithmetic, navbar : navbar
	};
})();

meta.comp={
		input : (json)=> {
			return $('<input/>',json);
		}
	};

meta.session={
	init : (x)=> {
		sessionStorage.setItem('x', x);
		sessionStorage.setItem('j', x+'/resources/js');
		sessionStorage.setItem('i', x+'/resources/img');
		sessionStorage.setItem('c', x+'/resources/css');
	},
	getPath : function(x) {
		return sessionStorage.getItem(x);
		}
	};

var $$ = (x)=> {return meta.session.getPath(x);};

meta.index=(()=> {
	var algo,js,temp;
	var init=()=> {
		js=$$('j');
		algo = js + '/algo.js';
		temp = js + '/template.js';
		meta.ui.init();
		onCreate();
	};
	var onCreate=()=> {
		$wrapper = $('#wrapper');
		img = $$('i');
		$.getScript(temp,x=> {
			var $image = $('<img/>',
				intro.loading(img));
			$wrapper.append($image);
			var $imageBtn = $('<input/>',{
				id : 'loadingBtn',
				type :'button',
				value :'로딩버트은~~~'
			});
			$('#loading').after($imageBtn);
		
		$imageBtn.on('mouseover', ()=> {
			$wrapper.empty();
			//meta.auth.init();
			meta.ui.navbar();
			meta.navbar.init();
			meta.ui.arithmetic();
			$('h1').html('1부터 100 등차 수열');
			$('#operate_btn').on('mouseover', ()=> {
				$.getScript(algo,()=>{
					$('#result').html('결과 : ' + series.arithmetic());						
				})
			});
		});
		});
	};	
	return {
		init:init
	};
})();