INSERT INTO set (exercise_id, workout_id, exercise_id, type, reps, weight, is_completed)
VALUES ($1, $2, $3, $4, $5, $6, $7)
returning *
;