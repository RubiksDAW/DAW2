package es.tuespiral.spring.customer;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
	public List<Customer> findByEmailAddress(String email);
	

	//@EntityGraph(value = "GroupInfo.detail", type = EntityGraphType.LOAD)
	public List<Customer> findAll();
	
    @Query("SELECT new Customer(c.name, c.last_name) FROM CUSTOMERS c WHERE c.id= :id")
    public List<Customer> findByIdPrueba(@Param("id") Long id);
}