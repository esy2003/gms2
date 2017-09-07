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
      return "auth:board/board_write.tiles";
   }
   @RequestMapping("/list")
   public String boardList(Model model) {
      return "auth:board/board_list.tiles";
   }
   @RequestMapping("/detail")
   public String boardDetail(Model model) {
      return "auth:board/board_detail.tiles";
   }
   @RequestMapping("/update")
   public String boardUpdate(Model model) {
      return "auth:board/board_update.tiles";
   }
   @RequestMapping("/delete")
   public String boardDelete(Model model) {
      return "auth:board/board_delete.tiles";
   }
}