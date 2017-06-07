package app.service;

import app.model.Task;

import java.util.List;

public interface TaskService {

    void saveTask(Task task);

    List<Task> findAllTask();
}
