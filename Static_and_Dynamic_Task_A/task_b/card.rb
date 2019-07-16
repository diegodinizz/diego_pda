require_relative('./spec/card_spec')
require_relative('card_game')

class Card

  attr_reader :suit, :value
    
    def initialize(suit, value)
      @suit = suit
      @value = value
    end
    
  end