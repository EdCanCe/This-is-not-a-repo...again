CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL,
    passwd VARCHAR(256) NOT NULL
);

CREATE TABLE vote(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    distro VARCHAR(15) NOT NULL,
    usernameID INT NOT NULL,
    CONSTRAINT usernameID FOREIGN KEY (usernameID) REFERENCES user(id),
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp() 
);