package dev.info.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.info.board.Entity.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, Integer> {
//	Board findByIdAndTitle(Integer Id, String title);
}
