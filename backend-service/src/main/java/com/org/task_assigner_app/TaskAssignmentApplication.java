package com.org.task_assigner_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class TaskAssignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskAssignmentApplication.class, args);
	}

}
