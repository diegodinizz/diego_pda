class CardGame
    
    def checkforAce(card) # The Ruby convention is to use underscores to separate words in a multiword method or variable name. Also should have self before the name of the method to points to class.
      if card.value = 1 # Missing a equal sigh
        return true
      else
        return false
      end
    end
  
    dif highest_card(card1 card2) # dif has been declared wrong instead of def then passing two arguments without separate them with comma. Also should have self before the name of the method to points to class.
    if card1.value > card2.value
      return card # should have returned card1
    else
      return card2
    end
  end
  end # not necessary end of method
  
  def self.cards_total(cards)
    total # should have been declared equals 0
    for card in cards
      total += card.value
      return "You have a total of" + total # you can't convert an String into a Integer
  end

end