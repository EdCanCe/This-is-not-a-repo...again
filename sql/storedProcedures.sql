DELIMITER $$
CREATE PROCEDURE SelectVotes()
BEGIN
    SELECT * FROM vote, user WHERE vote.usernameID = user.id;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE SelectPrivileges(IN queryUsername VARCHAR(255))
BEGIN
    SELECT DISTINCT p.summary FROM privilege p, privilegeRole pr, role r, userRole ur, user u WHERE p.id = pr.privilegeRolePrivilegeIDFK AND pr.privilegeRoleRoleIDFK = r.id AND r.id = ur.userRoleRoleIDFK AND u.id = ur.userRoleUserIDFK AND u.username = queryUsername;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE SelectUser(IN queryUsername VARCHAR(255))
BEGIN
    SELECT * FROM user WHERE username = queryUsername;
END $$
DELIMITER ;