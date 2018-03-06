INSERT INTO breeds (name, photo) VALUES ($1, $2)
RETURNING *;