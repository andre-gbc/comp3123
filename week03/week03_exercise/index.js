var http = require("http");
const { employees } = require("./Employee"); //TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== "GET") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    }

    if (req.url === "/") {
        //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        return res.end("<h1>Welcome to Lab Exercise 03</h1>");
    }

    if (req.url === "/employee") {
        //TODO - Display all details for employees in JSON format
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(employees));
    }

    if (req.url === "/employee/names") {
        //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
        //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        const employeeNames = employees
            .map((employee) => `${employee.firstName} ${employee.lastName}`)
            .sort();

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify(employeeNames));
    }

    if (req.url === "/employee/totalsalary") {
        //TODO - Display Sum of all employees salary in given JSON format
        //e.g. { "total_salary" : 100 }
        const totalSalary = employees.reduce((sum, employee) => sum + employee.Salary, 0);

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        return res.end(JSON.stringify({ total_salary: totalSalary }));
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});