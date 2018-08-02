INSERT INTO workout (project_id, name, date, time)
VALUES ($1, $2, $3, $4)
returning *
;