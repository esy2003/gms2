package com.gms.web.member;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gms.web.command.Command;
import com.gms.web.common.HomeController;
import com.gms.web.mapper.GradeMapper;
import com.gms.web.mapper.MemberMapper;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
import com.gms.web.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired MemberMapper mapper;
	@Autowired Command cmd;
	@Autowired MemberDTO member;
	@Autowired StudentDTO student;
	@Autowired MajorDTO major;
	@Autowired GradeMapper gMapper;
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@SuppressWarnings("unchecked")
	@Override
	@Transactional
	public int addMember(Map<?,?> map) {
		int rs = 0;
		member = (MemberDTO) map.get("member");
		mapper.insert(member);
		List<MajorDTO> list = (List<MajorDTO>) map.get("list");
		gMapper.insertMajor(list);
		return rs;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<StudentDTO> getMembers(Command cmd) {
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
	public List<StudentDTO> findByName(Command cmd) {
		@SuppressWarnings("unchecked")
		List<StudentDTO> list = (List<StudentDTO>) mapper.selectByName(cmd);
		return list;
	}

	@Override
	public StudentDTO findById(Command cmd) {
		return mapper.selectById(cmd);
	}
	
	@Override
	public int modify(MemberDTO member) {
		return mapper.update(member);
	}
	@Override
	public int remove(Command cmd) {
		return mapper.delete(cmd);
	}
    @Override
    public Map<String, Object> login(Command cmd) {
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
