package dev.info.board.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.info.board.Entity.Board;
import dev.info.board.Entity.Board.Request;
import dev.info.board.repository.BoardRepository;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardRepository boardRepository;

	//findAllId
	//findBoardById
	//findBoardByTitle
	
	@Override
	public List<Board> findallBoards() { // 게시판 글 조회
		return boardRepository.findAll();
	}

	@Override
	public Board findBoardById(Integer id) { // id를 통한 검색
		Board searchedBoard = boardRepository.findById(id)
				.orElseThrow(() -> new RuntimeException(String.format("%s에 해당하는 Id가 존재하지 않습니다.", id)));
		return searchedBoard;
	}

	@Override
	public Board saveBoard(Board newBoard) { // 게시판 내용 저장
		return boardRepository.save(newBoard);
	}

	@Override
	public List<Board> modifyBoard(Request request) { // 게시판 수정
		final Optional<Board> board = boardRepository.findById(request.getId());

		if (board.isPresent()) {
			final Board searchedBoard = board.get();

			searchedBoard.setTitle(request.getTitle());
			searchedBoard.setContent(request.getContent());

			boardRepository.save(searchedBoard);
		}

		List<Board> boards = boardRepository.findAll();
		return boards;
	}

	@Override
	public List<Board> deleteBoard(Integer id) { // 게시판 삭제
		boardRepository.deleteById(id);

		List<Board> boards =  boardRepository.findAll();
		return boards;
	}

}
