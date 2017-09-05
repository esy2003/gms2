package com.gms.web.board;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.common.HomeController;
@Controller
@RequestMapping("/board")
public class BoardController {
   private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
   @RequestMapping("/add")
   public String boardAdd(Model model) {
      logger.info("나온다 보드.나온다 보드.");
      return "board/board_write";
   }
   @RequestMapping("/list")
   public String boardList(Model model) {
      return "board/board_list";
   }
   @RequestMapping("/detail")
   public String boardDetail(Model model) {
      return "board/board_detail";
   }
   @RequestMapping("/update")
   public String boardUpdate(Model model) {
      return "board/board_update";
   }
   @RequestMapping("/delete")
   public String boardDelete(Model model) {
      return "board/board_delete";
   }
}