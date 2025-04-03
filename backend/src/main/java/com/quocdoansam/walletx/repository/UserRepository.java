package com.quocdoansam.walletx.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quocdoansam.walletx.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    boolean isUserExistedByUsername(String username);
    Optional<User> findByUsername(String username);
}
