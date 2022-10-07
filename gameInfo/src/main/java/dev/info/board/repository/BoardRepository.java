package dev.info.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.info.Entity.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board, String> {

}
