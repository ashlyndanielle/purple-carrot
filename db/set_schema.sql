DROP TABLE IF EXISTS users, plans;



CREATE TABLE users (id integer, displayName text);

INSERT INTO users (id, displayName)
VALUES (1, 'ashTest');

INSERT INTO users (id, displayName)
VALUES (2, 'gus');




CREATE TABLE plans (
    id SERIAL PRIMARY KEY
    , name TEXT 
);

INSERT INTO plans (name) 
VALUES ('Plan 1');

INSERT INTO plans (name) 
VALUES ('Plan 2');

INSERT INTO plans (name) 
VALUES ('Plan 3');