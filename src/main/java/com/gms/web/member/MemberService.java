package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
@Component
public interface MemberService {
	public int addMember(Map<?,?> map);
	public List<StudentDTO> getMembers(CommandDTO cmd);
	public String countMembers();
	public StudentDTO findById(CommandDTO cmd);
	public List<StudentDTO> findByName(CommandDTO cmd);
	public int remove(CommandDTO cmd);
	public int modify(MemberDTO member);
	public Map<String, Object> login(CommandDTO cmd);
}
