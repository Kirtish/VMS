package com.ysoft.vms.services.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ysoft.vms.domain.Purchase;
import com.ysoft.vms.repositories.PurchaseRepository;
import com.ysoft.vms.services.IPurchaseService;

@Service
public class PurchaseServiceImpl implements IPurchaseService {

	@Autowired
	private PurchaseRepository purchaseRepository;
	
	@Override
	public List<Purchase> getPurchases() {
		List<Purchase> purchases = new ArrayList<Purchase>();
		Iterator<Purchase> itr = purchaseRepository.findAll().iterator();
		while(itr.hasNext())
			purchases.add(itr.next());
		return purchases;
	}

	@Transactional
	@Override
	public Purchase savePurchase(Purchase purchasse) {
		return purchaseRepository.save(purchasse);
	}

	@Override
	public Purchase getPurchase(Long id) {
		return purchaseRepository.findOne(id);
	}

	@Transactional
	@Override
	public Purchase delePurchase(Long id) {
		Purchase purchase = getPurchase(id);
		purchaseRepository.delete(purchase);
		return purchase;
	}

	@Override
	public List<Purchase> fetchByPurchaseDate(Date purchaseDate) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Transactional
	@Override
	public Purchase updatePurchase(Purchase purchase) {
		return purchaseRepository.save(purchase);
	}

	
}
