UPDATE breeds
SET name = $2,
    photo = $3
WHERE id = $1;