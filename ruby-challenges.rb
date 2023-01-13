# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def oddEven(num)
    if num % 2 == 0
        "#{num} is even"
    else
        "#{num} is odd"
    end
end

p oddEven(num1)
p oddEven(num2)
p oddEven(num3)

# output: "7 is odd"
# "42 is even"
# "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def noVowels(str)
    str.delete "aeiouAEIOU"
end

p noVowels(beatles_album1)
p noVowels(beatles_album2)
p noVowels(beatles_album3)

# output: "Rbbr Sl"
# "Sgt Pppr"
# "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def pals(word)
    if word.downcase == word.downcase.reverse
        "#{word} is a palindrome"
    else
        "#{word} is not a palindrome"
    end
end

p pals(palindrome_tester1)
p pals(palindrome_tester2)
p pals(palindrome_tester3)

# output: "Racecar is a palindrome"
# "LEARN is not a palindrome"
# "Rotator is a palindrome"