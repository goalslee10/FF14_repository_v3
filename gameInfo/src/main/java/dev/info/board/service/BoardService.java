package dev.info.board.service;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.info.Entity.Board;

public interface BoardService {

	List<Board> findAllBoards();

	Board writeBoard(Board newBoard);

}
