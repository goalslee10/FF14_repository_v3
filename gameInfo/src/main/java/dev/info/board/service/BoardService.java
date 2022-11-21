package dev.info.board.service;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.info.Entity.Board;

public interface BoardService {

	List<Board> findallBoards(); // 게시판 글 보기
	
	Board findBoardById(Integer id);
	
	Board saveBoard(Board newBoard); // 게시판 글 쓰기
	
	List<Board> modifyBoard(Board.Request request);
	
	List<Board> deleteBoard(Integer id); // 게시판 글 지우기
}
