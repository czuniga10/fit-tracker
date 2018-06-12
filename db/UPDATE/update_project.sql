update project
set
    user_id = $2,
    name = $3,
    details = $4
where
    id = $1
    
returning *
;