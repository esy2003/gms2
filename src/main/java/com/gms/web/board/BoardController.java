package com.gms.web.board;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.command.Command;
import com.gms.web.command.RespMap;
import com.gms.web.common.HomeController;
import com.gms.web.mapper.BoardMapper;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.StudentDTO;
import com.gms.web.service.IDeleteService;
import com.gms.web.service.IGetService;
import com.gms.web.service.IListService;
import com.gms.web.service.IPutService;

@RestController
public class BoardController {
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   @Autowired BoardMapper boardMapper;
   @Autowired GradeMapper gradeMapper;
   @Autowired MemberMapper memberMapper;
   @Autowired RespMap respMap;
   @Autowired Command cmd;
   @Autowired Article bean;
   @Autowired StudentDTO stu;
   
   @RequestMapping("/list/{cate}")
   public @ResponseBody Map<?,?> list(@PathVariable String cate) {
	   IListService listService = null;
	   IGetService countService = null;
	   Map<String,Object> map = new HashMap<>();
	   
	   switch(cate) {
	   case "board": 
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
	   RespMap bean = new RespMap();
	   switch(cate) {
	   case "board":
		   detailService = x-> {
			   return boardMapper.selectOne(cmd);
		   };
		   cmd.setSearch(seq);
		   bean = (RespMap) detailService.execute(cmd);
		   break;
	   }
	   map.put("detail", bean);
	   bean=null;
	   return map;
   }
   @RequestMapping(value="/put/board", method=RequestMethod.POST,consumes="application/json")
   public @ResponseBody Map<?,?> put(@RequestBody Article art) {
	   IPutService updateService = null;
	   Map<String,Object> map = new HashMap<>();
	   updateService = x-> {
		   boardMapper.update(cmd);
	   };
	   cmd.setSearch(String.valueOf(art.getArticleSeq()));
	   cmd.setAction(String.valueOf(art.getTitle()));
	   cmd.setDir(String.valueOf(art.getContent()));
	   
	   updateService.execute(cmd);
	   map.put("msg", art.getContent());
	   return map;
   }
@RequestMapping(value="/delete/board", method=RequestMethod.POST,consumes="application/json")
   public @ResponseBody Map<?,?> delete(@RequestBody Article art) {
	   Map<String,Object> map = new HashMap<>();

	   cmd.setSearch(String.valueOf(art.getArticleSeq()));
	   cmd.setAction(art.getUserId());
	   cmd.setColumn(art.getUserPw());
	   IGetService memberService = x-> {
		   return memberMapper.selectById(cmd);
	   };
	   stu = (StudentDTO) memberService.execute(cmd);
	   
	   IDeleteService deleteService =x-> {
		   boardMapper.delete(cmd); 
	   };
	   
	   if (art.getUserPw().equals(stu.getUserPw())) {
		   map.put("result", "success");
		   deleteService.execute(cmd);
	   }
	   return map;
   }
   
}