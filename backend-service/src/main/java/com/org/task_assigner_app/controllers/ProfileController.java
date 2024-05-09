package com.org.task_assigner_app.controllers;

import com.org.task_assigner_app.models.User;
import com.org.task_assigner_app.serviceImplementers.ProfileServiceImplementer;
import com.org.task_assigner_app.utils.APIResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {
   @Autowired
   private ProfileServiceImplementer profileService;

   @GetMapping("/{userId}")
    public ResponseEntity<?> getUserProfile(@PathVariable Long userId){
       Optional<User> profile = profileService.get(userId);
       if(profile.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
               new APIResponse("Profile not found", false)
       );
       Map<String, Object> data = new HashMap<>();
       data.put("profile", profile);
       return ResponseEntity.ok().body(new APIResponse("Profile found", true, data));
   }

   @GetMapping("")
   public ResponseEntity<?> findAll(){
      List<User> profiles = profileService.findAll();
      Map<String, Object> data = new HashMap<>();
      data.put("profiles", profiles);
      return ResponseEntity.ok().body(new APIResponse("Fetched profiles", true, data));
   }
}
