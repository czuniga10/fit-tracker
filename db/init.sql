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
    name TEXT,
    details TEXT
    -- date TEXT
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

-- INSERT INTO projects (user_id, name, date)
-- VALUES
--     (1, 'Full Stack Software Engineers', '4/18/2018'),
--     (1, 'Front End Software Engineers', '4/20/2018'),
--     (1, 'Back End Software Engineers', '4/28/2018'),
--     (1, 'Site Reliablility Engineers', '5/1/2018'),
--     (1, 'Data Scientists', '5/1/2018')

-- ;

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

-- INSERT INTO focus (focus)
-- VALUES
--     ('Chest'),
--     ('Triceps'),
--     ('Back'),
--     ('Biceps'),
--     ('Legs'),
--     ('Shoulders'),
--     ('Cardio')
-- ;