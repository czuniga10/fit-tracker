DELETE FROM set
WHERE workout_id = $1
;

DELETE FROM exercise
WHERE workout_id = $1
;

DELETE FROM workout
WHERE id = $1
;