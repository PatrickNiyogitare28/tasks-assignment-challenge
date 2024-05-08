package com.org.school_rest.serviceImplementers;

import com.org.school_rest.dto.EditProfileRequest;
import com.org.school_rest.models.User;
import com.org.school_rest.repositories.UserRepository;
import com.org.school_rest.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
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

//    @Override
//    public Optional<User> editUserProfile(Long userId, EditProfileRequest newProfile) {
//        Optional<User> existingProfile = userRepository.findById(userId);
//        if(existingProfile.isEmpty()) return Optional.empty();
//
//        newProfile.setId(userId);
//        User updatedProfile = userRepository.save(newProfile)
//    }
}
