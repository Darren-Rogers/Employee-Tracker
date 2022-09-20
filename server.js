const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

const db = mysql.createConnection({
  user: 'root',
  database: 'company_db',
});
const prompt = inquirer.createPromptModule();

const showAllEmployee = () => {
  db.query('SELECT * FROM employee', (err, employee) => {
    if (err) throw err;
    console.table(employee);
    init();
  });
};
const showAllDepartments = () => {
  db.query('SELECT * FROM department', (err, department) => {
    if (err) throw err;
    console.table(department);
    init();
  });
};
const showAllRole = () => {
  db.query('SELECT * FROM role', (err, role) => {
    if (err) throw err;
    console.table(role);
    init();
  });
};

const addEmployee = () => {
  prompt([{
    name: 'first_name',
    type: 'input',
    message: 'What is the first name?',
  },
  {
    name: 'last_name',
    type: 'input',
    message: 'What is the last name?',
  },
  {
    name: 'role_id',
    type: 'input',
    message: 'What is the role id?',
  },
  {
    name: 'manager_id',
    type: 'input',
    message: 'What is the manager id?',
  }
])
  .then((input) => {
    // INSERT INTO movies SET movie_name = 'Robocop';
    db.query('INSERT INTO employee SET ?', input, (err) => {
      if (err) throw err;
      console.log(`Saved ${input.first_name},${input.last_name},${input.role_id},${input.manager_id} `);
      init();
    });
  });
};

const addDepartment = () => {
    prompt({
      type: 'input',
      message: 'What department are you adding?',
      name: 'name'
    }).then((input) => {
      db.query('INSERT INTO department SET ?', input, (err) => {
        if (err) throw err;
        console.log(`Saved ${input.name} `);
        init();
    });
  });
};

const addRole = () => {
  prompt([{
    type: 'input',
    message: 'What is the name of the role?',
    name: 'title'
  },{
    type: 'input',
    message: 'What is the salary of the role, end salary with .00?',
    name: 'salary'
  },{
    type: 'input',
    message: 'What department is the role in, enter a number?',
    name: 'department_id'
  }
]).then((input) => {
    db.query('INSERT INTO role SET ?', input, (err) => {
      if (err) throw err;
      console.log(`Saved ${input.title},${input.salary},${input.department_id} `);
      init();
  });
});
};

const init = () => {
  prompt({
    type: 'rawlist',
    name: 'action',
    choices: [
      'Show All Employees',
      'Add an Employee',
      'Add Employee Role',
      'Show Roles',
      'Show all departments',
      'Add a department',
      'Exit',
    ],
    message: 'Please select from the list of available options.'
  }).then((answers) => {
    switch(answers.action) {
      case 'Show All Employees': {
        return showAllEmployee();
      }
      case 'Add an Employee': {
        return addEmployee();
      }
      case 'Add Employee Role': {
        return addRole();
      }
      case 'Show Roles': {
        return showAllRole();
      }
      case 'Show all departments': {
        return showAllDepartments();
      }
      case 'Add a department': {
        return addDepartment();
      }
      default: {
        return process.exit();
      }
    }
  });
};

init();