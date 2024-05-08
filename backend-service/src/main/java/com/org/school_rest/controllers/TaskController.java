package com.org.school_rest.controllers;

import com.org.school_rest.dto.CreateTaskRequest;
import com.org.school_rest.dto.EditTaskRequest;
import com.org.school_rest.models.Task;
import com.org.school_rest.services.TaskService;
import com.org.school_rest.utils.APIResponse;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // Create a new task
    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody CreateTaskRequest task) {
        Task createdTask = taskService.create(task);
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }

    // Read a task by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getTaskById(@PathVariable Long id) {
        Optional<Task> task = taskService.getById(id);
        if(task.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new APIResponse("Task Not Found", false));
        Map<String, Object> data = new HashMap<>();
        data.put("task", task);
        return ResponseEntity.ok().body(new APIResponse("Task found", true, data));
    }

    @GetMapping("")
    public ResponseEntity<?> findAll() {
        List<Task> tasks = taskService.findAll();
        Map<String, Object> data = new HashMap<>();
        data.put("tasks", tasks);
        return ResponseEntity.ok().body(new APIResponse("Tasks found", true, data));
    }

    // Update a task
    @PutMapping("/{id}")
    public ResponseEntity<?> updateTask(@PathVariable Long id, @RequestBody EditTaskRequest task) {
        boolean existsById = taskService.existsById(id);
        if(!existsById) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new APIResponse("Task Not Found", false));
        Task updatedTask = taskService.update(id, task);

        Map<String, Object> data = new HashMap<>();
        data.put("task", updatedTask);
        return ResponseEntity.ok().body(new APIResponse("Task found", true, data));
    }

    // Delete a task by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id) {
        boolean exists = taskService.existsById(id);
        if(!exists) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new APIResponse("Task not found", false));
        taskService.delete(id);
        return  ResponseEntity.ok().body(new APIResponse("Task deleted successfully", true));
    }

    // Get tasks by user ID
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getTasksByUserId(@PathVariable Long userId) {
        List<Task> tasks = taskService.getByUserId(userId);
        Map<String, Object> data = new HashMap<>();
        data.put("tasks", tasks);
        return ResponseEntity.ok().body(new APIResponse("Tasks found", true, data));
    }
}
