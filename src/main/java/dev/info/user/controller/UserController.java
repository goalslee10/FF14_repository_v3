package dev.info.user.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import dev.info.user.Entity.User;
import dev.info.user.jwt.JwtTokenGenerator;
import dev.info.user.service.UserService;

@RestController
@RequestMapping("ffusers")

@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenGenerator jwtTokenGenerator;

    @GetMapping
    public List<User.Response> getUsers() {

        List<User> users = userService.findAllUsers();
        List<User.Response> response = User.Response.toResponseList(users);

        return response;
    }

    @GetMapping("/{id}")
    public User.Response getUser(@PathVariable String id) {

        User foundUser = userService.findUserById(id);

        return User.Response.toResponse(foundUser);

    }

    @PostMapping
    public ResponseEntity<User.Response> createUser(@RequestBody @Valid User.Request request) {

        User user = User.Request.toEntity(request);

        User savedUser = userService.saveUser(user);
        User.Response response = User.Response.toResponse(savedUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PutMapping
    public List<User.Response> updateUser(@RequestBody User.Request request) {
        List<User> users = userService.updateUser(request);
        return User.Response.toResponseList(users); // DTO로 변환 후 반환
    }

    @DeleteMapping
    public List<User.Response> deleteUser(@RequestParam("id") String id) {
        List<User> users = userService.deleteUser(id);
        return User.Response.toResponseList(users);
    }

    @PostMapping("ffusers/auth")
    public ResponseEntity<User.Response> Login(@RequestBody User.Request request) {

        User user = userService.loginUser(request);

        String token = jwtTokenGenerator.generateToken(user);
        System.out.println(token);

        User.Response responseData = User.Response.toResponse(user);

        responseData.setToken(token);

        return ResponseEntity.status(HttpStatus.OK).body(responseData);
    }

}
