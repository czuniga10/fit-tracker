UPDATE exercise
SET
    exercise = $2
    
WHERE
    id = $1
    
returning *
;