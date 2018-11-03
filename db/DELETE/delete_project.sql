DELETE FROM set
WHERE project_id = $1
;
DELETE FROM exercise
WHERE project_id = $1
;

DELETE FROM workout
WHERE project_id = $1
;

DELETE FROM project
WHERE id = $1
;