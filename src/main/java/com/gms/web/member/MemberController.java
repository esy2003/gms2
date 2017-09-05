package com.gms.web.member;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.common.HomeController;

@Controller
@RequestMapping("/member")
public class MemberController {
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   @RequestMapping("/add")
   public String memberAdd(Model model) {
      return "member/member_add";
   }
   @RequestMapping("/list")
   public String memberList(Model model) {
      return "member/member_list";
   }
   @RequestMapping("/detail")
   public String memberDetail(Model model) {
      return "member/member_detail";
   }
   @RequestMapping("/update")
   public String memberUpdate(Model model) {
      return "member/member_update";
   }
   @RequestMapping("/delete")
   public String memberDelete(Model model) {
      return "member/member_delete";
   }
}