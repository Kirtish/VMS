package com.ysoft.vms.services;

import java.util.Date;
import java.util.List;

import com.ysoft.vms.domain.Purchase;

public interface IPurchaseService {

	public List<Purchase> getPurchases();
	
	public Purchase savePurchase(Purchase purchasse);
	
	public Purchase getPurchase(Long id);
	
	public Purchase delePurchase(Long id);
	
	public List<Purchase> fetchByPurchaseDate(Date purchaseDate);
	
	public Purchase updatePurchase(Purchase purchase);
}
