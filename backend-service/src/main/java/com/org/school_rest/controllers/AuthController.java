package com.org.school_rest.controllers;


import java.net.URI;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import com.org.school_rest.utils.APIResponse;
import com.org.school_rest.utils.JwtAuthenticationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.org.school_rest.dto.LoginRequest;
import com.org.school_rest.dto.SignUpRequest;
import com.org.school_rest.enumerations.EAccountStatus;
import com.org.school_rest.models.Role;
import com.org.school_rest.models.User;
import com.org.school_rest.repositories.RoleRepository;
import com.org.school_rest.repositories.UserRepository;
import com.org.school_rest.security.JwtTokenProvider;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Optional<User> findByEmail = userRepository.findByEmailOrUsernameOrMobile(loginRequest.getLogin(),loginRequest.getLogin(),loginRequest.getLogin());
        if(findByEmail.isPresent()) {
            if(!(findByEmail.get().getStatus().equals(EAccountStatus.ACTIVE))) {
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid account status");
            }
        }else {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unknown account");
        }
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getLogin(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {

        if (signUpRequest.getEmail() != null && userRepository.existsByEmail(signUpRequest.getEmail())) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email Address already in use!");
        }

        if (userRepository.existsByMobile(signUpRequest.getMobile())) {
            ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Phone number already in use!");
        }

        User user = new User(signUpRequest.getFirstName(), signUpRequest.getLastName(), signUpRequest.getMobile(),
                signUpRequest.getEmail(), signUpRequest.getPassword());

        user.setUsername(user.getEmail());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setActivationCode(user.getMobile());
        user.setStatus(EAccountStatus.ACTIVE);
        user.setFullName(signUpRequest.getFirstName()+" "+signUpRequest.getLastName());

        Optional<Role> userRole = roleRepository.findByName(signUpRequest.getRoleName());

        userRole.ifPresent(role -> user.setRoles(Collections.singleton(role)));


        User result = userRepository.save(user);


        URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();

        APIResponse response = new APIResponse();
        response.setMessage("User registered successfully");
        response.setStatus(true);
        Map<String, Object> data = new HashMap<>();;
        data.put("user", result);
        response.setData(data);
        return ResponseEntity.created(location).body(
               response);
    }



}
