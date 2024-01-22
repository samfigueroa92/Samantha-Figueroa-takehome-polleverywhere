DROP DATABASE IF EXISTS raffle_app;
CREATE DATABASE raffle_app;

\c raffle_app;

-- to add with login functionality
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY;
--     uuid TEXT,
--     first_name TEXT,
--     last_name TEXT,
--     email TEXT
-- );

CREATE TABLE raffles (
    id SERIAL PRIMARY KEY,
    name TEXT,
    secret_token TEXT,
    creation_date TIMESTAMP,
    raffled_date TIMESTAMP,
    winner_id INT
);
-- owner INT references users(id)

CREATE TABLE participants (
    id SERIAL PRIMARY KEY,
    raffle INT references raffles(id),
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    img TEXT,
    registration_date TIMESTAMP
);