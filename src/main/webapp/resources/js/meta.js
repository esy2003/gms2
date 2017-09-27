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
				meta.board.lists();
			});
		});
		};
	return {init:init};
})();

meta.board=(()=>{
	var temp,$container,$navbar,ctx;
	var init=()=> {
		temp=$$('j')+"/template.js";
		$container=$('#container');
		$navbar=$('#navbar');
		ctx=$$('x');
	}
	var lists = ()=> {
		init();
		var url = ctx + '/list/board';
		$.getJSON(url,data=>{
			alert('토오탈은 : '+data.total.count);
		$container.empty();
		$container.append(introUI.navbar());
		compUI.div('content').appendTo($container);
		$content= $('#content');
		$content.append(bbsUI.search());
		$content.append(bbsUI.count());
		$content.append(bbsUI.writeBtn());
		var tbl=bbsUI.tbl();

		var tr='';
		alert('결과값은'+data.result);
		$.each(data.list,function(i,j) {
			tr+= '<tr style = "height:30px;">'
				+'<td>'+j.articleSeq+'</td>'
				+'<td><a onclick="meta.board.detail('+j.articleSeq+')">'+j.title+'</a></td>'
				+'<td>'+j.content+'</td>'
				+'<td>'+j.userId+'</td>'
				+'<td>'+j.regdate+'</td>'
				+'<td>'+j.hitCount+'</td>'
				+'</tr>'
		});
		console.log('tr' + tr);
		$count = $('#total').text('총 게시글 수우우우');
		$count.append(data.total.count);
		$('#writeBtn').click(e=>{
			meta.board.write();
		});
		$content.append(tbl);
		$('#tbody').html(tr);
		$content.append(bbsUI.pagination());
		});
	};
	var detail=x=> {
		meta.board.init();
		var url = ctx + '/get/board/detail/'+x;
		$.getJSON(url,data=>{
			$.getScript(temp,()=> {
				$container.empty();
				$container.append(introUI.navbar());
				$container.append(bbsUI.detail());
				$('#okBtn').attr('type','button');
				$('#fname').val(data.detail.title).attr('readonly','true').css({'text-align':'center'});
				$('#name').val(data.detail.userId).attr('readonly', 'true').css({'text-align':'center'});
				$('#message').val(data.detail.content).attr('readonly', 'true').css({'text-align':'center'});
				$('#regdate').html(data.detail.regdate);
				$('#form-group').css({'text-align':'right'});
				$('#regdate').css({'margin-right':'15px'});
				$('#text-header-board').text('게시글 보기');

				$('#cancleBtn')
				.attr('data-toggle', 'modal')
				.attr('data-target','#modal')
				.addClass('btn btn-primary')
				.html('삭제하기')
				.click(e=> {
					$('#passCheckBtn').click((e)=>{
						e.preventDefault();
						var _seq = data.detail.articleSeq;
						var _id = data.detail.userId;
						var _pass = $('#user-email2').val();
						deleteArticle(_seq,_id,_pass);
					});
				});
				$('#okBtn').text('수정하기')
				.click(e=> {
					e.preventDefault();
					$('#okBtn').attr('id','updateBtn').text('확 인');
					$('#cancleBtn').attr('id','resetBtn').text('리 셋').attr('type','reset').removeAttr('data-toggle').removeAttr('data-target');
					$('#text-header-board').text('게시글 수정');
					$('#fname').attr('placeholder',data.detail.title).removeAttr('readonly','true');
					$('#message').attr('placeholder',data.detail.content).removeAttr('readonly','true');
					$('#updateBtn').click(e=> {
						var _seq=data.detail.articleSeq;
						var _title=$('#fname').val();
						var _writer=$('#name').val();
						var _message=$('#message').val();
						
						if (_title.length==0) {
							alert('제목은 지울수 없습니다');
							return false;
						}
						e.preventDefault();
						$.ajax({
							url : ctx + '/put/board',
							method : 'post',
							data : JSON.stringify({
								'articleSeq':_seq,
								'title':_title,
								'userId':_writer,
								'content':_message
							}),
							contentType : 'application/json',
							success : d=>{
								alert('ajax 통신 성공'+d.msg);
								detail(_seq);
							},
							error : (x,s,m)=> {
								alert('글 수정시 에러 발생'+m);
							}
						});
						$container.empty();
						$container.append(introUI.navbar());
					});
					$('#resetBtn').click(()=> {
						$container.empty();
						$container.append(introUI.navbar());
						$container.append(meta.board.lists());
					});
				});
				
				$('#goList').click(()=>{
					meta.board.lists();
				});
			});
		});
	};
	var update =()=> {
		meta.board.init();
		$.getScript(temp,()=> {
			$container.empty();
			$container.append(introUI.navbar());
			$container.append(bbsUI.detail());
			$('#text-header-board').text('게시글 수정');
			$('#okBtn').click(e=> {
				e.preventDefault();
				$.ajax({
					
				});
				$container.empty();
				$container.append(introUI.navbar());
				$container.append(meta.board.lists());
			});
		});
	};
	var write=x=> {
		meta.board.init();
		$.getScript(temp,()=> {
			$container.empty();
			$container.append(introUI.navbar());
			$container.append(bbsUI.detail());
		});
	}
	var deleteArticle = (seq,id,pass)=>{
		$.ajax({
			url : ctx + '/delete/board',
			method : 'post',
			data : JSON.stringify({
				'articleSeq':seq,
				'userId':id,
				'userPw':pass
			}),
			contentType : 'application/json',
			success : d=>{
				if (d.result==='success') {
					alert('삭제되었습니다');
					$('.modal-backdrop fade in').remove();
					meta.board.lists();
				}else {
					alert('비번 틀립니다');
				}
			},
			error : (x,s,m)=> {
				alert('삭제시 에러 : '+m);
			}
		});
		
	}
	
	return {
		init:init,
		detail:detail,
		write:write,
		update:update,
		deleteArticle:deleteArticle,
		lists:lists
	};
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
			
