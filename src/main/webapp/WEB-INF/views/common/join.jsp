<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
	<div id = "gms-wrapper">
	<div class="gms-text-center">
	<header><h1>아이디가 존재하지 않습니다</h1></header>
		<a class="gms-gomain" href="${ctx }/index.jsp">메인으로 가기</a><hr>
	</div>
	<div id="gms-container">
	<fieldset class="gms-imgsize">
	<legend>Personal information</legend>
	<form id="gms-join-form" onsubmit="joinAlert()" class="gms-text-center">
	<span>ID</span><br>
	<input id="join-userId" name="join-userId" type="text" placeholder="아이디"/><br>
	<span>PASSWORD</span><br>
	<input id="join-userPw" name="join-userPw" type="password" placeholder="비밀번호" value="1"/><br>
	<span>NAME</span><br>
	<input id="join-name" name="join-name" type="text" placeholder="이름" value="이상윤"/><br>
	<span>PHONE</span><br>
	<input id="join-phone" name="join-phone" type="text" placeholder="휴대폰번호" value="010-6538-0805"/><br>
	<span>BIRTHDAY</span><br>
	<input id="join-birthday" name="join-birthday" type="text" placeholder="생년월일" value="1991-06-05"/><br>
	<input type="radio" name="gender" value="남자" checked/> 남자
	<input type="radio" name="gender" value="여자"/> 여자
	<br />
	이메일<br><input type="email" name="join-email" value="dltk@test.com" />
	<h3>전공</h3><br />
	<select name="join-major" id="">
		<option value="computer">컴퓨터공학</option>
		<option value="economics">경제학</option>
		<option value="tourism">관광학</option>
		<option value="art" selected="selected">미술</option>
	</select><br>
	<h3>수강 과목</h3><br />
	<input type="checkbox" name="subject" value="java" checked/>자바 <br />
	<input type="checkbox" name="subject" value="c" checked/>C언어<br />
	<input type="checkbox" name="subject" value="html" />HTML <br />
	<input type="checkbox" name="subject" value="css" />CSS <br />
	<input type="checkbox" name="subject" value="javascript" />자바스크립트 <br />
	<input type="checkbox" name="subject" value="sql" />SQL <br />
	<input type="checkbox" name="subject" value="python" />파이선 <br />
	<input type="submit" name="submit" value="회원가입"/>
	<input type="reset" name="reset" value="초기화" />
	<input type="hidden" name="action" value="join" />
	<input type="hidden" name="page" value="main" />
	</form>
	</fieldset>
	</div>
	</div>
</body>
</html>
