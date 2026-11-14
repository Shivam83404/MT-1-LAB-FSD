
import http from 'http';
import fs from 'fs';

const students = [
    {
        id: 1,
        name: "Rahul Sharma",
        rollNumber: "2026001",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Amit Kumar",
        rollNumber: "2026002",
        branch: "CSE"
    },
    {
        id: 3,
        name: "Priya Singh",
        rollNumber: "2026003",
        branch: "AIML"
    }
];

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to Student Management System</h1>');

    }

    else if (req.url === '/students' && req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(students));

    }

    else if (req.url === '/about' && req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Student Management Application</h1><p>Built using Node.js HTTP Module</p>');

    }


else if (req.url === '/student-file' && req.method === 'GET') {

    fs.readFile('./student.txt', 'utf8', (err, data) => {

        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Error reading file');
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);

    });

}


    else if (req.url === '/add-student' && req.method === 'POST') {

        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {

            try {
                const student = JSON.parse(body);

                if (!student.id || !student.name || !student.rollNumber || !student.branch) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ message: 'All fields are required' }));
                }

                students.push(student);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: 'Student added successfully',
                    student: student
                }));

            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Invalid JSON' }));
            }

        });

    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Page Not Found</h1>');
    }

});

server.listen(3000, () => {
    console.log('HTTP Server running at http://localhost:3000');
});
