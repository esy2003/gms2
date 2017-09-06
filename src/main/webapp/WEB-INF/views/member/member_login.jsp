<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div id="gms-container">
		<form id="login-box" name="login-box">
			<img class="gms-imgsize" src="${img }nara.jpg" alt="" /><br />
			<span class="gms-idtex">ID</span>
			<input id="userId" type="text" name="userId" /><br />
			<span class="gms-tex-sty">PASSWORD</span>
			<input id="userPw" type="password" name="userPw" /><br />
			<br />
			<input type="submit" value="LOGIN" onclick="loginAlert()" />
			<input type="reset" value="CANCLE"/>
		</form>
	</div>
</body>
</html>