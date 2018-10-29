DELETE FROM set
WHERE exercise_id = $1
;
DELETE FROM exercise
WHERE id = $1
;