package com.gms.web.member;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.command.Command;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
@Component
public interface MemberService {
	public int addMember(Map<?,?> map);
	public List<StudentDTO> getMembers(Command cmd);
	public String countMembers();
	public StudentDTO findById(Command cmd);
	public List<StudentDTO> findByName(Command cmd);
	public int remove(Command cmd);
	public int modify(MemberDTO member);
	public Map<String, Object> login(Command cmd);
}
