package com.rajasekar.vyntramart.service;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.rajasekar.vyntramart.model.*;


@Service
public
class ProductService {

	public static List<Product> items = new ArrayList<>();
	public static Integer idCounter = 0;
	
	static {
		items.add(new Product(++idCounter, "iPhone 8", "iPhone 8", 100000));
		items.add(new Product(++idCounter, "Mac Pro", "Mac Pro", 120000));
		items.add(new Product(++idCounter, "Apple watch", "Apple watch", 40000));
		items.add(new Product(++idCounter, "Printer",
				"Printer", 23000));
	}

	public List<Product> findAll() {
		return items;
	}

	public Product save(Product product) {
		if (product.getId() == -1 || product.getId() == 0) {
			product.setId(++idCounter);
			items.add(product);
		} else {
			deleteById(product.getId());
			items.add(product);
		}
		return product;
	}

	public Product deleteById(Integer query) {
		Product product = findById(query);

		if (product == null)
			return null;

		if (items.remove(product)) {
			return product;
		}

		return null;
	}

	public Product findById(Integer query) {
		for (Product product : items) {
			if (product.getId() == query) {
				return product;
			}
		}

		return null;
	}
}