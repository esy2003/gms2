<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
   <div id="gms-container">
      <form id="login-box">
         <img class="gms-imgsize" src="${sessionScope.path.img}/nara.jpg" alt="" /><br />
         <div id="login-fail" style="margin: 0 auto; width:150px; height: 20px; color: red;">${result}</div>
         <span class="gms-idtex">ID</span>
         <input type="text" id="input_id" name="id" /><br />
         <span class="gms-tex-sty" >PASSWORD</span>
         <input type="password" id="input_pass" name="pass" /><br />
         <br />
         <input id="loginBtn" type="submit" value="LOGIN" />
         <input type="reset" value="CANCLE"/>
      </form>
   </div>
<script>
app.auth.init();
</script>
</body>
</html>