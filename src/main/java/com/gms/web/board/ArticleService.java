package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;

import com.gms.web.board.ArticleDTO;
@Component
public interface ArticleService {
	public String count();
    public String write(ArticleDTO bean);
    public List<ArticleDTO> list();
    public List<ArticleDTO> findById(String id);
    public ArticleDTO findbySeq(String seq);
    public String modify(ArticleDTO bean);
    public String remove(String seq);
   
}