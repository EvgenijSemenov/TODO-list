package app.controller;

import app.model.TaskCategory;
import app.service.TaskCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/tasks/categories")
public class TaskCategoryController {

    @Autowired
    private TaskCategoryService taskCategoryService;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<TaskCategory> saveTaskCategory(@RequestBody TaskCategory taskCategory) {
        taskCategoryService.save(taskCategory);

        return new ResponseEntity<TaskCategory>(taskCategory, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<TaskCategory> findTaskCategoryById(@PathVariable int id) {

        return new ResponseEntity<TaskCategory>(taskCategoryService.findById(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<TaskCategory>> getAllTaskCategory() {

        return new ResponseEntity<List<TaskCategory>>(taskCategoryService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public ResponseEntity<TaskCategory> updateTaskCategory(@RequestBody TaskCategory taskCategory) {
        taskCategoryService.update(taskCategory);

        return new ResponseEntity<TaskCategory>(taskCategory, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<TaskCategory> deleteTaskCategory(@PathVariable int id) {
        TaskCategory deleteTaskCategory = taskCategoryService.findById(id);
        taskCategoryService.deleteById(id);

        return new ResponseEntity<TaskCategory>(deleteTaskCategory, HttpStatus.OK);
    }

}
