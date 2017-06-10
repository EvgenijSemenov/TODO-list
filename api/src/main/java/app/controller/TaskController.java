package app.controller;

import app.model.Task;
import app.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    TaskService taskService;

    @RequestMapping(value = "/task", method = RequestMethod.GET)
    public ResponseEntity<List<Task>> listAllTask() {

        return new ResponseEntity<List<Task>>(taskService.findAllTask(), HttpStatus.OK);
    }

    @RequestMapping(value = "/task/add", method = RequestMethod.GET)
    public ResponseEntity<String> addTask() {
        Task task = new Task();
        task.setTitle("Title");
        task.setDescription("Description");
        taskService.saveTask(task);

        return new ResponseEntity<String>("Task added", HttpStatus.OK);
    }

}
