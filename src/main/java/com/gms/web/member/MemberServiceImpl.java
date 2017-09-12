package com.gms.web.member;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.common.HomeController;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
import com.gms.web.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired MemberMapper mapper;
	@Autowired CommandDTO cmd;
	@Autowired MemberDTO member;
	@Autowired StudentDTO student;
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	

	@Override
	public String addMember(Map<String, Object> map) {
		
		String result = "";
		
		return result;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<StudentDTO> getMembers(CommandDTO cmd) {
		return (List<StudentDTO>) mapper.selectAll(cmd);
	}

	@Override
	public String countMembers() {
		logger.info("count is {}" , "entered");
		String count = mapper.count();
		logger.info("count is {}", count);
		return count;
	}
	
	@Override
	public List<StudentDTO> findByName(CommandDTO cmd) {
		@SuppressWarnings("unchecked")
		List<StudentDTO> list = (List<StudentDTO>) mapper.selectByName(cmd);
		return list;
	}

	@Override
	public StudentDTO findById(CommandDTO cmd) {
		
		return null;
	}
	
	@Override
	public String modify(MemberDTO bean) {
		return null;
	}
	@Override
	public String remove(CommandDTO cmd) {
		return null;
	}
    @Override
    public Map<String, Object> login(CommandDTO cmd) {
    	Map<String, Object> map = new HashMap<>();
    	String result = "";
    	String page = "";
    	member = mapper.login(cmd);
    	
    	if (member!=null) {
    		if (cmd.getColumn().equals(member.getUserPw())) {
    			result = "success";
    			page = "auth:common/main.tiles";
    			map.put("user", member);
    		}
    		else {
    			result = "비밀번호가 틀립니다";
    			page = "public:common/login.tiles";
    		}
    	}
    	else {
    		result = "가입된 아이디가 없습니다. 회원가입 해주세요";
    		page = "public:common/login.tiles";
    	}
    	map.put("result", result);
    	map.put("page", page);
    	
    	return map;
    }
}
