package com.org.school_rest.serviceImplementers;

import com.org.school_rest.dto.CreateTaskRequest;
import com.org.school_rest.dto.EditTaskRequest;
import com.org.school_rest.models.Task;
import com.org.school_rest.models.User;
import com.org.school_rest.repositories.TaskRepository;
import com.org.school_rest.repositories.UserRepository;
import com.org.school_rest.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskServiceImplementer implements TaskService {
    @Autowired
    private  TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Task create(CreateTaskRequest task) {
        Task newTask = new Task();
        newTask.setTitle(task.getTitle());
        newTask.setDescription(task.getDescription());
        newTask.setStartDate(task.getStartDate());
        newTask.setEndDate(task.getEndDate());
        newTask.setPriority(task.getPriority());
        newTask.setProjectName(task.getProjectName());
        newTask.setAttachment(task.getAttachment());

        // Convert list of user IDs to list of User objects
        List<Long> assigneeIds = task.getAssigneeIds();
        List<User> assignees = new ArrayList<>();
        for (Long userId : assigneeIds) {
            Optional<User> userOptional = userRepository.findById(userId);
            if (userOptional.isPresent()) {
                assignees.add(userOptional.get());
            } else {
                // Handle the case where a user ID does not correspond to a valid User entity
                // This could involve throwing an exception or skipping the ID
                throw new IllegalArgumentException("User with ID " + userId + " does not exist.");
            }
        }
        newTask.setAssignee(assignees); // Assuming setAssignee is the method to set the list of User objects

        return taskRepository.save(newTask);
    }


    // Read a task by ID
    public Optional<Task> getById(Long id) {
        return taskRepository.findById(id);
    }

    // Find all
    public List<Task> findAll(){
        return taskRepository.findAll();
    }

    // Update a task
    public Task update(Long taskId,EditTaskRequest task) {
        // Assuming EditTaskRequest has a method to get the task ID and the list of assignee IDs
        // Assuming getTaskId is a method in EditTaskRequest to get the task ID
        List<Long> assigneeIds = task.getAssigneeIds(); // Assuming getAssigneeIds is a method in EditTaskRequest to get the list of user IDs

        // Fetch the existing task from the database
        Optional<Task> taskOptional = taskRepository.findById(taskId);
        if (!taskOptional.isPresent()) {
            throw new IllegalArgumentException("Task with ID " + taskId + " does not exist.");
        }

        Task existingTask = taskOptional.get();

        // Convert list of user IDs to list of User objects
        List<User> assignees = new ArrayList<>();
        for (Long userId : assigneeIds) {
            Optional<User> userOptional = userRepository.findById(userId);
            if (userOptional.isPresent()) {
                assignees.add(userOptional.get());
            } else {
                // Handle the case where a user ID does not correspond to a valid User entity
                // This could involve throwing an exception or skipping the ID
                throw new IllegalArgumentException("User with ID " + userId + " does not exist.");
            }
        }

        // Update the task with the new data
        existingTask.setTitle(task.getTitle());
        existingTask.setDescription(task.getDescription());
        existingTask.setStartDate(task.getStartDate());
        existingTask.setEndDate(task.getEndDate());
        existingTask.setPriority(task.getPriority());
        existingTask.setAttachment(task.getAttachment());
        existingTask.setProjectName(task.getProjectName());
        existingTask.setAssignee(assignees); // Assuming setAssignee is the method to set the list of User objects

        return taskRepository.save(existingTask);
    }

    // Delete a task by ID
    public void delete(Long id) {
        taskRepository.deleteById(id);
    }

    // Check if a task exists by ID
    public boolean existsById(Long id) {
        return taskRepository.existsById(id);
    }

    // Get tasks by user ID
    public List<Task> getByUserId(Long userId) {
        return taskRepository.findTasksByUserId(userId);
    }
}



