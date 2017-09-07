package com.gms.web.board;

import java.util.List;

import org.springframework.stereotype.Component;

import com.gms.web.board.BoardDTO;
@Component
public interface BoardService {
	public String count();
    public String write(BoardDTO bean);
    public List<BoardDTO> list();
    public List<BoardDTO> findById(String id);
    public BoardDTO findbySeq(String seq);
    public String modify(BoardDTO bean);
    public String remove(String seq);
   
}