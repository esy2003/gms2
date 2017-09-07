package com.gms.web.board;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Lazy @Component @Data
public class ArticleDTO{

	private String userId, title, content, regdate;
	private int articleSeq, hitCount;
}
