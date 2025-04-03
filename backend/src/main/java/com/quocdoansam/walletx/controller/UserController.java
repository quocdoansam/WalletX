package com.quocdoansam.walletx.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quocdoansam.walletx.dto.request.UserCreationRequest;
import com.quocdoansam.walletx.dto.response.ApiResponse;
import com.quocdoansam.walletx.dto.response.UserResponse;
import com.quocdoansam.walletx.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping()
    ApiResponse<UserResponse> create(@RequestBody UserCreationRequest request) {
        UserResponse userResponse = userService.create(request);
        return ApiResponse.<UserResponse>builder().result(userResponse).build();
    }

    @GetMapping("/{username}")
    public ApiResponse<UserResponse> read(@PathVariable String username) {
        UserResponse userResponse = userService.read(username);
        return ApiResponse.<UserResponse>builder().result(userResponse).build();
    }

    @GetMapping()
    public ApiResponse<List<UserResponse>> readAll() {
        List<UserResponse> users = userService.readAll();
        return ApiResponse.<List<UserResponse>>builder().result(users).build();
    }
}
