UPDATE set
SET
    type = $2,
    reps = $3,
    weight = $4,
    is_completed = $5
    
WHERE
    id = $1
    
returning *
;