package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gms.web.board.ArticleDTO;
@Service
public class ArticleServiceImpl implements ArticleService {
	public static ArticleServiceImpl getInstance() {
		return new ArticleServiceImpl();
	}
	ArticleDTO bean;
	private ArticleServiceImpl() {
	}
	@Override
	public String count() {
		return null;
	}

	@Override
	public String write(ArticleDTO bean) {
		return null;
	}

	@Override
	public List<ArticleDTO> list() {
		return null;
	}

	@Override
	public List<ArticleDTO> findById(String id) {
		return null;
	}

	@Override
	public ArticleDTO findbySeq(String seq) {
		return null;
	}

	@Override
	public String modify(ArticleDTO bean) {
		return null;
	}

	@Override
	public String remove(String seq) {
		return null;
	}

}
