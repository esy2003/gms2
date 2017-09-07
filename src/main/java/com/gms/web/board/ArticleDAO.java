package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.ArticleDTO;
@Repository
public interface ArticleDAO {
	public String count();
    public String insert(ArticleDTO bean);
    public List<ArticleDTO> list();
    public List<ArticleDTO> findById(String id);
    public ArticleDTO findbySeq(String seq);
    public String update(ArticleDTO bean);
    public String delete(String seq);
}