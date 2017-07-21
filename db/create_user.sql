INSERT INTO users (userid, displayname)
VALUES ($1, $2)
RETURNING *;