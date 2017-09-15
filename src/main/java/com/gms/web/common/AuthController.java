package com.gms.web.common;

import java.util.Map;

import org.slf4j.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.MemberService;
import com.gms.web.member.StudentDTO;

@Controller
@SessionAttributes("user")
@RequestMapping("/auth")
public class AuthController {
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   @Autowired StudentDTO stu;
   @Autowired MemberService service;
   @Autowired MemberDTO bean;
   @Autowired CommandDTO cmd;
   
   @RequestMapping("/login_view")
   public String goLogin(Model model) {
       return "public:common/login.tiles";
   }
   
   @RequestMapping(value="/login",method=RequestMethod.POST)
   public String login(@RequestParam("id") String id, @RequestParam("pass") String pass, Model model) {
	   cmd.setSearch(id);
	   cmd.setColumn(pass);
	   Map<String, Object> map = service.login(cmd);
	   if (map.get("result").equals("success")) {
		   model.addAttribute("user", map.get("user"));
	   }
	   model.addAttribute("result",map.get("result"));
	   logger.info("리저트값은~" + String.valueOf(map.get("result")));
      return String.valueOf(map.get("page"));
   }
}
