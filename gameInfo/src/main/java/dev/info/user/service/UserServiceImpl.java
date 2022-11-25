package dev.info.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.RequestMappingInfoHandlerMethodMappingNamingStrategy;

import dev.info.user.Entity.User;
import dev.info.user.Entity.User.Request;
import dev.info.user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAllUsers() {

        return userRepository.findAll();
    }

    @Override
    public User findUserById(String id) {

        User foundUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("%s에 해당하는 User가 존재하지 않습니다.", id)));

        return foundUser;
    }

    @Override
    public User saveUser(User newUser) {

        return userRepository.save(newUser);
    }

    @Override
    public List<User> updateUser(Request request) {
        final Optional<User> user = userRepository.findById(request.getId()); 
        //Optional class의 목적은 null 참조 대신 Optional value로 표현되는 형식의 솔루션을 제공하는 것, 
        //즉 nullpointexception을 해결하기 위한 방법으로 Optional 등장했다고 보면 됨

        if (user.isPresent()) { //메서드에서 반환된 Optional 객체가 있거나 직접 생성한 경우 isPresent() 메서드를 사용하여 값이 있는지 확인 가능
            final User foundUser = user.get();

            foundUser.setNickname(request.getNickname());
            foundUser.setEmail(request.getEmail());

            userRepository.save(foundUser);
        }
        List<User> users = userRepository.findAll();

        return users;
    }

    @Override
    public List<User> deleteUser(String id) {
        userRepository.deleteById(id);

        List<User> users = userRepository.findAll();

        return users;
    }

    @Override
    public User loginUser(Request request) {

        return userRepository.findByIdAndPassword(request.getId(), request.getPassword());
    }

}
