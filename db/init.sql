--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    users, 
    project,
    workout,
    exercise,
    set;

--Please keep the order of the CREATE TABLE inserts the same

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    first_name TEXT,
    last_name TEXT,
    email TEXT unique, 
    password TEXT
 );

CREATE TABLE project (
    id SERIAL PRIMARY KEY,
    user_id int references users(id),
    name TEXT,
    details TEXT
);

CREATE TABLE workout (
    id SERIAL PRIMARY KEY,
    project_id int references project(id),
    name TEXT,
    date TEXT,
    time TEXT
);

CREATE TABLE exercise (
    id SERIAL PRIMARY KEY,
    workout_id int references workout(id),
    project_id int references project(id),
    exercise text
);

CREATE TABLE set (
    id SERIAL PRIMARY KEY,
    exercise_id int references exercise(id),
    workout_id int references workout(id),
    project_id int references project(id),
    type TEXT,
    reps TEXT,
    weight TEXT,
    is_completed BOOLEAN
);



-----------Start of Test user info---------------

--Status Table

-- --User Table

INSERT INTO users ( username, first_name, last_name, email, password )
VALUES
    ('username123', 'Chad', 'Zuniga', 'czuniga@thumbtack.com', 'password1'),
    ('username123', 'Cam', 'Crump', 'ccrump@thumbtack.com', 'password1'),
    ('username123', 'James', 'Adams', 'jadams@thumbtack.com', 'password1'),
    ('username123', 'Jeremy', 'Oslund', 'joslund@thumbtack.com', 'password1'),
    ('username123', 'Jacob', 'Gibson', 'jgibson@thumbtack.com', 'password1'),
    ('username123', 'Sarah', 'Paulson', 'spaulson@thumbtack.com', 'password1'),
    ('username123', 'Steven', 'Pollock', 'spollock@thumbtack.com', 'password1'),
    ('username123', 'Noah', 'Lee', 'nlee@thumbtack.com', 'password1'),
    ('username123', 'Sabrina', 'Parry', 'sparry@thumbtack.com', 'password1'),
    ('username123', 'Joe', 'Mero', 'jmero@thumbtack.com', 'password1')
;

-- --Projects

INSERT INTO project (user_id, name, details)
VALUES
    (1, 'Easy Week', 'Light cardio, light weight/more reps'),
    (1, 'Mid Week', 'Little Harder Week'),
    (1, 'Cardio Week', 'Just Sweatin'),
    (1, 'PR Week', 'Up those PRs'),
    (1, 'Hell Week', 'Heavy Weight/Low Reps/Low Rest Time/Heavy Sweat'),
    (2, 'Week 1', 'Easy Week'),
    (2, 'Week 2', 'Little Harder Week'),
    (2, 'Week 3', 'Cardio Week'),
    (2, 'Week 4', 'PR Week'),
    (2, 'Week 5', 'Hell Week'),
    (3, 'Week 1', 'Easy Week'),
    (3, 'Week 2', 'Little Harder Week'),
    (3, 'Week 3', 'Cardio Week'),
    (3, 'Week 4', 'PR Week'),
    (3, 'Week 5', 'Hell Week')

;

-- --Day
INSERT INTO workout (project_id, name, date, time)
VALUES
    (1, 'Morning Workout', '8/2/2018', '34:00'),
    (1, 'Afternoon Workout', '8/2/2018', '34:00'),
    (1, 'Evening Workout', '8/2/2018', '34:00'),
    (2, 'Morning Workout', '8/2/2028', '34:00'),
    (2, 'Afternoon Workout', '8/2/2028', '34:00'),
    (2, 'Evening Workout', '8/2/2018', '34:00'),
    (3, 'Morning Workout', '8/2/2038', '34:00'),
    (3, 'Afternoon Workout', '8/2/2018', '34:00'),
    (3, 'Evening Workout', '8/2/2018', '34:00')
;

