package com.douzone.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.service.EmaillistService;
import com.douzone.emaillist.vo.EmaillistVo;

@RestController
public class ApiController {

	@Autowired
	private EmaillistService emaillistService;
	
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(@RequestParam(value="kwd", required=true, defaultValue="") String keyword){
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistService.findAll(keyword)));
	}
	
	@PostMapping("/api")
	public ResponseEntity<JsonResult> creat(@RequestBody EmaillistVo vo){
		emaillistService.insert(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@DeleteMapping("/api/{no}")
	public ResponseEntity<JsonResult> delete(@PathVariable("no") Long no){
		emaillistService.delete(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
}
