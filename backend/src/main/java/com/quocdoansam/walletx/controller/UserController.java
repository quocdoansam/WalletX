package com.quocdoansam.walletx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quocdoansam.walletx.dto.request.UserCreationRequest;
import com.quocdoansam.walletx.dto.response.ApiResponse;
import com.quocdoansam.walletx.dto.response.UserResponse;
import com.quocdoansam.walletx.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @SuppressWarnings("unchecked")
    ApiResponse<UserResponse> create(@RequestBody UserCreationRequest request) {
        ApiResponse apiResponse = new ApiResponse<>();

        apiResponse.setResult(userService.create(request));
        return apiResponse;
    }
}
