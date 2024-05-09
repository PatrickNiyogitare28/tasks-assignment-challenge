package com.org.school_rest.serviceImplementers;

import com.org.school_rest.models.User;
import com.org.school_rest.repositories.UserRepository;
import com.org.school_rest.services.ProfileService;
import com.org.school_rest.utils.APIResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
