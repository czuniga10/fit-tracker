UPDATE workout
SET
    name = $2,
    date = $3,
    time = $4
    
WHERE
    id = $1
    
returning *
;