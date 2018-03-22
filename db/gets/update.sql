select id, name, photo, ceo, trait1, trait2, trait3, description, weight, height, energy, expectancy, barking, intelligence, playful, affection,
    train, apartment, cat, dog, child, exercise, health, grooming, shedding, youtube
from breeds 
natural join traits where id = $1;