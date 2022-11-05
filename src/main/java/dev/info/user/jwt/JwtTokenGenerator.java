package dev.info.user.jwt;

import java.util.Date;

import org.springframework.stereotype.Component;

import dev.info.user.Entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenGenerator {

    private static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;

    public String generateToken(User user) {
        return Jwts.builder().setHeaderParam(Header.TYPE, Header.JWT_TYPE).setIssuer("토큰 발급자")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .claim("id", user.getId())
                .signWith(SignatureAlgorithm.HS256, "secret").compact();
    }

    public Claims parseToken(String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer "))
            throw new IllegalArgumentException();

        String token = authHeader.substring("Bearer ".length());

        return Jwts.parser().setSigningKey("secret").parseClaimsJws(token).getBody();
    }
}
