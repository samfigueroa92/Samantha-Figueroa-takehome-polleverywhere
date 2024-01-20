\c raffle_app

-- sample raffles
INSERT INTO raffles ("name", "secret_token", "creation_date") VALUES 
('Sample Raffle 1', 'saLpR23', '2023-12-13 05:34:20'),
('Sample Raffle 2', 'saLpR23', '2023-11-09 03:00:10'),
('Sample Raffle 3', 'rlGTH2', '2023-9-13 06:34:20'),
('Sample Raffle 4', 'sdn345l', '2024-01-05 10:34:20'),
('Sample Raffle 5', 'CllsEM23', '2023-12-23 01:00:00');

-- sample participants
INSERT INTO participants ("raffle", "first_name", "last_name", "email", "phone") VALUES 
(1, 'Samantha', 'Figueroa', 'samanthafigueroa@pursuit.org', '123-412-1324'),
(1, 'Onig', 'Asdurian', 'oniga@gmail.com', ''),
(1, 'Kalilah', 'Clarke', 'kalilahc@hotmail.com', ''),
(2, 'Marta', 'Figueroa', 'mcfig@yahoo.com', ''),
(3, 'Christina', 'Wellington', 'cwellington@gmail.com', '');