numbers = [1, 2, 3, 4, 5]

def sum_numbers (numbers)
  sum = 0
  for number in numbers
    sum += number
  end
  return sum
end

p "The total is #{sum_numbers(numbers)}."
