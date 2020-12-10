module.exports = {
    "up": "CREATE TABLE users (user_id INT NOT NULL, UNIQUE KEY user_id (user_id), name TEXT )",
    "down": "DROP TABLE users"
}