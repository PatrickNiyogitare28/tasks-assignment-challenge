package com.org.school_rest.repositories;

import com.org.school_rest.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String usernameOrMobileOrEmail);
    Optional<User> findByEmailOrUsernameOrMobile(String login, String login2, String login3);
    boolean existsByEmail(String email);
    boolean existsByMobile(String mobile);
}
