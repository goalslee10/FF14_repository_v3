package dev.info.Entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import org.springframework.data.annotation.CreatedDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Board {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer id;

	@Column(nullable = false)
	private String title;

	@Column(nullable = false, columnDefinition = "TEXT")
	private String content;

	@Override
	public String toString() {
		return "Board [id=" + id + ", title=" + title + ", content=" + content + "]";
	}

	@Builder
	@AllArgsConstructor
	@NoArgsConstructor
	@Getter
	@Setter
	public static class Request {
		private Integer id;
		private String title;
		private String content;

		public static Board toEntity(final Request request) {
			return Board.builder().id(request.getId()).title(request.getTitle()).content(request.getContent()).build();
		}

	}

	@Builder
	@AllArgsConstructor
	@NoArgsConstructor
	@Getter
	@Setter
	public static class Response {
		private Integer id;
		private String title;
		private String content;

		public static Board.Response toResponse(final Board board) {
			return Response.builder()
					.id(board.getId())
					.title(board.getTitle())
					.content(board.getContent())
					.build();
		}

		public static List<Board.Response> toResponseList(final List<Board> boards) {
			List<Board.Response> list = new ArrayList<>();
			for (Board board : boards) {
				list.add(toResponse(board));

			}
			return list;
		}

	}

}
