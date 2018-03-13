SELECT id, name, photo from traits
NATURAL JOIN breeds
WHERE spotlight = TRUE;