package com.ysoft.vms.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ysoft.vms.domain.VocherCard;
import com.ysoft.vms.repositories.VocherCardRepository;
import com.ysoft.vms.services.IVocherCardService;

@Service
public class VocherCardServiceImpl implements IVocherCardService {

	@Autowired
	private VocherCardRepository vocherCardRepository; 
	
	@Override
	public List<VocherCard> getVocherCards() {
		List<VocherCard> vocherCards = new ArrayList<VocherCard>();
		Iterator<VocherCard> itr = vocherCardRepository.findAll().iterator();
		while(itr.hasNext())
			vocherCards.add(itr.next());
		return vocherCards;
	}

	@Override
	public VocherCard getVocherCard(Long id) {
		return vocherCardRepository.findOne(id);
	}

	@Override
	public VocherCard save(VocherCard vocherCard) {
		return vocherCardRepository.save(vocherCard);
	}

	@Override
	public VocherCard delete(Long id) {
		VocherCard vocherCard = getVocherCard(id);
		vocherCardRepository.delete(vocherCard);
		return vocherCard;
	}

}
