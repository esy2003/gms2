var app=app|| {};

app.path=(function(){
   var init=function(ctx){
   app.session.init(ctx);
   app.auth.init();
   onCreate();
   };
   var onCreate=function(){
      setContentView();
      location.href=ctx()+"/auth/login_view";   
      };
   var setContentView=function(){
   };
   var ctx=function(){
      return app.session.getPath('ctx');
   };
   var js=function(){
      return app.session.getPath('js');
   };
   var img=function(){
      return app.session.getPath('img');
   };
   var css=function(){
      return app.session.getPath('css');
   };
   return{
      init : init,
      ctx : ctx,
      js : js,
      img : img,
      css : css
   }
})();

app.session=(function(){
   var init=function(ctx){
   sessionStorage.setItem('ctx',ctx);
   sessionStorage.setItem('js',ctx+'/resources/js');
   sessionStorage.setItem('img',ctx+'/resources/img');
   sessionStorage.setItem('css',ctx+'/resources/css');
   };
   var getPath=function(x){
      return sessionStorage.getItem(x);
   };
   return {
      init : init,
      getPath : getPath
   }
})();


app.auth=(function(){
   var init=function(){
      $('#loginBtn').on('click',function(){
         alert('로그인 실행');
         if($('#input_id').val()===""){
            alert('ID를 입력해 주세요');
            return false;
         }
         if($('#input_pass').val()===""){
            alert('PASSWORD를 입력해 주세요');
            return false;
         }
         $('#login-box').attr('action',app.path.ctx()+"/auth/login");
         $('#login-box').attr('method','post');
         return true;
      });
   };
   var mainLoad=function(){};
      
   return {
      init : init
   
   }
})();

app.main=(function(){
   var init=function(){
      onCreate();
   };
   var onCreate=function(){
      setContentView();
      $('.list-group li').eq(0).on('click',function(){
         app.controller.moveTo('member','member_add');
      });
      $('.list-group li').eq(1).on('click',function(){
         app.member.list(1);
      });
      $('.list-group li').eq(2).on('click',function(){
         app.controller.moveTo('member','member_detail');
      });
      $('.list-group li').eq(3).on('click',function(){
         app.controller.moveTo('member','member_update');
      });
      $('.list-group li').eq(4).on('click',function(target){
         app.controller.moveTo('member','member_delete');
      });
      
      
      $('.list-group li').eq(5).on('click',function(target){
         app.controller.moveTo('grade','grade_add');
      });
      $('.list-group li').eq(6).on('click',function(target){
         app.controller.list('grade','grade_list');
      });
      $('.list-group li').eq(7).on('click',function(target){
         app.controller.moveTo('grade','grade_detail');
      });
      $('.list-group li').eq(8).on('click',function(target){
         app.controller.moveTo('grade','grade_update');
      });
      $('.list-group li').eq(9).on('click',function(target){
         app.controller.moveTo('grade','grade_delete');
      });
      
      $('.list-group li').eq(10).on('click',function(target){
         app.controller.moveTo('board','board_write');
      });
      $('.list-group li').eq(11).on('click',function(target){
         app.controller.list('board','board_list');
      });
      $('.list-group li').eq(12).on('click',function(target){
         app.controller.moveTo('board','board_update');
      });
      $('.list-group li').eq(13).on('click',function(target){
         app.controller.moveTo('board','board_delete');
      });
      
   };
   var setContentView=function(){      
      var $u1=$('#main_ul_stu');
       var $u2=$('#main_ul_grade');
       var $u3=$('#main_ul_board');
       
    $u1.addClass("list-group");
    $u2.addClass("list-group");
    $u3.addClass("list-group");
   
    $('.list-group').children().addClass("list-group-item");
   };
   
   return {
      init : init
   }
})();

