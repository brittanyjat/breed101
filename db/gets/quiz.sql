SELECT id, name, photo from traits
NATURAL JOIN breeds
WHERE energy <= $1
AND affection >= $2
AND shedding <= $3
AND apartment >= $4
AND cat >= $5
AND dog >= $6
AND child >= $7
AND weight <= $8;