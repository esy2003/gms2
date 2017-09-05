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
   sessionStorage.setItem('js',ctx+'/resorces/js');
   sessionStorage.setItem('img',ctx+'/resorces/img');
   sessionStorage.setItem('css',ctx+'/resorces/css');
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
         app.controller.moveTo('member','add');
      });
      $('.list-group li').eq(1).on('click',function(){
         app.controller.moveTo('member','list');
      });
      $('.list-group li').eq(2).on('click',function(){
         app.controller.moveTo('member','detail');
      });
      $('.list-group li').eq(3).on('click',function(){
         app.controller.moveTo('member','update');
      });
      $('.list-group li').eq(4).on('click',function(target){
         app.controller.moveTo('member','delete');
      });
      
      
      $('.list-group li').eq(5).on('click',function(target){
         app.controller.moveTo('grade','add');
      });
      $('.list-group li').eq(6).on('click',function(target){
         app.controller.moveTo('grade','list');
      });
      $('.list-group li').eq(7).on('click',function(target){
         app.controller.moveTo('grade','detail');
      });
      $('.list-group li').eq(8).on('click',function(target){
         app.controller.moveTo('grade','update');
      });
      $('.list-group li').eq(9).on('click',function(target){
         app.controller.moveTo('grade','delete');
      });
      
      $('.list-group li').eq(10).on('click',function(target){
         app.controller.moveTo('board','add');
      });
      $('.list-group li').eq(11).on('click',function(target){
         app.controller.moveTo('board','list');
      });
      $('.list-group li').eq(12).on('click',function(target){
         app.controller.moveTo('board','update');
      });
      $('.list-group li').eq(13).on('click',function(target){
         app.controller.moveTo('board','delete');
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
         app.controller.moveTo('auth','main');
      });
      $('#logout').on('click',function(){
         app.controller.moveTo('auth','login_view');
      });
      
      var $u1=$("#navbar_drop_stu");
      var $u2=$("#navbar_drop_grade");
      var $u3=$("#navbar_drop_board");
      
      $u1.addClass("dropdown-menu");
      $u2.addClass("dropdown-menu");
      $u3.addClass("dropdown-menu");

      $('.dropdown-menu a').eq(0).on('click',function(){
         app.controller.moveTo('member','add');
      });
      $('.dropdown-menu a').eq(1).on('click',function(){
         app.controller.moveTo('member','list');
      });
      $('.dropdown-menu a').eq(2).on('click',function(){
         app.controller.moveTo('member','detail');
      });
      $('.dropdown-menu a').eq(3).on('click',function(){
         app.controller.moveTo('member','delete');
      });
      
      
      $('.dropdown-menu a').eq(4).on('click',function(){
         app.controller.moveTo('grade','add');
      });
      $('.dropdown-menu a').eq(5).on('click',function(){
         app.controller.moveTo('grade','list');
      });
      $('.dropdown-menu a').eq(6).on('click',function(){
         app.controller.moveTo('grade','detail');
      });
      $('.dropdown-menu a').eq(7).on('click',function(){
         app.controller.moveTo('grade','delete');
      });
      
      $('.dropdown-menu a').eq(8).on('click',function(){
         app.controller.moveTo('board','add');
      });
      $('.dropdown-menu a').eq(9).on('click',function(){
         app.controller.moveTo('board','list');
      });
      $('.dropdown-menu a').eq(10).on('click',function(){
         app.controller.moveTo('board','deatail');
      });
      $('.dropdown-menu a').eq(11).on('click',function(){
         app.controller.moveTo('board','delete');
      });
      
      
   };
   
   return {
      init : init
      
   };
})();

app.member=(function(){
   var init=function(){
      onCreate();
   };
   var onCreate=function(){
      $("#updateBtn").on('click',function(){
      
      setContentView();
   //   id,phone,email,title;
      sessionStorage.setItem('id',$("#detail_id").text());
      sessionStorage.setItem('phone',$("#detail_phone").text());
      sessionStorage.setItem('email',$("#detail_email").text());
      sessionStorage.setItem('title',$("#detail_title").text());
      alert($("#detail_phone").text());
      controller.moveTo('member','member_update');
     });
   };
      var setContentView=function(){
      
   };
   
   return{
      init : init,
   
      
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
      app.path.ctx()+'/'+dir+'/'+page;
   };
   var deleteTarget= function(target){
       prompt(target+'의 ID?');
    }
   var list= function (dir,page,pageNumber){
      location.href=app.ctx()+"/"+dir+".do?action=list&page="+page+"&pageNumber="+pageNumber;
   }
   var logout=function (dir,page){   
      location.href=app.ctx()+"/"+dir+".do?action=move&page="+page;
      return true;
      }   
   var updateStudent=function (id,email,phone){
        alert('수정할 id'+$("#detail_id").text());
        location.href=app.ctx()+"/member.do?action=update&page=member_update&id="+id+"&email="+email+"&phone="+phone;
     }
     var deleteStudent=function (id){
        alert('삭제할id'+id);
        location.href=app.ctx()+"/member.do?action=delete&page=member_list&id="+id;
     }
   var detailStudent=function (id){
        alert('조회할 id'+id);
        location.href=app.ctx()+"/member.do?action=detail&page=member_detail&id="+id;
     }
     var searchStudent=function (){
        var search=$('#searchName').value;
        alert(search);
        location.href=app.ctx()+"/member.do?action=search&page=member_list&search="+search;   
     } 
   return {
      init : init,
      moveTo : moveTo,
      deleteTarget : deleteTarget,
      list : list,
      logout : logout,
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

 




