package com.org.task_assigner_app.repositories;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.org.task_assigner_app.enumerations.ERoleName;
import com.org.task_assigner_app.models.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERoleName roleName);
}

