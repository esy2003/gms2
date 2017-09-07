package com.gms.web.member;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gms.web.command.CommandDTO;
import com.gms.web.member.MajorDTO;
import com.gms.web.member.MemberDTO;
import com.gms.web.member.StudentDTO;
import com.gms.web.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	public static MemberServiceImpl getInstance() {
		return new MemberServiceImpl();
	}
	MemberDTO member;
	//생성자 처리가 이 문제의 핵심(아래)
	private MemberServiceImpl() {
	}
	@Override
	public String addMember(Map<String, Object> map) {
		System.out.println("MemberService 진입");
		MemberDTO m = (MemberDTO)map.get("member");
		System.out.println("넘어온 회원 정보 : " + m.toString());
		@SuppressWarnings("unchecked")
		List<MajorDTO> list = (List<MajorDTO>)map.get("major");
		System.out.println("넘어온 수강 과목 : " + list);
		String result = "";
		
		return result;
	}
	@Override
	public List<StudentDTO> getMembers(CommandDTO cmd) {
		return null;
	}

	@Override
	public String countMembers(CommandDTO cmd) {
		return null;
	}
	
	@Override
	public List<StudentDTO> findByName(CommandDTO cmd) {
		return null;
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
    public Map<String, Object> login(MemberDTO bean) {
    	CommandDTO cmd = new CommandDTO();
    	Map<String, Object> map = new HashMap<>();
    	cmd.setSearch(bean.getUserId());
    	MemberDTO m = null;
    	String page=(m!=null)?
    			(bean.getUserPw().equals(m.getUserPw()))?
    					"main":"login_fail":"join";
    	map.put("page", page);
    	map.put("user", m);
    	return map;
    }
}
