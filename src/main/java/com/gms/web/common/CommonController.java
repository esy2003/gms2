package com.gms.web.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/common")
public class CommonController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/path/{dir}/{page}")	
	   public String movePage(@PathVariable String page, @PathVariable String dir) {
		   logger.info("오너라 커먼 네이놈");
		      return String.format("auth:%s/%s.tiles", dir, page);
	   }
}
