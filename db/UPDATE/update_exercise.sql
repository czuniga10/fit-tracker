UPDATE exercise
SET
    workout_id = $1,
    exercise = $3
    
WHERE
    id = $2
    
returning *
;