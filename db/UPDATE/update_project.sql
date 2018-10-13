UPDATE project
SET
    user_id = $2,
    name = $3,
    details = $4
WHERE
    id = $1

    
returning *
;