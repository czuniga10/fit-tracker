--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    users, 
    project,
    day,
    focus,
    lift,
    week;

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

CREATE TABLE day (
    id SERIAL PRIMARY KEY,
    day TEXT
);

CREATE TABLE focus (
    id SERIAL PRIMARY KEY,
    focus TEXT
);

CREATE TABLE lift (
    id SERIAL PRIMARY KEY,
    lift TEXT,
    reps TEXT,
    weight TEXT,
    is_completed BOOLEAN
);

CREATE TABLE week (
    id SERIAL PRIMARY KEY,
    project_id int references project(id),
    user_id int references users(id),
    day_id int references day(id),
    focus_id int references focus(id),
    lift_id int references lift(id)
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
    (1, 'Week 1', 'Easy Week'),
    (1, 'Week 2', 'Little Harder Week'),
    (1, 'Week 3', 'Cardio Week'),
    (1, 'Week 4', 'PR Week'),
    (1, 'Week 5', 'Hell Week'),
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
INSERT INTO day (day)
VALUES
    ('Monday'),
    ('Tuesday'),
    ('Wednesday'),
    ('Thursday'),
    ('Friday'),
    ('Saturday'),
    ('Sunday')
;

INSERT INTO focus (focus)
VALUES
    ('Chest'),
    ('Triceps'),
    ('Back'),
    ('Biceps'),
    ('Legs'),
    ('Shoulders'),
    ('Cardio')
;

INSERT INTO lift (lift, reps, weight, is_completed)
VALUES
    ('Bench', '3X10', '200', false),
    ('DB Bench', '3X10', '75', false),
    ('Flys', '3X10', '100', false),
    ('Cable Pull-downs', '3x10', '50', false),
    ('Dips', '3xfailure', 'BW', false),
    ('Scull Crushers', '3X10', '60', false),
    ('Push-Ups', '3XFailure', 'BW', false),

    ('Cable Pulls', '3X10', '100', false),
    ('DB Rows', '3X10', '50', false),
    ('Back Flys', '3X10', '80', false),
    ('DB Curls', '3x10', '35', false),
    ('Reverse Grip Barbell Curls', '3x10', '50', false),
    ('Cable Curls', '3X10', '55', false),
    ('Pull-ups', '3XFailure', 'BW', false)
;

INSERT INTO week (project_id, user_id, day_id, focus_id, lift_id)
VALUES
    (1,1,1,1,1),
    (1,1,1,1,2),
    (1,1,1,1,3),
    (1,1,1,2,4),
    (1,1,1,2,5),
    (1,1,1,2,6),
    (1,1,1,1,7),

    (1,1,2,3,8),
    (1,1,2,3,9),
    (1,1,2,3,10),
    (1,1,2,4,11),
    (1,1,2,4,12),
    (1,1,2,4,13),
    (1,1,2,3,14)
;