package app.service;

import app.dao.TaskDao;
import app.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Service("taskService")
@Transactional
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskDao taskDao;

    @Override
    public void saveTask(Task task) {
        taskDao.saveTask(task);
    }

    @Override
    public List<Task> findAllTask() {
        return taskDao.findAllTask();
    }

    @Override
    public Task findById(int id) {
        return taskDao.findById(id);
    }

    @Override
    public void updateTask(Task task) {
        Task entity = taskDao.findById(task.getId());
        if(entity!=null){
            entity.setDescription(task.getDescription());
            entity.setDoneAtDate(task.getDoneAtDate());
            entity.setDoneDate(task.getDoneDate());
            entity.setTaskCategory(task.getTaskCategory());
        }
    }

    @Override
    public void deleteTaskById(int id) {
        taskDao.deleteTaskById(id);
    }

}
