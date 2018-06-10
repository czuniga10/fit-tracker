UPDATE users
SET
    username = $2,
    first_name = $3,
    last_name = $4,
    email = $5,
    password = $6
WHERE
    id = $1
    
returning *
;