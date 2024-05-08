package com.org.school_rest.services;

import com.org.school_rest.dto.EditProfileRequest;
import com.org.school_rest.models.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface ProfileService {
    public Optional<User> get(Long userId);
//    public User update(Long userId, EditProfileRequest newProfile);
}
