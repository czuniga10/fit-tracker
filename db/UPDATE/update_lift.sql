UPDATE week
SET
    project_id = $2,
    day_id = $3,
    focus_id = $4,
    lift = $5,
    reps = $6,
    weight = $7,
    is_completed = $8
    
WHERE
    id = $1
    
returning *
;