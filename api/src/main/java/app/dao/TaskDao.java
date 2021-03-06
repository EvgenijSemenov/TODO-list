package app.dao;

import app.model.Task;
import java.util.List;

public interface TaskDao {

    void saveTask(Task task);

    List<Task> findAllTask();

    Task findById(int id);

    void deleteTaskById(int id);

}
