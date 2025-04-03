package com.quocdoansam.walletx.mapper;

import com.quocdoansam.walletx.dto.request.UserCreationRequest;
import com.quocdoansam.walletx.dto.response.UserResponse;
import com.quocdoansam.walletx.entity.User;

public interface UserMapper {
    User toCreationUser(UserCreationRequest request);
    UserResponse toUserResponse(User user);
}
