INSERT INTO project(user_id, name, details)
VALUES ($1, $2, $3)
returning *
;