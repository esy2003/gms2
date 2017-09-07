package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
@Component
public interface MemberService {
	public String addMember(Map<String, Object> map);
	public List<StudentDTO> getMembers(CommandDTO cmd);
	public String countMembers(CommandDTO cmd);
	public StudentDTO findById(CommandDTO cmd);
	public List<StudentDTO> findByName(CommandDTO cmd);
	public String remove(CommandDTO cmd);
	public String modify(MemberDTO member);
	public Map<String, Object> login(MemberDTO member);
}
