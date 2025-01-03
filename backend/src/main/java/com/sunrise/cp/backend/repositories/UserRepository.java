package com.sunrise.cp.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunrise.cp.backend.entites.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);
}
