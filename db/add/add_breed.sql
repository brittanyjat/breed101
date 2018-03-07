WITH ins as (
    INSERT INTO breeds(name, photo)
    VALUES ($1, $2)
    RETURNING id )
INSERT INTO traits 
    (id, ceo, trait1, trait2, trait3, description, weight, height, energy, expectancy, barking, intelligence, playful, affection, train, apartment, cat, dog, child, exercise, health, grooming, shedding)
    SELECT id, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24 FROM ins;

