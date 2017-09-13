package com.gms.web.member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Lazy @Component @Data
public class MemberDTO {
	private String userId, userPw, name, ssn, regdate, email, major, phone, profile;
}
