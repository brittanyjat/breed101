INSERT INTO breeds (name, photo, ceo, description) VALUES ($1, $2, $3, $4)
RETURNING *;