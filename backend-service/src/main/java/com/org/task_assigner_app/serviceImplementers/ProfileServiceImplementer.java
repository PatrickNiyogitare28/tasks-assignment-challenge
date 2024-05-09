package com.org.task_assigner_app.serviceImplementers;

import com.org.task_assigner_app.models.User;
import com.org.task_assigner_app.repositories.UserRepository;
import com.org.task_assigner_app.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProfileServiceImplementer implements ProfileService {
    @Autowired
    private UserRepository userRepository;


    @Override
    public Optional<User> get(Long userId) {
        boolean profileExists = userRepository.existsById(userId);
        if(!profileExists) return Optional.empty();
        return userRepository.findById(userId);
    }

    @Override
    public List<User> findAll(){
        return userRepository.findAll();
    }

//    @Override
//    public Optional<User> editUserProfile(Long userId, EditProfileRequest newProfile) {
//        Optional<User> existingProfile = userRepository.findById(userId);
//        if(existingProfile.isEmpty()) return Optional.empty();
//
//        newProfile.setId(userId);
//        User updatedProfile = userRepository.save(newProfile)
//    }
}
