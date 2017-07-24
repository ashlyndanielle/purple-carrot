INSERT INTO cart (recipesid, userid, quantity, recipeThumbnail, name, price)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;