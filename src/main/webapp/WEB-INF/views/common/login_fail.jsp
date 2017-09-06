<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<div class="gms-text-center">
	<header><h1>비밀번호가 틀립니다</h1></header>
		<a class="gms-gomain" href="${ctx }/index.jsp">메인으로 가기</a><hr>
	</div>
	<div id="gms-container">
		<form id="Login-box" action="${ctx }/common.do" method="get">
			<img class="gms-imgsize" src="${ctx }/resources/img/nara.jpg" alt="" /><br />
			<span class="gms-idtex">ID</span>
			<input type="text" name="userId" /><br />
			<span class="gms-tex-sty">PASSWORD</span>
			<input type="password" name="userPw" /><br />
			<br />
			<input type="submit" value="LOGIN" />
			<input type="reset" value="CANCLE"/>
			<input type="hidden" name="action" value="login" />
			<input type="hidden" name="page" value="main" />
		</form>
	</div>
</body>
</html>