package com.gms.web.command;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class RespMap {
	private String articleSeq, userId, title, content, regdate, userPw, hitCount, name, ssn, email, major, phone, profile, count;
}
