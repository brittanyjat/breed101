CREATE TABLE breeds (
id SERIAL PRIMARY KEY,
name VARCHAR(25),
photo VARCHAR(250),
ceo VARCHAR(250),
)

create table traits (
id integer,
trait1 varchar(20),
trait2 varchar(20),
trait3 varchar(20),
FOREIGN KEY (id) REFERENCES breeds ( id )
)

CREATE TABLE genetics (
id integer,
weight INTEGER,
height INTEGER,
energy INTEGER,
lifeExpected VARCHAR(20),
barking INTEGER,
FOREIGN KEY (id) REFERENCES breeds (id)
)

CREATE TABLE main (
id INTEGER,
intelligence INTEGER,
playful INTEGER,
affection INTEGER,
train INTEGER,
FOREIGN KEY (id) REFERENCES breeds (id)
)

CREATE TABLE adaptability (
id INTEGER,
apartment INTEGER,
cat INTEGER,
dog INTEGER,
child INTEGER,
FOREIGN KEY (id) REFERENCES breeds (id)
)

CREATE TABLE needs (
id INTEGER,
exercise INTEGER,
heath INTEGER,
grooming INTEGER,
shedding INTEGER,
FOREIGN KEY (id) REFERENCES breeds (id)
)