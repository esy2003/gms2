var lsy=lsy || {};
lsy.common=(()=> {
	var movie_text;
	var init=ctx=> {
		onCreate();
		lsy.session.init(ctx);
	};
	var onCreate=()=> {
		setContentView();
	};
	var setContentView=()=> {
		
	};
	return {init:init};
})();
lsy.movieDetail=(()=> {
	var temp;
	var init=x=>{
		temp = $$('j')+'/template.js';
		onCreate(x);
	};
	var onCreate=x=>{
		setContentView();
		$('#content-scroll-seoul>li').removeClass('selected').css({'color':'black'});
		$('#row_date_detail').text('');
		$('#row_time_detail').text('');
		$('#theater_detail').text('');
		$('#day_selected_ul>li').removeClass('selected');
		$('#movie_list>ul>li').removeClass('selected');
		$('#date_select_detail').remove();
		$('.info.movie').empty();
		$('#movie_list>ul>li').css({'cursor':'pointer'});
		$('#movie_list>ul>li>span').css({'font-weight':'bold','color':'black'});
		$.getScript(temp,()=> {
			$('.movie-list-detail'+x).addClass('selected');
			$('.movie_text'+x).css({'color':'#fff'});
			$('.info.movie').append(compUI.image('movie_info_img',$$('i')+'/영화더미.PNG'));
			$('.info.movie').append(compUI.tag('div','movie_info_text_box'));
			$('#movie_info_text_box').append(compUI.tag('a','movie_info_text'));
			$('#movie_info_text_box').css({'margin-left':'110px','margin-top':'-90px'});
			$('#movie_info_text').text(($('.movie_text'+x).text()));
			$('#movie_info_text').css({'font-weight':'bold','color':'#cccccc','cursor':'pointer'});
			$('#movie_info_text').after(compUI.tag('div','movie_rating_box'));
			$('#movie_rating_box').append(compUI.tag('span','movie_rating'));
			$('#movie_rating_box').css({'padding-top':'30px'})
			$('#movie_rating').text('15세 관람가').css({'font-weight':'bold'});
			setTimeout("lsy.btnOn.init()",100);
		});
	};
	var setContentView=()=> {
		
	};
	return {init : init};
})();
lsy.detailSelect=(()=> {
	var init = x=> {
		$('#theater_select_box').remove();
		$('#date_select_detail').remove();
		$('#row_date_detail').text('');
		$('#row_time_detail').text('');
		$('#day_selected_ul>li').removeClass('selected');
		$('#content-scroll-seoul>li').removeClass('selected');
		$('#content-scroll-seoul>li').css({'color':'black','font-weight':'bold'});
		$('.theater_list'+x).addClass('selected');
		$('.theater_list'+x).css({'color':'#fff'});
		$('#theater_detail').text('CGV  '+$('.theater_list'+x).text());
		setTimeout("lsy.btnOn.init()",100);
	}
	return {init:init};
})();
lsy.btnOn=(()=> {
	var temp,i;
	var init = ()=> {
		temp = $$('j')+'/template.js';
		if ($('#movie_info_text').text()!=="" && $('#theater_detail').text()!=="극장정보 상세보기" && $('#row_date_detail').text()!=="") {
			$('#time_select_detail').addClass('hidden');
			$.getScript(temp,()=> {
				$('#date_select_detail').remove();
				$('.time-option').append(compUI.div('time_list_scrollbar'));
				$('#time_list_scrollbar').addClass('time-list nano has-scrollbar');
				$('#time_list_scrollbar').append(compUI.div('time_list_box'));
				$('#time_list_box').addClass('content scroll-y');
				$('#time_list_box').append(compUI.div('time_list_theater'));
				$('#time_list_theater').addClass('theater');
				$('#time_list_theater').append(compUI.span('time_list_theater_detail'));
				$('#time_list_theater').css({'border':'none'});
				$('#time_list_theater_detail').append(compUI.tag('span','seat_count')).text('2D 7관 6층  (총 100석)').css({'font-weight':'bold'});
				$('#time_list_theater').after(compUI.tag('ul','date_select_detail').css({'display':'-webkit-inline-box'}));
				$('#date_select_detail').css({'padding-top':'15px'});
				for (i=0;i<3;i++) {
					$('#date_select_detail').append(compUI.tag('li','date_select_detail_'+i).attr('onclick','lsy.selectTime.init('+i+')').css({'height':'30px','width':'50px','border':'1px solid #ccc','cursor':'pointer'}));					
					$('#date_select_detail_'+i).append(compUI.classTag('a','button')
							.append(compUI.classTag('span','time')
									.append(compUI.noIdTag('span')
											.css({'font-size':'17px','font-weight':'bold','line-height':'25px'})
											.text('10:10'))))
											.after(compUI.classTag('span','count')
													.text('80석').css({'line-height':'30px','padding-left':'5px','padding-right':'7px'}));
				}
				$('#date_select_detail_1>a>span>span').text('13:00');
				$('#date_select_detail_2>a>span>span').text('16:30');
			});
			if ($('#row_time_detail').text()==="" || $('#row_date_detail').text()==="" || $('#movie_info_text').text()==="" || $('#theater_detail').text()==="") {
				$('#tnb_step_btn_right').removeClass('btn-right on');
				$('#tnb_step_btn_right').addClass('btn-right');				
			}
		}
		else {
			$('#tnb_step_btn_right').removeClass('btn-right on');
			$('#tnb_step_btn_right').addClass('btn-right');		
		}
	};
	return {init:init};
})();

lsy.selectTime=(()=> {
	var init=x=> {
		onCreate(x);
	};
	var onCreate=x=> {
		
		$('#date_select_detail>li').css({'background-color':'#f2f0e5'});
		$('#date_select_detail>li>a>span>span').css({'color':'black'});
		$('#row_time_detail').text($('#date_select_detail_'+x+'>a>span>span').text());
		$('#date_select_detail_'+x).css({'background-color':'#333333','border':'1px solid #5c5c5c'});
		$('#date_select_detail_'+x+' a span span').css({'color':'#fff'});
		alert($('#date_select_detail_'+x+'>a>span>span').text());
		if ($('#row_time_detail')!=="" && $('#movie_info_text').text()!=="" && $('#theater_detail').text()!=="극장정보 상세보기" && $('#row_date_detail').text()!=="") {
				$('#tnb_step_btn_right').removeClass('btn-right');
				$('#tnb_step_btn_right').addClass('btn-right on').attr('onclick','lsy.seatSelect.init()');
		}
	};

	return {init:init};
})();

lsy.seatSelect=(()=> {
	var init=()=> {
		if ($('#tnb_step_btn_right').hasClass('btn-right on')) {
			alert('좌석선택 페이지 갑니다');
		}
		else {
			return false;
		}
	};
	return {init:init};
})();

lsy.date=(()=> {
	var init = x=> {
		onCreate(x);
	};
	var onCreate = x=> {
		if ($('#theater_detail').text()==="") {
			$('#date_select_detail').remove();
			alert('극장을 선택해 주세요');
			return false;
		}
		setContentView();
		$('#row_time_detail').text('');
		$('#day_selected_ul>li').removeClass('selected');
		$('#date_select_detail').remove();
		$('.day_selected'+x).addClass('selected');
		var $day = $('#detail_day'+x);
		var $dayweek = $('#detail_dayweek'+x);
		$('#row_date_detail').text($day.text() + ' ' + $dayweek.text());
		setTimeout("lsy.btnOn.init()",100);
	};
	var setContentView = ()=> {
		
	};
	return {init : init};
})();

lsy.session=
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
var $$ = (x)=>{return lsy.session.getPath(x);};