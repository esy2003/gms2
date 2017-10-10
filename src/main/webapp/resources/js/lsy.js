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
		$('.info.movie').empty();
		$('#movie_list>ul>li').removeClass('selected');
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
		});
	};
	var setContentView=()=> {
		
	};
	return {init : init};
})();
lsy.detailSelect=(()=> {
	var init = x=> {
		$('#content-scroll-seoul>li').removeClass('selected');
		$('#content-scroll-seoul>li').css({'color':'black','font-weight':'bold'});
		$('.theater_list'+x).addClass('selected');
		$('.theater_list'+x).css({'color':'#fff'});
		$('#theater_detail').text($('.theater_list'+x).text());
	}
	return {init:init};
})();
lsy.btnOn=(()=> {
	var init = ()=> {
		alert('ㅇㅇㅇㅇ와따'+$('#movie_info_text').text()+'ㅇ'+$('#theater_detail').text());
		if ($('#movie_info_text').text()!=="" && $('#theater_detail').text()!=="극장정보 상세보기") {
			$('#tnb_step_btn_right').removeClass('btn-right');
			$('#tnb_step_btn_right').addClass('btn-right on');
		};
	};
	return {init:init};
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
var $$= (x)=>{return lsy.session.getPath(x);};