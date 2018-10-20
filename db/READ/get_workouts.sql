SELECT * FROM workout
WHERE project_id = $1
ORDER BY id
;