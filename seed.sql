-- seed.sql

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Insert 10 courses with generated UUIDs
INSERT INTO "Course" (uuid, "courseId", name, faculty)
VALUES 
(gen_random_uuid(), 'CS101', 'Introduction to Computer Science', 'Dr. Alice Johnson'),
(gen_random_uuid(), 'CS102', 'Data Structures', 'Dr. Bob Smith'),
(gen_random_uuid(), 'CS103', 'Algorithms', 'Dr. Carol Lee'),
(gen_random_uuid(), 'CS104', 'Operating Systems', 'Dr. David Kim'),
(gen_random_uuid(), 'CS105', 'Databases', 'Dr. Emily Clark'),
(gen_random_uuid(), 'CS106', 'Computer Networks', 'Dr. Frank White'),
(gen_random_uuid(), 'CS107', 'Software Engineering', 'Dr. Grace Hall'),
(gen_random_uuid(), 'CS108', 'Artificial Intelligence', 'Dr. Henry Adams'),
(gen_random_uuid(), 'CS109', 'Machine Learning', 'Dr. Irene Scott'),
(gen_random_uuid(), 'CS110', 'Web Development', 'Dr. Jack Brown');
