package app.dao;

import app.model.Task;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("taskDao")
public class TaskDaoImpl extends AbstractDao<Integer, Task> implements TaskDao {

    @Override
    public void saveTask(Task task) {
        persist(task);
    }

    @Override
    public List<Task> findAllTask() {
        Criteria criteria = createEntityCriteria();

        return (List<Task>) criteria.list();
    }

}
