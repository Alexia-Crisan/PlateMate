package org.platemate.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "org.platemate.backend.controllers"
})
public class BackendApplication {

    public static void main(String[] args) {
        System.out.println("DB_URL: " + System.getenv("DB_CONNECTION_STRING"));

        SpringApplication.run(BackendApplication.class, args);
    }

}
