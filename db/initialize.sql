CREATE TABLE breeds (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
photo VARCHAR(250),
ceo VARCHAR(250),
description VARCHAR(1500)
)

create table traits (
id INTEGER,
trait1 varchar(20),
trait2 varchar(20),
trait3 varchar(20),
FOREIGN KEY (id) REFERENCES breeds ( id )
)

CREATE TABLE genetics (
id INTEGER,
weight NUMERIC,
height NUMERIC,
energy NUMERIC,
lifeExpected VARCHAR(20),
barking NUMERIC,
FOREIGN KEY (id) REFERENCES breeds (id)
)

CREATE TABLE main (
id INTEGER,
intelligence NUMERIC,
playful NUMERIC,
affection NUMERIC,
train NUMERIC,
FOREIGN KEY (id) REFERENCES breeds (id)
)

CREATE TABLE adaptability (
id INTEGER,
apartment NUMERIC,
cat NUMERIC,
dog NUMERIC,
child NUMERIC,
FOREIGN KEY (id) REFERENCES breeds (id)
)

CREATE TABLE needs (
id NUMERIC,
exercise NUMERIC,
health NUMERIC,
grooming NUMERIC,
shedding NUMERIC,
FOREIGN KEY (id) REFERENCES breeds (id)
)