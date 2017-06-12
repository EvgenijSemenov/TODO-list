package app.dao;

import app.model.Task;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
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

    @Override
    public Task findById(int id) {
        Criteria criteria = createEntityCriteria();
        criteria.add(Restrictions.eq("id", id));

        return (Task) criteria.uniqueResult();
    }

    @Override
    public void deleteTaskById(int id) {
        Query query = getSession().createSQLQuery("delete from TASK where id = :id");
        query.setInteger("id", id);
        query.executeUpdate();
    }

}
