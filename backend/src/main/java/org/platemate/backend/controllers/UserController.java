package org.platemate.backend.controllers;

import org.platemate.backend.repos.UserRepository;
import org.platemate.backend.models.User;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping
    public User createUser(@RequestParam String username) {
        User user = new User();
        user.setUsername(username);
        return userRepository.save(user);
    }
}
