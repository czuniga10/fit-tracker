INSERT INTO exercise (workout_id, project_id, exercise)
VALUES ($1, $2, $3)
returning *
;