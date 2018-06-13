--Drops current tables in DB and re-adds tables over again on Server restart

DROP TABLE IF EXISTS 
    users, 
    project,
    day,
    focus,
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

CREATE TABLE week (
    id SERIAL PRIMARY KEY,
    project_id int references project(id),
    day_id int references day(id),
    focus_id int references focus(id),
    lift TEXT,
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

INSERT INTO week (project_id, day_id, focus_id, lift, reps, weight, is_completed)
VALUES
    (1,1,1,'Bench', '3X10', '200', false),
    (1,1,1,'DB Bench', '3X10', '75', false),
    (1,1,1,'Flys', '3X10', '100', false),
    (1,1,2,'Cable Pull-downs', '3x10', '50', false),
    (1,1,2,'Dips', '3xfailure', 'BW', false),
    (1,1,2,'Scull Crushers', '3X10', '60', false),
    (1,1,1,'Push-Ups', '3XFailure', 'BW', false),

    (1,2,3,'Cable Pulls', '3X10', '100', false),
    (1,2,3,'DB Rows', '3X10', '50', false),
    (1,2,3,'Back Flys', '3X10', '80', false),
    (1,2,4,'DB Curls', '3x10', '35', false),
    (1,2,4,'Reverse Grip Barbell Curls', '3x10', '50', false),
    (1,2,4,'Cable Curls', '3X10', '55', false),
    (1,2,3,'Pull-ups', '3XFailure', 'BW', false)
    ;