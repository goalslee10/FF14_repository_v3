package dev.info.board.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.info.Entity.Board;
import dev.info.board.repository.BoardRepository;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardRepository boardRepository;

	@Override
	public Board writeBoard(Board newBoard) {

		return boardRepository.save(newBoard);
	}

	@Override
	public List<Board> findAllBoards() {
		return boardRepository.findAll();
	}

}
