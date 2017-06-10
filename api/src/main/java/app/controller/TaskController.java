package app.controller;

import app.model.Task;
import app.model.TaskCategory;
import app.service.TaskCategoryService;
import app.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    TaskService taskService;

    @Autowired
    TaskCategoryService taskCategoryService;

    @RequestMapping(value = "/task", method = RequestMethod.GET)
    public ResponseEntity<List<Task>> listAllTask() {

        return new ResponseEntity<List<Task>>(taskService.findAllTask(), HttpStatus.OK);
    }

    @RequestMapping(value = "/task/{id}", method = RequestMethod.GET)
    public ResponseEntity<Task> findTaskById(@PathVariable int id) {

        return new ResponseEntity<Task>(taskService.findById(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/task", method = RequestMethod.POST)
    public ResponseEntity<Task> saveTask(@RequestBody Task task) {
        taskService.saveTask(task);

        return new ResponseEntity<Task>(task, HttpStatus.OK);
    }

    @RequestMapping(value = "/task/{id}", method = RequestMethod.POST)
    public ResponseEntity<Task> updateTask(@RequestBody Task task) {
        taskService.updateTask(task);

        return new ResponseEntity<Task>(task, HttpStatus.OK);
    }

    @RequestMapping(value = "/task/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Task> deleteTask(@PathVariable int id) {
        Task deleteTask = taskService.findById(id);
        taskService.deleteTaskById(id);

        return new ResponseEntity<Task>(deleteTask, HttpStatus.OK);
    }

}
