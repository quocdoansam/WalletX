package com.quocdoansam.walletx.exception;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

@Getter
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public enum ErrorCode {
    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized error."),
    USER_NOT_EXISTED(1000, "User not existed."),
    USER_EXISTED(1002, "User existed."),
    USERNAME_INVALID(1003, "Username must be at least 3 characters."),
    PASSWORD_INVALID(1004, "Password must be at least 8 characters."),
    UNAUTHENTICATED(1005, "Unauthenticated."),
    WALLET_ADDRESS_EXISTED(1006, "Wallet address existed."),
    WALLET_ADDRESS_NOT_EXISTED(1007, "Wallet address not existed."),
    FORBIDDEN(1008, "Access is forbidden.")
    ;

    int code;
    String message;
}
