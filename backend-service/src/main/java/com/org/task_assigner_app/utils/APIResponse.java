package com.org.task_assigner_app.utils;


import java.util.Map;

public class APIResponse {

    private String message;

    private boolean status;

    Map<String, Object> data;

    public APIResponse(String message, boolean status, Map<String, Object> data) {
        super();
        this.message = message;
        this.status = status;
        this.data = data;
    }

    public APIResponse() {
        super();
    }

    public APIResponse(String message, boolean status) {
        super();
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Map<String, Object> getData() {
        return data;
    }

    public void setData(Map<String, Object> data) {
        this.data = data;
    }

}
