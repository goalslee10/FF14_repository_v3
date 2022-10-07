package dev.info.board.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.info.Entity.Board;
import dev.info.board.repository.BoardRepository;
import dev.info.board.service.BoardService;

@RequestMapping("board")
@RestController
@CrossOrigin(" * ")
public class BoardController {
	@Autowired
	private BoardService boardService;

	@Autowired
	private BoardRepository boardRepository;

	@GetMapping("/write")
	public List<Board.Response> getBoard() {

		List<Board> boards = boardService.findAllBoards();
		List<Board.Response> response = Board.Response.toResponseList(boards);

		return response;
	}

	@PostMapping
	public ResponseEntity<Board.Response> createBoard(@RequestBody @Valid Board.Request request) {

		Board board = Board.Request.toEntity(request);

		Board wroteBoard = boardService.writeBoard(board);
		Board.Response response = Board.Response.toResponse(wroteBoard);

		return ResponseEntity.status(HttpStatus.CREATED).body(response);

	}

}
