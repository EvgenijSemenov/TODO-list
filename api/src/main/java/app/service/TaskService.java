package app.service;

import app.model.Task;
import java.util.List;

public interface TaskService {

    void saveTask(Task task);

    List<Task> findAllTask();

    Task findById(int id);

    void updateTask(Task task);

    void deleteTaskById(int id);

}
