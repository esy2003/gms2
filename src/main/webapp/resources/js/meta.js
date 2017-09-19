var meta=meta || {};
meta.common=(()=>{
	var init=(ctx)=>{
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{};
	return { init:init };
})();

meta.index=(()=>{
	var $wrapper,$navbar,$container,ctx,img,js,css,
		temp,algo;
	var init=()=>{
			js=$$('j');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			$navbar=$('#navbar');
			$container=$('#container');
			img=$$('i');
			onCreate();
		};
	var onCreate=()=>{
		$.getScript(temp,(x,y)=>{
			$container.append(compUI.image('loading',img+'/nara.jpg'));
			$('#loading').after(compUI.input('btn','button'));
			$('#btn').val('넘어가자버튼이당');
			$('#btn').mouseover(()=>{
				$container.empty();
				//meta.auth.init();	
				meta.navbar.init();
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('#resultBtn').click(()=>{
					$.getScript(algo,(x,y)=>{
						$('#result').text('결과 : '
								+series.arithmetic());
					});
				});
			});
		});
		};
	return {init:init};
})();

meta.auth=(()=>{
	var $wrapper,ctx,img,js,css,temp;
	var init=()=>{
		onCreate();
		$wrapper=$('#wrapper');
		img=$$('i');
		js=$$('j');
		temp=js+'/template.js';
	};
	var onCreate=()=>{setContentView();};
	var setContentView=()=>{
		$.getScript(temp,(i)=>{
			$wrapper.append(intro.login(img));
			$('#login_input').after(meta.comp.input(
					{
						type : 'button',
						id : 'login_btn',
						value : '로그인'
					}
				));
				$('#login_box').append(meta.comp.input(
					{
						type : 'button',
						id : 'cancel_btn',
						value : '취소'
					}
				));
		});
		
	};
	var joinView=()=>{};
	return {
		init : init
	};
})();
meta.navbar=(()=>{
	var algo,js,temp,$container;
	var init=()=>{
		js=$$('j');
		$container=$('#container');
		algo=js+'/algo.js';
		temp=js+'/template.js';
		onCreate();
		
		/*algo=js+'/algo.js';*/
		
	};
	var onCreate=()=>{
		$.getScript(temp,()=>{
			var $u1=$("#navbar_ul_stu");
			var $u2=$("#navbar_ul_grade");
			var $u3=$("#navbar_ul_board");
			$u1.addClass("dropdown-menu");
			$u2.addClass("dropdown-menu");
			$u3.addClass("dropdown-menu");
			$('#navbar').html(introUI.navbar());
			$('#container').html(algoUI.series());
			$('#start_txt').after(compUI.input('start','text'));
			$('#start').attr('placeholder','시작값');
			$('#end_txt').after(compUI.input('end','text'));
			$('#end').attr('placeholder','끝값');
			$('#result').before(compUI.input('resultBtn','button'));
			$('#resultBtn').val('결과보기');
			$('#resultBtn').mouseover(()=>{
				$.getScript(algo,()=>{
					$('#result').text('결과 : '+
							series.arithmetic());
				});
			});
			$('.dropdown-menu a').eq(0).on('click',()=>{
				//app.controller.moveTo('member','member_add');
			});
			$('.dropdown-menu a').eq(1).on('click',()=>{
				//app.member.list(1);
			});
			$('.dropdown-menu a').eq(2).on('click',()=>{
				//app.controller.moveTo('member','member_detail');
			});
			$('.dropdown-menu a').eq(3).on('click',()=>{
				//app.controller.deleteTarget('hong','member','member_delete');
			});
			$('.dropdown-menu a').eq(4).on('click',()=>{
				//app.controller.moveTo('grade','grade_add');
			});
			$('.dropdown-menu a').eq(5).on('click',()=>{
				//app.controller.moveTo('hong','grade','grade_list');
			});
			$('.dropdown-menu a').eq(6).on('click',()=>{
				//app.controller.moveTo('grade','grade_detail');
			});
			$('.dropdown-menu a').eq(7).on('click',()=>{
				//app.controller.deleteTarget('hong','grade','grade_delete');
			});
			$('.dropdown-menu a').eq(8).on('click',()=>{
				//app.controller.moveTo('board','board_write');
			});
			$('.dropdown-menu a').eq(9).on('click',()=>{
				//app.controller.moveTo('board','board_list');
			});
			$('.dropdown-menu a').eq(10).on('click',()=>{
				//app.controller.moveTo('board','board_detail');
			});
			$('.dropdown-menu a').eq(11).on('click',()=>{
				//app.controller.deleteTarget('hong','board','board_delete');
			});
			$('#arithBtn').on('click',()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('등차수열의 합');
				$('#resultBtn').mouseover(()=>{
					$.getScript(algo,(x1,x2)=>{
						$('#result').text('결과 : '+ series.arithmetic());
					});
				});
			});
			$('#switchBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('스위치수열의 합');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').mouseover(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.switchSeries());
					});
				})
			});
			$('#diffBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('계차수열');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').mouseover(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.diffSeries());
					});
				})
			});
			$('#facBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('팩토리얼');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').mouseover(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.factorial());
					});
				})
			});
			$('#fiboBtn').click(()=>{
				$container.html(algoUI.series());
				$('#start_txt').after(compUI.input('start','text'));
				$('#start').attr('placeholder','시작값');
				$('#end_txt').after(compUI.input('end','text'));
				$('#end').attr('placeholder','끝값');
				$('#result').before(compUI.input('resultBtn','button'));
				$('#resultBtn').val('결과보기');
				$('h1').html('피보나치');
				$('#start').val('1').attr('readonly','true');
				$('#end').val('100').attr('readonly','true');
				$('#resultBtn').mouseover(()=>{
					$.getScript(algo,()=>{
						$('#result').text('결과값'+series.fibonacci());
					});
				})
			});
		});
	};

	return {init:init};
})();


meta.session=
	{
	   init : (x)=>{
				sessionStorage.setItem('x',x);
				sessionStorage.setItem('j',x+'/resources/js');
				sessionStorage.setItem('c',x+'/resources/css');
				sessionStorage.setItem('i',x+'/resources/img');
	   		  },
	   getPath : (x)=>{
				return sessionStorage.getItem(x);
	   		  }
	};
var $$= (x)=>{return meta.session.getPath(x);};
			
