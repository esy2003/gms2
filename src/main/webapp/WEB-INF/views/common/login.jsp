<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
   <div id="gms-container">
      <form id="login-box">
         <img class="gms-imgsize" src="${sessionScope.path.img}/nara.jpg" alt="" /><br />
         <span class="gms-idtex">ID</span>
         <input type="text" id="input_id" name="input_id" /><br />
         <span class="gms-tex-sty" >PASSWORD</span>
         <input type="password" id="input_pass" name="input_pass" /><br />
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