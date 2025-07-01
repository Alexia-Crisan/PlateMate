package org.platemate.backend.controllers;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class HomeController {
    @GetMapping()
    public String index() {
        return "Welcome to the index page of the PlateMate backend!";
    }
}
