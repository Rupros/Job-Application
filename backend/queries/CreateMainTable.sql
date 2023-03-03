USE items;

CREATE TABLE Items (
	id int AUTO_INCREMENT,
    sku varchar(255),
    ItemType varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE Dvds (
	id int AUTO_INCREMENT,
    size varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE Books (
	id int AUTO_INCREMENT,
    weight varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE Furniture (
	id int AUTO_INCREMENT,
    length varchar(255),
    width varchar(255),
    height varchar(255),
    PRIMARY KEY (id)
);