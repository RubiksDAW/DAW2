package es.tuespiral.spring.orderproduct;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderProductRepository extends CrudRepository<OrderProduct, Long> {
	public List<OrderProduct> findByProductId(Long productId);
	
}