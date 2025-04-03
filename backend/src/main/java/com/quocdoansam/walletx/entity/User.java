package com.quocdoansam.walletx.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    @Column(unique = true, nullable = false)
    String username;

    @Column(nullable = false)
    String password;

    @Column(unique = true, nullable = true)
    String email;

    String fullName;
    LocalDate dob;

    @Column(unique = true)
    String walletAddress;

    @Column(columnDefinition = "DECIMAL(19, 4)")
    BigDecimal balance;

    Set<String> roles;

    @CreationTimestamp
    LocalDate createdAt;
}
