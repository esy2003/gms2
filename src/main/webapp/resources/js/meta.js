var meta=meta|| {};

meta.common=(function() {
	var init = function(ctx) {
		onCreate();
		meta.session.init(ctx);
		meta.index.init();
	};
	var onCreate=function() {
		
	};
	
	return {
		init:init
	};
})();

meta.session=(function() {
	var init=function(ctx) {
		sessionStorage.setItem('ctx', ctx);
		sessionStorage.setItem('js', ctx+'/resources/js');
		sessionStorage.setItem('img', ctx+'/resources/img');
		sessionStorage.setItem('css', ctx+'/resources/css');
	};
	var getPath = function(ctx) {
		return sessionStorage.getItem(ctx);
	};
	return {
		init : init,
		getPath : getPath
	};
})();

var $$ = function() {return meta.session.getPath('ctx');};
var js = function() {return meta.session.getPath('js');};
var img = function() {return meta.session.getPath('img');};
var css = function() {return meta.session.getPath('css');};

meta.index=(function() {
	var $wrapper;
	var init=function() {
		onCreate();
	};
	var onCreate=function() {
		setContentView();
		$('#loadingBtn').on('mouseover', function() {
			$wrapper.empty();
		});
	};
	var setContentView=function() {
		$wrapper = $('#wrapper');
		var $image = $('<img/>',
				{
					id : 'loading',
					src : img() + '/loading.gif'
				});
		$wrapper.append($image);
		
		var $imageBtn = $('<input/>',{
			id : 'loadingBtn',
			type :'button',
			value :'로딩버튼129865'
		});
		$wrapper.append($imageBtn);
	};
	return {
		init:init
	};
})();



