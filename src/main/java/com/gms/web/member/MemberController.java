package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.common.HomeController;

@Controller
@RequestMapping("/member")
public class MemberController {
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   @Autowired MemberService service;
   @RequestMapping("/add")
   public String memberAdd() {
      return "auth:member/member_add.tiles";
   }
   @RequestMapping("/list")
   public String memberList(Model model) {
	  model.addAttribute("count", service.countMembers());
      return "auth:member/member_list.tiles";
   }
   @RequestMapping("/detail")
   public String memberDetail() {
      return "auth:member/member_detail.tiles";
   }
   @RequestMapping("/update")
   public String memberUpdate(Model model) {
      return "auth:member/member_update.tiles";
   }
   @RequestMapping("/delete")
   public String memberDelete(Model model) {
      return "auth:member/member_delete.tiles";
   }
}