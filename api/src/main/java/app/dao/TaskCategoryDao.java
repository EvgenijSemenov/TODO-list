package app.dao;

import app.model.TaskCategory;

import java.util.List;

public interface TaskCategoryDao {

    void save(TaskCategory taskCategory);

    List<TaskCategory> findAll();

    TaskCategory findById(int id);

    void deleteById(int id);

}
