package com.org.school_rest.repositories;

import com.org.school_rest.models.Task;
import com.org.school_rest.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    // Check if a task exists by ID
    boolean existsById(Long id);

//    // Custom method to find tasks by user ID
//    @Query("SELECT t FROM Task t WHERE t.assignee.id = :userId")
//    List<Task> findTasksByUserId(@Param("userId") Long userId);
    @Query("SELECT t FROM Task t JOIN t.assignee a WHERE a.id = :userId")
    List<Task> findTasksByUserId(@Param("userId") Long userId);
}
