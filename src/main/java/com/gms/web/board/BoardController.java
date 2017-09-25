package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.RespMap;
import com.gms.web.common.HomeController;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;

@RestController
public class BoardController {
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   @Autowired BoardMapper boardMapper;
   @Autowired GradeMapper gradeMapper;
   @Autowired Command cmd;
   
   @RequestMapping("/list/{cate}")
   public @ResponseBody Map<?,?> list(@PathVariable String cate) {
	   IListService listService = null;
	   IGetService countService = null;
	   Map<String,Object> map = new HashMap<>();
	   
	   switch(cate) {
	   case "board": 
		   cmd=null;
		   listService = (x)-> {
			   return boardMapper.selectList(cmd);
		   };
		   countService=(x)-> {
			   return boardMapper.count(cmd);
		   };
		   RespMap r = (RespMap) countService.execute(cmd);
		   map.put("result", "success");
		   map.put("list", listService.execute(cmd));
		   map.put("total", r);
		   
		   break;
		   
	   case "grade":
		   cmd=null;
		   listService = (x)-> {
			   return gradeMapper.selectSome(cmd);
		   };
		   map.put("list", listService.execute(cmd));
		   break;
	   }
	   return map;
   }
   @RequestMapping("/get/{cate}/detail/{seq}")
   public @ResponseBody Map<?,?> get(@PathVariable String seq, @PathVariable String cate) {
	   IGetService detailService = null;
	   Map<String,Object> map = new HashMap<>();
	   Article bean=null;
	   switch(cate) {
	   case "board":
		   cmd=new Command();
		   detailService = x-> {
			   return boardMapper.selectOne(cmd);
		   };
		   cmd.setSearch(seq);
		   bean = (Article) detailService.execute(cmd);
		   break;
	   }
	   map.put("seq", cmd.getSearch());
	   map.put("detail", bean);
	   return map;
   }
   public @ResponseBody Map<?,?> put() {
	   return null;
   }
   public @ResponseBody Map<?,?> delete() {
	   return null;
   }
   
}