package app.service;

import app.dao.TaskCategoryDao;
import app.model.TaskCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("taskCategoryService")
@Transactional
public class TaskCategoryServiceImpl implements TaskCategoryService{

    @Autowired
    private TaskCategoryDao taskCategoryDao;

    @Override
    public void save(TaskCategory taskCategory) {
        taskCategoryDao.save(taskCategory);
    }

    @Override
    public List<TaskCategory> findAll() {
        return taskCategoryDao.findAll();
    }

    @Override
    public TaskCategory findById(int id) {
        return taskCategoryDao.findById(id);
    }

    @Override
    public void update(TaskCategory taskCategory) {
        TaskCategory entity = taskCategoryDao.findById(taskCategory.getId());
        if(entity!=null){
            entity.setName(taskCategory.getName());
        }
    }

    @Override
    public void deleteById(int id) {
        taskCategoryDao.deleteById(id);
    }

}
