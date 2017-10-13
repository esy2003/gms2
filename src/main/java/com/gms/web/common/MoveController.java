package com.gms.web.common;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/move")
public class MoveController {
	@RequestMapping("/{page}")
	public String movePage(@PathVariable String page) {
		System.out.println("들어왔다 무브");
		return "no:common/"+page+".jsp";
	}
}
