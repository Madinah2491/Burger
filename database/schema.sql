Create DATABASE burgers_db;

USE burger_db;

Create table burgers(
    id  INT auto_increment NOT NULL,
    burger_name VARCHAR(150) NOT NULL,
    devoured BOOL DEFAULT FALSE,
    primary key (id)
) ,

INSERT INTO burgers (burger_name, devoured)
 values (cheeseburger, FALSE);
INSERT INTO burgers (burger_name, devoured)
 values (hamburger, FALSE);
INSERT INTO burgers (burger_name, devoured)
 values (pizzaburger, FALSE);