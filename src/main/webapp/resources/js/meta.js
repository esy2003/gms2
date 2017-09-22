var meta=meta || {};
meta.common=(()=>{
	var init=ctx=>{
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
	var $wrapper,$navbar,$container,ctx,img,js,css,$content,
		temp,algo;
	var init=()=>{
			js=$$('j');
			temp=js+'/template.js';
			algo=js+'/algo.js';
			img=$$('i');
			$navbar=$('#navbar');
			$container=$('#container');
			ctx=$$('x');
			onCreate();
		};
	var onCreate=()=>{
		$.getScript(temp,()=>{
			$container.append(compUI.div('content')).css({'width':'100%'});
			$content=$('#content');
			$content.css({'width':'31%','margin':'0 auto'});
			$content.append(compUI.image('loading',img+'/nara.jpg'));
			$('#loading').css({'margin':'0 auto', 'height':'725px','width':'500px'});
			$container.append(compUI.div('btn-content')).css({'width':'100%'});
			$('#btn-content').css({'width':'50%','margin':'0 auto'});
			$('#loading').after(compUI.h1('h-btn'));
			$('#h-btn').css({'text-align':'center'});
			$('#btn-content').append($('#h-btn'));
			$('#h-btn').append(compUI.span('btn')).attr('display', 'inline');
			$('#btn').html('알고리즘').addClass('label label-primary');
			$('#h-btn').append(compUI.span('btn2')).attr('display', 'inline');
			$('#btn2').html('회원관리').addClass('label label-warning').css({'margin-left':'10px'});
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
			
			compUI.span('bbsBtn')
			.html('게시판관리')
			.addClass('label label-danger')
			.css({'margin-left':'10px'})
			.appendTo($('#h-btn'))
			.mouseover(()=>{
				var url = ctx + '/get/board/list';
				$.getJSON(url,data=>{
				$container.empty();
				$container.append(introUI.navbar());
				compUI.div('content').appendTo($container);
				$content= $('#content');
				var tbl=bbsUI.tbl();
				/*var a = [
					{
						a : 1,
						b : '한국인사',
						c : '안녕',
						d : '길동',
						e : '2017-09-10',
						f : 10
					},{
						a : 2,
						b : '미국인사',
						c : 'hello',
						d : 'json',
						e : '2017-09-20',
						f : 20
					},{
						a : 3,
						b : '태국인사',
						c : '사와디캅',
						d : '푸팟퐁커리',
						e : '2017-09-10',
						f : 1
					},{
						a : 4,
						b : '중국인사',
						c : '니하오',
						d : '쭝궈런',
						e : '2017-09-10',
						f : 101
					},{
						a : 5,
						b : '일본인사',
						c : '곤니찌와',
						d : '나베',
						e : '2017-09-10',
						f : 106
					}
				]*/
				var tr='';
				alert('결과값은'+data.result);
				$.each(data.list,function(i,j) {
					tr+= '<tr style = "height:30px;">'
						+'<td>'+j.articleSeq+'</td>'
						+'<td>'+j.title+'</td>'
						+'<td>'+j.content+'</td>'
						+'<td>'+j.userId+'</td>'
						+'<td>'+j.regdate+'</td>'
						+'<td>'+j.hitCount+'</td>'
						+'</tr>'
				});
				console.log('tr' + tr);
				
				$content.html(tbl);
				$('#tbody').html(tr);
				});
				
				/*$container.empty();
				$container.append(introUI.navbar());
				compUI.div('content').appendTo($container);
				$content= $('#content');
				$('#board-list-h1').html('리스트').css({'text-align':'center'});
				compUI.tag('table', 'board-tab').appendTo($content);
				$('#board-tab').addClass('table');
				compUI.tag('thead', 'board-thead').appendTo($('#board-tab'));
				compUI.tag('tr','board-th-tr').appendTo($('#board-thead'));
				compUI.tag('tbody', 'board-tbody').appendTo($('#board-tab'));
				compUI.tag('tr', 'board-tb-tr').appendTo($('#board-tbody'));
				compUI.noIdTag('th').text('No').appendTo($('#board-th-tr'));
				compUI.noIdTag('th').text('제목').appendTo($('#board-th-tr'));
				compUI.noIdTag('th').text('내용').appendTo($('#board-th-tr'));
				compUI.noIdTag('th').text('등록일').appendTo($('#board-th-tr'));
				compUI.noIdTag('th').text('글쓴이').appendTo($('#board-th-tr'));
				compUI.noIdTag('th').text('조회수').appendTo($('#board-th-tr'));
				for (var i=0;i<6;i++) {
				compUI.noIdTag('td').css({'text-align':'left'}).text('내용이다').appendTo($('#board-tb-tr'));
				}*/
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
			$('#selBtn').click(()=> {
				$.getScript(algo,()=> {
					$container.html(algoUI.sort());
					var sortList = new Array();
					var i=0;
					$('#start_txt').after(compUI.input('start','text'));
					$('#start').attr('placeholder','selection');
					$('#start').after(compUI.input('addBtn','button'));
					$('#addBtn').attr('value','입력하기');
					$('#addBtn').click(()=>{
						sortList[i] = $('#start').val();
						$('#start').val('');
						i++;
						if (i==5) {
							$('#start').remove();
							$('#start_txt').remove();
							$('#addBtn').val('결과보기');
							$('#addBtn').click(()=>{
								console.log('선택정렬');
								$.getScript(algo,()=>{
									$('#addBtn').remove();
									$('#result').html('<h3>결과값 : '+sort.selection(sortList)+'</h3>');
								});
							})
						}
					});
				});
			});
			$('#bubbleBtn').click(()=> {
				$.getScript(algo,()=> {
					$container.html(algoUI.sort());
					var sortList = new Array();
					var i=0;
					$('h1').html('버블버블팝팝');
					$('#start_txt').after(compUI.input('start','text'));
					$('#start').attr('placeholder','selection');
					$('#start').after(compUI.input('addBtn','button'));
					$('#addBtn').attr('value','입력하기');
					$('#addBtn').click(()=>{
						sortList[i] = $('#start').val();
						$('#start').val('');
						i++;
						if (i==5) {
							$('#start').remove();
							$('#start_txt').remove();
							$('#addBtn').val('결과보기');
							$('#addBtn').click(()=>{
								console.log('선택정렬');
								$.getScript(algo,()=>{
									$('#addBtn').remove();
									$('#result').html('<h3>결과값 : '+sort.bubble(sortList)+'</h3>');
								});
							})
						}
					});
				});
			});
			$('#insertBtn').click(()=> {
				$.getScript(algo,()=> {
					$container.html(algoUI.sort());
					var sortList = new Array();
					var i=0;
					$('h1').html('insertion');
					$('#start_txt').after(compUI.input('start','text'));
					$('#start').attr('placeholder','selection');
					$('#start').after(compUI.input('addBtn','button'));
					$('#addBtn').attr('value','입력하기');
					$('#addBtn').click(()=>{
						sortList[i] = $('#start').val();
						$('#start').val('');
						i++;
						if (i==5) {
							$('#start').remove();
							$('#start_txt').remove();
							$('#addBtn').val('결과보기');
							$('#addBtn').click(()=>{
								console.log('선택정렬');
								$.getScript(algo,()=>{
									$('#addBtn').remove();
									$('#result').html('<h3>결과값 : '+sort.insertion(sortList)+'</h3>');
								});
							})
						}
					});
				});
			});
			$('#lankBtn').click(()=> {
				$.getScript(algo,()=> {
					$container.html(algoUI.sort());
					$('#start_txt').after(compUI.input('start','text'));
					$('#start').attr('placeholder','시작값');
					$('#end_txt').after(compUI.input('end','text'));
					$('#end').attr('placeholder','끝값');
					$('#result').before(compUI.input('resultBtn','button'));
					$('#resultBtn').val('결과보기');
					$('h1').html('랭킹');
				});
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
			
