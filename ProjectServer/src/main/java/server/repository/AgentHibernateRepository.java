package server.repository;

import common.domain.Agent;

import java.util.Optional;

import common.utils.HibernateUtils;
import org.hibernate.Session;

public class AgentHibernateRepository implements IAgentRepository{

    @Override
    public Optional<Agent> findOneByUsername(String username) {
        try(Session session = HibernateUtils.getSessionFactory().openSession()) {
            return Optional.ofNullable(session.createQuery("from Agent where username = :username", Agent.class)
                    .setParameter("username", username)
                    .getSingleResultOrNull());
        }
    }

    @Override
    public Optional<Agent> findOne(Long aLong) {
        try(Session session = HibernateUtils.getSessionFactory().openSession()) {
            return Optional.ofNullable(session.createQuery("from Agent where id = :id", Agent.class)
                    .setParameter("id", aLong)
                    .getSingleResultOrNull());
        }
    }

    @Override
    public Iterable<Agent> getAll() {
        try(Session session = HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from Agent", Agent.class).getResultList();
        }
    }

    @Override
    public void save(Agent entity) {
        HibernateUtils.getSessionFactory().inTransaction(session -> session.persist(entity));
    }

    @Override
    public void delete(Long aLong) {
        HibernateUtils.getSessionFactory().inTransaction(session -> {
            Agent agent = session.createQuery("from Agent where id = :id", Agent.class)
                    .setParameter("id", aLong)
                    .getSingleResultOrNull();
            if (agent != null) {
                session.remove(agent);
                session.flush();
            }
        });
    }

    @Override
    public void update(Agent entity) {
        HibernateUtils.getSessionFactory().inTransaction(session -> {
            if (session.find(Agent.class, entity.getId()) != null) {
                session.merge(entity);
                session.flush();
            }
        });
    }
}
