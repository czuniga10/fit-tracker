UPDATE set
SET
    exercise_id = $1,
    type = $3,
    reps = $4,
    weight = $5,
    is_completed = $6
    
WHERE
    id = $2
    
returning *
;