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
	var init=()=> {
		onCreate();
		meta.ui.init();
	};
	var onCreate=()=> {
		setContentView();
		$('#loadingBtn').on('mouseover', ()=> {
			$wrapper.empty();
			//meta.auth.init();
			meta.ui.navbar();
			meta.ui.arithmetic();
			$('h1').html('1부터 100 등차 수열');
			$('#operate_btn').on('mouseover', ()=> {
				$('#result').html('결과 : ' + meta.algo.arithmetic(
						$('#start_txt').val(),
						$('#end_txt').val()
						));
			});
			$('#arithBtn').on('click', ()=> {
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('1부터 100 등차수열');
				$('#operate_btn').on('mouseover', ()=> {
					$('#result').html('결과 : ' + meta.algo.arithmetic(
							$('#start_txt').val(),
							$('#end_txt').val()
							));
				});
			});
			$('#switchBtn').on('click', ()=> {
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('1부터 100 스위치 수열');
				$('#operate_btn').on('mouseover', ()=> {
					$('#result').html('결과 : ' + meta.algo.switchSeries(
							$('#start_txt').val(),
							$('#end_txt').val()
							));
				});
			});
			$('#geoBtn').on('click', ()=> {
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('1부터 100 GEO수열');
				$('#operate_btn').on('mouseover', ()=> {
					$('#result').html('결과 : ' + meta.algo.geoSeries(
							$('#end_txt').val()
							));
				});
			});
			$('#facBtn').on('click', ()=> {
				alert('팩토리얼 클릭');
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('팩토리얼');
				$('#operate_btn').on('mouseover', ()=> {
					$('#result').html('결과 : ' + meta.algo.factorial(
							$('#end_txt').val()
							));
				});
			});
			$('#fiboBtn').on('click', ()=> {
				alert('피보나치 클릭');
				$('#content').empty();
				meta.ui.arithmetic();
				$('h1').html('피보나치');
				$('#operate_btn').on('mouseover', ()=> {
					$('#result').html('결과 : ' + meta.algo.fibonacci(
							$('#end_txt').val()
							));
				});
			});
			//meta.ui.switchSeries();
		});
	};
	var setContentView=()=> {
		$wrapper = $('#wrapper');
		img = $$('i');
		ctx = $$('x');
		var $image = $('<img/>',
				{
					id : 'loading',
					src : img + '/nara.jpg'
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
	arithmetic : ()=> {
		/*1부터 100까지 등차수열의 합*/
			var sum=0;
			for(var i=0;i<=100;i++) {
				sum +=i;
			}
			return sum;
	},
	switchSeries : ()=> {
		var sum=0;
		var sw=0;
		var i=0;
		do {
			i=i+1;
			if(sw==0) {
				sum=sum+i;
				sw=1;
			}
			else {
				sum=sum-i;
				sw=0;
			}
		}while(i<100);
		return sum;
	},
	geoSeries : x=> {
		var i=1,j=0,k=0;
		do{
			i+=j;
			k+=i;
			j++;
		}while(j<x);
		return k;
	},
	factorial : x=> {
		var i=1,j=1,k=0;
		do{
			j=j*i;
			i++;
			k=k+j;
		}while(i<=x);
		return k;
	},
	fibonacci : x=> {
		var a=1,b=1,c=0;sum=0,cnt=2;
		do{
			c=a+b;
			b++;
			sum=b+c;
			cnt++;
			if (cnt<x) {
				a=b;
				b=c;
			}
		}while(cnt<x);
		return sum;
	}
};