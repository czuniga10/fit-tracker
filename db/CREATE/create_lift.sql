INSERT INTO week (project_id, day_id, focus_id, lift, reps, weight, is_completed)
VALUES ($1, $2, $3, $4, $5, $6, $7)
returning *
;