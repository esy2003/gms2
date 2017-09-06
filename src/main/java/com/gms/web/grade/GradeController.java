package com.gms.web.grade;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.common.HomeController;
@Controller
@RequestMapping("/grade")
public class GradeController {
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   @RequestMapping("/add")
   public String gradeAdd(Model model) {
      logger.info("나온다.");
      return "public:grade/grade_add.tiles";
   }
   @RequestMapping("/list")
   public String gradeList(Model model) {
      return "public:grade/grade_list.tiles";
   }
   @RequestMapping("/detail")
   public String gradeDetail(Model model) {
      return "public:grade/grade_detail.tiles";
   }
   @RequestMapping("/update")
   public String gradeUpdate(Model model) {
      return "public:grade/grade_update.tiles";
   }
   @RequestMapping("/delete")
   public String gradeDelete(Model model) {
      return "public:grade/grade_delete.tiles";
   }
}