package com.org.task_assigner_app.services;

import com.org.task_assigner_app.dto.CreateTaskRequest;
import com.org.task_assigner_app.dto.EditTaskRequest;
import com.org.task_assigner_app.models.Task;
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
