CREATE TABLE breeds (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
photo VARCHAR(250)
)

create table traits (
id INTEGER,
ceo VARCHAR(250),
trait1 varchar(20),
trait2 varchar(20),
trait3 varchar(20),
description VARCHAR(1500),
weight NUMERIC,
height NUMERIC,
energy NUMERIC,
expectancy NUMERIC,
barking NUMERIC,
intelligence NUMERIC,
playful NUMERIC,
affection NUMERIC,
train NUMERIC,
apartment NUMERIC,
cat NUMERIC,
dog NUMERIC,
child NUMERIC,
exercise NUMERIC,
health NUMERIC,
grooming NUMERIC,
shedding NUMERIC,
FOREIGN KEY (id) REFERENCES breeds (id)
)