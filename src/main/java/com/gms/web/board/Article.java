package com.gms.web.board;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;


@Lazy @Component @Data
public class Article{

	private String userId, title, content, regdate, userPw;
	private int articleSeq, hitCount;
	@Override
	public String toString() {
		return "Article [userId=" + userId + ", title=" + title + ", content=" + content + ", regdate=" + regdate
				+ ", articleSeq=" + articleSeq + ", hitCount=" + hitCount + "]";
	}
}
