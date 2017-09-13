<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
	<div class="row">
  <div class="col-lg-6" style="width:500px; margin:0 auto;">
    <div class="input-group">
      <input id="searchName" name="searchName" type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button" onclick="app.controller.searchStudent()">Go!</button>
      </span>
    </div><!-- /input-group -->
  </div><!-- /.col-lg-6 -->
</div><!-- /.row -->
<div style="height: 40px; width: 300px;"></div>
	<div style="height: 40px; width: 300px;">
		회원수 : ${count}
		
	</div>
		<!-- userId, userPw, name, ssn, regdate, email, major, subject -->
		<table id="member-table-main">
			<tr class="member-table-menu">
				<th>번호</th>
				<th>아이디</th>
				<th>이름</th>
				<th>생년월일</th>
				<th>핸드폰번호</th>
				<th>수강과목</th>
				<th>이메일</th>
				<th>가입날짜</th>
				<th>수정/삭제</th>
			</tr>
			<c:forEach var="i" items="${list}">
			<tr class="member-table-menu">
				<td><fmt:formatNumber value="${i.num }" pattern="."/></td>
				<td>${i.userId }</td>
				<td><a onclick="app.controller.detailStudent('${i.userId}')">${i.name }</a></td>
				<td>${i.ssn }</td>
				<td>${i.phone }</td>
				<td>${i.subjects }</td>
				<td>${i.email }</td>
				<td>${i.regdate }</td>
				<td>
				<a onclick="updateStudent('${i.userId}')">수정</a>
				/
				<a onclick="app.controller.deleteStudent('${i.userId}')">삭제</a>
				</td>
			</tr>
			</c:forEach>
		</table>
		<nav aria-label="Page navigation" style="text-align: center;">
  <ul class="pagination">
  <c:if test="${prevBlock gt 0}">
  <li><a onclick="app.member.list('1')" href="#"><span class="glyphicon glyphicon-step-backward" aria-hidden="true"></span></a></li>
    <li>
      <a onclick="app.member.list('${startPage-5}')" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
      </li>
      </c:if>
      <c:forEach varStatus="i" begin="${startPage }" end="${endPage }" step="1">
      	<c:choose>
			<c:when test="${i.index eq pageNumber}">
				<li class="active"><a href="#">${i.index}</a></li>
			</c:when>
			<c:otherwise>
				<li><a onclick="app.member.list('${i.index}')">${i.index}</a></li>
			</c:otherwise>
		</c:choose>
      </c:forEach>
      <c:if test="${nextBlock le theNumberOfPages}">
    <li>
      <a onclick="app.member.list('${endPage+1}')" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
    <li><a onclick="app.member.list('${theNumberOfPages}')" href="#"><span class="glyphicon glyphicon-step-forward" aria-hidden="true"></span></a></li>
    </c:if>
  </ul>
</nav>