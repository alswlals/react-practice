package com.douzone.emaillist.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.douzone.emaillist.vo.EmaillistVo;

@Repository
public class EmaillistService {
	@Autowired
	private SqlSession sqlSession;
	
	public List<EmaillistVo> findAll(String keyword){
		return sqlSession.selectList("emaillist.findAll", keyword );
	}
	
	public Boolean insert(EmaillistVo vo) {
		return sqlSession.insert("emaillist.insert", vo) == 1;
	}

	public Boolean delete(Long no) {
		return sqlSession.delete("emaillist.deleteEmail", no) == 1;				
	}
	
	
}
