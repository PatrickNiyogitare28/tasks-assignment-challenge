package com.org.school_rest.repositories;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.org.school_rest.enumerations.ERoleName;
import com.org.school_rest.models.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERoleName roleName);
}

