package com.org.task_assigner_app.dto;

public class EditProfileRequest {

    private  Long id;

    private String firstName;

    private String lastName;

    private String mobile;

    private String username;

    public EditProfileRequest(String firstName, String lastName, String mobile, String username) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
