SELECT id, name, photo, trait1, trait2, trait3 from traits
NATURAL JOIN breeds
WHERE spotlight = TRUE;