-- https://www.codewars.com/kata/1-find-all-active-students/sql

-- Description:

-- Create a simple SELECT query to display student information of all ACTIVE students.

-- TABLE STRUCTURE:

-- students
-- Id	FirstName	LastName	IsActive


SELECT * FROM students WHERE IsActive;