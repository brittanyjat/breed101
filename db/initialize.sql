CREATE TABLE breeds (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
photo VARCHAR(250)
)

create table traits (
id INTEGER REFERENCES breeds ON DELETE CASCADE,
ceo VARCHAR(250),
trait1 varchar(20),
trait2 varchar(20),
trait3 varchar(20),
description VARCHAR(1500),
weight integer,
height integer,
energy integer,
expectancy integer,
barking integer,
intelligence integer,
playful integer,
affection integer,
train integer,
apartment integer,
cat integer,
dog integer,
child integer,
exercise integer,
health integer,
grooming integer,
shedding integer,
spotlight BOOLEAN DEFAULT FALSE,
hypoallergenic BOOLEAN DEFAULT FALSE,
FOREIGN KEY (id) REFERENCES breeds (id)
)