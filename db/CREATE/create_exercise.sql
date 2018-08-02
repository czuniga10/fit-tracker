INSERT INTO exercise (workout_id, exercise)
VALUES ($1, $2)
returning *
;