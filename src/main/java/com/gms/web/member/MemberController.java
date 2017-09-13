package com.gms.web.member;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.gms.web.command.CommandDTO;
import com.gms.web.common.HomeController;
import com.gms.web.proxy.PageProxy;


@Controller
@SessionAttributes("student")
@RequestMapping({"/member","/student"})
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@Autowired MemberService service;
	@Autowired CommandDTO cmd;
	@Autowired PageProxy pxy;
	@Autowired StudentDTO stu;
	@Autowired MemberDTO member;
	@RequestMapping(value="/member_add",method=RequestMethod.POST)
	public String memberAdd(@ModelAttribute MemberDTO member) {
		logger.info("멤버애드진입");
		service.addMember(member);
		return "redirect:/member/member_list/1";
	}

	@RequestMapping("/member_list/{pageNumber}")
	public String memberList(Model model, @PathVariable int pageNumber) {
		logger.info("멤버리스트진입");
		int count = Integer.parseInt(service.countMembers());
		pxy.setBlockSize(5);
		pxy.setPageSize(5);
		pxy.setPageNumber(pageNumber);
		pxy.setTheNumberOfRows(count);
		int[] result = new int[6];
		int theNumberOfPages = 0,startPage = 0,endPage = 0;
		theNumberOfPages = (pxy.getTheNumberOfRows() % pxy.getPageSize())==0 ?
				pxy.getTheNumberOfRows() / pxy.getPageSize()
				: pxy.getTheNumberOfRows() / pxy.getPageSize() + 1;
		startPage = pxy.getPageNumber() - ((pxy.getPageNumber() - 1) % pxy.getBlockSize());
		endPage = (startPage + pxy.getBlockSize() - 1 <= theNumberOfPages) ?
				startPage + pxy.getBlockSize() - 1 : theNumberOfPages;
		result[0] = pxy.getPageNumber();
		result[1] = theNumberOfPages;
		result[2] = startPage;
		result[3] = endPage;
		result[4] = (startPage - (theNumberOfPages / pxy.getBlockSize()) > 0) ? 1 : 0;
		result[5] = startPage + pxy.getBlockSize();
		
		if (pxy.getPageNumber() <= pxy.getTheNumberOfRows() / pxy.getPageSize() + 1) {
			if (pxy.getPageNumber() == 1) {
				cmd.setStartRow("1");
				cmd.setEndRow(String.valueOf(pxy.getPageSize()));
			}
			else {
				cmd.setStartRow(String.valueOf((pxy.getPageNumber()-1) * pxy.getPageSize() + 1));
				cmd.setEndRow(String.valueOf(pxy.getPageNumber() * pxy.getPageSize()));
			}
		}
		List<StudentDTO> list = service.getMembers(cmd);
		pxy.execute(model, result, list);
		model.addAttribute("count",count);
		return "auth:member/member_list.tiles";
	}
	
	@RequestMapping("/member_search/{search}/{pageNumber}")
	public String memberSearch(Model model, @PathVariable String search, @PathVariable int pageNumber) {
		logger.info("멤버리스트진입");
		cmd.setSearch(search);
		List<StudentDTO> list = service.findByName(cmd);
		model.addAttribute("list", list);
		model.addAttribute("count",list.size());
		return "auth:member/member_list.tiles";
	}
	
	@RequestMapping("/member_delete/{search}")
	public String memberDelete(Model model, @PathVariable String search) {
		cmd.setSearch(search);
		service.remove(cmd);
		return "redirect:/member/member_list/1";
	}
	@RequestMapping("/member_detail/{search}")
	public String memberDetail(Model model, @PathVariable String search) {
		cmd.setSearch(search);
		model.addAttribute("student",service.findById(cmd));
		return "auth:member/member_detail.tiles";
	}
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public String memberUpdate(@ModelAttribute MemberDTO member) {
		logger.info("가져온메일ㄹㄹㄹㄹ{}",member.getEmail());
		service.modify(member);
		return "redirect:/member/member_detail/"+member.getUserId();
	}
}