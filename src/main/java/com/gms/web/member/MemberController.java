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
      return "auth:member/member_add.tiles";
   }
   @RequestMapping("/list")
   public String memberList(Model model) {
      return "auth:member/member_list.tiles";
   }
   @RequestMapping("/detail")
   public String memberDetail(Model model) {
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