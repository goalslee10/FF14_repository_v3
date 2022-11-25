package dev.info.user.service;

import java.util.List;

import dev.info.user.Entity.User;

public interface UserService {
    List<User> findAllUsers();

    User findUserById(String id);

    User saveUser(User newUser);

    User loginUser(User.Request request);

    List<User> updateUser(User.Request request);

    List<User> deleteUser(String id);

}