package com.gms.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.gms.web.member.MajorDTO;

@Repository
public interface GradeMapper {
	public int insertMajor(List<MajorDTO> list);
}
