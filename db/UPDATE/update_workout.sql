UPDATE workout
SET
    project_id = $1,
    name = $3,
    date = $4,
    time = $5
    
WHERE
    id = $2
    
returning *
;