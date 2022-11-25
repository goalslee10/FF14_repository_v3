package dev.info.user.Entity;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "ffusers")

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class User {
	@Id
	// @GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(nullable = false, unique = true) // 중복 있으면 안됨
	private String id;
	
	@Column(nullable = false)
	private String password;
	
	@Column(nullable = false, unique = true)
	private String nickname; // board의 writer와 연결을 시킬지?
	
	@Column(nullable = false)
	private String email;
	
	@Override
	public String toString() {
		return "User [id=" + id + ", password=" + password + ", nickname="
				+ nickname + ", email=" + email + "]";
	}
	
//	@DateTimeFormat(pattern = "yyyy-mm-dd")
//	private LocalDate createDate;
	
	//DB에 insert 되기 직전에 실행(?) - DB에 값을 넣으면 자동으로 현재 날짜가 실행됨
//  @PrePersist
//  public void createDate() { this.createDate = LocalDate.now(); }
	
	
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	@Getter @Setter
	public static class Request {
		@NotBlank(message = "id는 공백이나 Null 지정 불가")
		private String id;
		@NotBlank(message = "password는 공백이나 Null 지정 불가")
		private String password;
		@NotBlank(message = "닉네임은 공백이나 Null 지정 불가")
		private String nickname;
		@NotBlank(message = "이메일은 공백이나 Null 지정 불가")
		private String email;
		
		public static User toEntity(final Request request) {
			
			return  User.builder()
			        .id(request.getId())
					.password(request.getPassword())
					.nickname(request.getNickname())
					.email(request.getEmail())
					.build();
		}
	}
	
	@Setter
	@Getter
	@Builder
	@NoArgsConstructor
	@AllArgsConstructor
	public static class Response {
	    private String id;
	    private String nickname;
	    private String email;
	    private String token;
	
	    public static User.Response toResponse(final User user){
	        return Response.builder()
	                .id(user.getId())
	                .nickname(user.getNickname())
	                .email(user.getEmail())
	                .build();
	    }
	    
	    public static List<User.Response> toResponseList(final List<User> users){
	        List<User.Response> list = new ArrayList<>();
	        for (User user : users) {
	            list.add(toResponse(user));
	        }
	        return list;
	    }
	    
	}
	
}
