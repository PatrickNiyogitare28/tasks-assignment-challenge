package com.org.school_rest.services;

import com.org.school_rest.dto.CreateTaskRequest;
import com.org.school_rest.dto.EditTaskRequest;
import com.org.school_rest.models.Task;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TaskService {

    public Task create(CreateTaskRequest task);

    public Optional<Task> getById(Long id);

    public List<Task> findAll();

    public Task update(Long taskId, EditTaskRequest task);

    public void delete(Long id);

    public boolean existsById(Long id);

    public List<Task> getByUserId(Long userId);
}
