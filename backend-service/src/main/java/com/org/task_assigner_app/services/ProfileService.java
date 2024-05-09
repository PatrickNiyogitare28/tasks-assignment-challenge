package com.org.task_assigner_app.services;

import com.org.task_assigner_app.models.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProfileService {
    public Optional<User> get(Long userId);
//    public User update(Long userId, EditProfileRequest newProfile);

   public List<User> findAll();
}
