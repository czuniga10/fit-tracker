SELECT * FROM exercise
WHERE workout_id = $1
ORDER BY id;
;