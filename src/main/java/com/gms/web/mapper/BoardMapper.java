package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.board.BoardDTO;
@Repository
public interface BoardMapper {
	public String count();
    public String insert(BoardDTO bean);
    public List<BoardDTO> list();
    public List<BoardDTO> findById(String id);
    public BoardDTO findbySeq(String seq);
    public String update(BoardDTO bean);
    public String delete(String seq);
}