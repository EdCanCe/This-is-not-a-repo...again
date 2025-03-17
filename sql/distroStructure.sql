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

CREATE TABLE privilege(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    summary VARCHAR(30) NOT NULL
);

INSERT INTO privilege(summary) VALUES('Modifica votación');
INSERT INTO privilege(summary) VALUES('Añade votación');

CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(20) NOT NULL 
);

INSERT INTO role(title) VALUES ('proUser');
INSERT INTO role(title) VALUES ('User');

CREATE TABLE privilegeRole (
    privilegeRoleRoleIDFK INT,
    CONSTRAINT privilegeRoleRoleIDFK FOREIGN KEY (privilegeRoleRoleIDFK) REFERENCES role(id),
    privilegeRolePrivilegeIDFK INT,
    CONSTRAINT privilegeRolePrivilegeIDFK FOREIGN KEY (privilegeRolePrivilegeIDFK) REFERENCES privilege(id)
);

INSERT INTO privilegeRole VALUES(1, 1);
INSERT INTO privilegeRole VALUES(1, 2);

INSERT INTO privilegeRole VALUES(2, 2);

CREATE TABLE userRole (
    userRoleRoleIDFK INT,
    CONSTRAINT userRoleRoleIDFK FOREIGN KEY (userRoleRoleIDFK) REFERENCES role(id),
    userRoleUserIDFK INT,
    CONSTRAINT userRoleUserIDFK FOREIGN KEY (userRoleUserIDFK) REFERENCES user(id)
);