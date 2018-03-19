SELECT id, name, photo, apartment, cat, dog, child, energy, affection, shedding from traits
NATURAL JOIN breeds
WHERE weight <= $1;