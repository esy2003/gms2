package com.gms.web.command;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class RespMap {
	private String userId, title, content, regdate, userPw, name, ssn, email, major, phone, profile;
}
