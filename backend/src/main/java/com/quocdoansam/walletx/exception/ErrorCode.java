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
    USER_NOT_EXISTED(1001, "User not existed."),
    USER_EXISTED(1002, "User existed."),
    USERNAME_INVALID(1003, "The username must be at least 3 and up to 30 characters."),
    PASSWORD_INVALID(1004, "The password must be at least 6 and up to 60 characters."),
    UNAUTHENTICATED(1005, "Unauthenticated."),
    WALLET_ADDRESS_EXISTED(1006, "Wallet address existed."),
    WALLET_ADDRESS_NOT_EXISTED(1007, "Wallet address not existed."),
    FORBIDDEN(1008, "Access is forbidden."),
    USERNAME_MUST_START_WITH_LETTER(1009, "Username must start with letter.")
    ;

    int code;
    String message;
}