app.navbar=(function(){
   //홈
   var init=function(){
      onCreate();
   };
   
   var onCreate=function(){
      setContentView();
   };
   var setContentView=function(){
      
      $('#main-go').on('click',function(){
         app.controller.moveTo('common','main');
      });
      $('#logout').on('click',function(){
    	  location.href=app.path.ctx()+"/auth/login_view";
      });
      
      var $u1=$("#navbar_drop_stu");
      var $u2=$("#navbar_drop_grade");
      var $u3=$("#navbar_drop_board");
      
      $u1.addClass("dropdown-menu");
      $u2.addClass("dropdown-menu");
      $u3.addClass("dropdown-menu");

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
   };
   
   return {
      init : init
      
   };
})();

app.member=(function(){
   var list= function(pageNumber){
	      location.href=app.path.ctx()+"/member/member_list/" + pageNumber;
   }
   var init=function(){
      onCreate();
      memberJoin();
   };
   var onCreate=function(){
	   
      $("#updateBtn").on('click',function(){
      
      setContentView();
   //   id,phone,email,title;
      /*sessionStorage.setItem('id',$("#detail_id").text());
      sessionStorage.setItem('phone',$("#detail_phone").text());
      sessionStorage.setItem('email',$("#detail_email").text());
      sessionStorage.setItem('title',$("#detail_title").text());*/
      alert($("#detail_phone").text());
      controller.moveTo('member','member_update');
     });
   };
   var memberJoin = function() {
	   $('#joinBtn').on('click', function() {
		   alert('인서르트~');
		   $('#gms-join-form').attr('method', 'post');
		   $('#gms-join-form').attr('action', app.path.ctx() + '/member/member_add');
	   });
   };
   var setContentView=function(){
    	  
   };
   
   return{
      init : init,
      list : list
   };
})();
app.grade =(function(){
   var init=function(){
      onCreate();
   };
   var onCreate=function(){
      setContentView();
   }
   var setContentView=function(){
      
   };
   return{
      init : init
   };
})();

app.board =(function(){
   var init=function(){
      onCreate();
   };
   var onCreate=function(){
      setContentView();
   };
   var setContentView=function(){
      
   };
   return{
      init : init
   };
})();

app.controller=(function(){
   var init=function(){
   };
   var moveTo=function(dir,page){
   location.href=
      app.path.ctx()+'/common/path/'+dir+'/'+page;
   };
   var deleteTarget= function(target){
       prompt(target+'의 ID?');
   }
   var list= function (dir,page,pageNumber){
	      location.href=app.path.ctx()+"/"+dir+"/"+page;
   };
   

   var updateStudent=function() {
	   $('#confirmBtn').on('click', function() {
		   alert('업데이트스튜던튼ㄴㄴ');
		   $('#update-form').attr('action',app.path.ctx()+'/member/update');
		   $('#update-form').attr('method','post');		   
		   return true;
	   });
   }
   var deleteStudent=function (id){
	   alert('삭제할id'+id);
	   location.href=app.path.ctx()+"/member/member_delete/"+id;
   }
   var detailStudent=function (id){
       alert('조회할 id'+id);
       location.href=app.path.ctx()+"/member/member_detail/"+id;
   }
   var searchStudent=function (){
	   if ($('#searchName').val()==="") {
		   alert('검색어를 입력해주세요');
		   return false;
	   }
	   else {
		   var search=$('#searchName').val();
		   location.href=app.path.ctx()+"/member/member_search/"+search + "/1";  		   
	   }
     } 
   return {
      init : init,
      moveTo : moveTo,
      deleteTarget : deleteTarget,
      list : list,
      updateStudent : updateStudent,
      deleteStudent : deleteStudent,
      detailStudent : detailStudent,
      searchStudent : searchStudent
   }
})();


app.home=(function(){
   var init=function(){
      onCreate();
   };
   var onCreate=function(){
      setContentView();
   };
   var setContentView=function(){
      };
   return {
      init : init
   
   }
})();

 




