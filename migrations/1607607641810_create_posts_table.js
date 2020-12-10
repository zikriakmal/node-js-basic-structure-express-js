module.exports = {
    "up": `CREATE TABLE users
     (
         id int NOT NULL PRIMARY KEY,
         password varchar(255),
         LastName varchar(255),
         FirstName varchar(255),
         Address varchar(255),
         City varchar(255)
     )`,
    "down": "DROP TABLE users"
}