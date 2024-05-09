package com.org.school_rest.dto;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class CreateTaskRequest {

    private String title;
    private String description;
    private String startDate;
    private String endDate;
    private List<Long> assigneeIds; // List of user IDs representing the assignees
    private String projectName;
    private String priority;
    private String attachment;

    // Getters and Setters
    @NotBlank
    public String getTitle() {
        return title;
    }

    @NotBlank
    public void setTitle(String title) {
        this.title = title;
    }
    @NotBlank
    public String getDescription() {
        return description;
    }
    @NotBlank
    public void setDescription(String description) {
        this.description = description;
    }
    @NotBlank
    public String getStartDate() {
        return startDate;
    }
    @NotBlank
    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }
    @NotBlank
    public String getEndDate() {
        return endDate;
    }
    @NotBlank
    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
    @NotBlank
    public List<Long> getAssigneeIds() {
        return assigneeIds;
    }
    @NotBlank
    public void setAssigneeIds(List<Long> assigneeIds) {
        this.assigneeIds = assigneeIds;
    }
    @NotBlank
    public String getProjectName() {
        return projectName;
    }
    @NotBlank
    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }
    @NotBlank
    public String getPriority() {
        return priority;
    }
    @NotBlank
    public void setPriority(String priority) {
        this.priority = priority;
    }
    @NotBlank
    public String getAttachment() {
        return attachment;
    }
    @NotBlank
    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }
}
