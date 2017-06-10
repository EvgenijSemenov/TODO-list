package app.dao;

import app.model.TaskCategory;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("taskCategoryDao")
public class TaskCategoryImpl extends AbstractDao<Integer, TaskCategory> implements TaskCategoryDao {
    @Override
    public void save(TaskCategory taskCategory) {
        persist(taskCategory);
    }

    @Override
    public List<TaskCategory> findAll() {
        Criteria criteria = createEntityCriteria();

        return (List<TaskCategory>) criteria.list();
    }

    @Override
    public TaskCategory findById(int id) {
        return findById(id);
    }

    @Override
    public void deleteById(int id) {
        Query query = getSession().createSQLQuery("delete from TaskCategory where id = :id");
        query.setInteger("id", id);
        query.executeUpdate();
    }
}
