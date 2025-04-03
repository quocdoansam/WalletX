package com.quocdoansam.walletx.service;

import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.quocdoansam.walletx.dto.request.UserCreationRequest;
import com.quocdoansam.walletx.dto.response.UserResponse;
import com.quocdoansam.walletx.entity.User;
import com.quocdoansam.walletx.enums.Role;
import com.quocdoansam.walletx.exception.AppException;
import com.quocdoansam.walletx.exception.ErrorCode;
import com.quocdoansam.walletx.mapper.UserMapper;
import com.quocdoansam.walletx.repository.UserRepository;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    UserMapper userMapper;

    public UserResponse create(UserCreationRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new AppException(ErrorCode.USER_EXISTED);
        }

        User user = userMapper.toCreationUser(request);

        // Start the password encryption
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        // Add role
        HashSet<String> roles = new HashSet<>();
        roles.add(Role.USER.name());

        return userMapper.toUserResponse(userRepository.save(user));
    }
}
