require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card.rb')

class TestCardGame < Minitest::Test

def setup
    @hand1 = Card.new('club', 1)
    @hand2 = Card.new('hearts', 10)
end

def test_check_for_ace()
    assert_equal(true, CardGame.check_for_ace(@hand1))
end

def test_highest_card()
    assert_equal(@hand2, CardGame.highest_card(@hand1, @hand2))
end

def test_cards_total()
    cards = [@hand1, @hand2]
    assert_equal("You have a total of 11", CardGame.cards_total(cards))
end

end