-- Focus
INSERT INTO exercise (workout_id, project_id, exercise)
VALUES
    (1,1,'Bench'),
    (1,1,'Cable Press'),
    (1,1,'Cable Pulls'),
    (1,1,'Skull Crushers'),
    (1,1,'Squat'),
    (1,1,'Arnold Press'),
    (1,1,'Run 1 mile'),
    (2,1,'Bench'),
    (2,1,'Cable Press'),
    (2,1,'Cable Pulls'),
    (2,1,'Skull Crushers'),
    (2,1,'Squat'),
    (2,1,'Arnold Press'),
    (2,1,'Run 1 mile'),
    (3,1,'Bench'),
    (3,1,'Cable Press'),
    (3,1,'Cable Pulls'),
    (3,1,'Skull Crushers'),
    (3,1,'Squat'),
    (3,1,'Arnold Press'),
    (3,1,'Run 1 mile'),
    (4,2,'Bench'),
    (4,2,'Cable Press'),
    (4,2,'Cable Pulls'),
    (4,2,'Skull Crushers'),
    (4,2,'Squat'),
    (4,2,'Arnold Press'),
    (4,2,'Run 1 mile'),
    (5,2,'Bench'),
    (5,2,'Cable Press'),
    (5,2,'Cable Pulls'),
    (5,2,'Skull Crushers'),
    (5,2,'Squat'),
    (5,2,'Arnold Press'),
    (5,2,'Run 1 mile'),
    (6,2,'Bench'),
    (6,2,'Cable Press'),
    (6,2,'Cable Pulls'),
    (6,2,'Skull Crushers'),
    (6,2,'Squat'),
    (6,2,'Arnold Press'),
    (6,2,'Run 1 mile')

;

--Week
INSERT INTO set (exercise_id, workout_id, project_id, type, reps, weight, is_completed)
VALUES
    (1,1,1,'Warmup', '3X10', '200', false),
    (1,1,1,'SuperSet', '3X10', '75', false),
    (1,1,1,'Normal', '3X10', '100', false),
    (1,1,1,'Cooldown', '3x10', '50', false),
    (1,1,1,'Warmup', '3xfailure', 'BW', false),
    (1,1,1,'Superset', '3X10', '60', false),
    (1,1,1,'Normal', '3XFailure', 'BW', false),

    (2,1,1,'Warmup', '3X20', '200', false),
    (2,1,1,'Warmup', '3X20', '50', false),
    (2,1,1,'Warmup', '3X20', '80', false),
    (2,1,1,'Warmup', '3x20', '35', false),
    (2,1,1,'Warmup', '3x20', '50', false),
    (2,1,1,'Warmup', '3X10', '55', false),
    (2,1,1,'Warmup', '3XFailure', 'BW', false),

    (3,1,1,'Warmup', '3X10', '200', false),
    (3,1,1,'SuperSet', '3X10', '75', false),
    (3,1,1,'Normal', '3X10', '100', false),
    (3,1,1,'Cooldown', '3x10', '50', false),
    (3,1,1,'Warmup', '3xfailure', 'BW', false),
    (3,1,1,'Superset', '3X10', '60', false),
    (3,1,1,'Normal', '3XFailure', 'BW', false),

    (4,2,1,'Warmup', '3X20', '200', false),
    (4,2,1,'Warmup', '3X20', '50', false),
    (4,2,1,'Warmup', '3X20', '80', false),
    (4,2,1,'Warmup', '3x20', '35', false),
    (4,2,1,'Warmup', '3x20', '50', false),
    (4,2,1,'Warmup', '3X10', '55', false),
    (4,2,1,'Warmup', '3XFailure', 'BW', false),

    (5,2,1,'Warmup', '3X10', '200', false),
    (5,2,1,'SuperSet', '3X10', '75', false),
    (5,2,1,'Normal', '3X10', '100', false),
    (5,2,1,'Cooldown', '3x10', '50', false),
    (5,2,1,'Warmup', '3xfailure', 'BW', false),
    (5,2,1,'Superset', '3X10', '60', false),
    (5,2,1,'Normal', '3XFailure', 'BW', false),

    (6,2,1,'Warmup', '3X20', '200', false),
    (6,2,1,'Warmup', '3X20', '50', false),
    (6,2,1,'Warmup', '3X20', '80', false),
    (6,2,1,'Warmup', '3x20', '35', false),
    (6,2,1,'Warmup', '3x20', '50', false),
    (6,2,1,'Warmup', '3X10', '55', false),
    (6,2,1,'Warmup', '3XFailure', 'BW', false)
    ;