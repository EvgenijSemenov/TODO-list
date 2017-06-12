package app.service;

import app.model.TaskCategory;
import java.util.List;

public interface TaskCategoryService {

    void save(TaskCategory taskCategory);

    List<TaskCategory> findAll();

    TaskCategory findById(int id);

    void update(TaskCategory taskCategory);

    void deleteById(int id);

}
