// class Company {

//     constructor() {
//         this.departments = {};
//         this.aveSalaries = {};
//     }

//     addEmployee(username, salary, position, department) {

//         if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
//             throw new Error('Invalid input!');
//         }

//         let user = {
//             username,
//             salary,
//             position,
//         };

//         if (!this.departments.hasOwnProperty(department)) {

//             this.departments[department] = [];

//             this.aveSalaries[department] = {
//                 totalEmployees: 0,
//                 totalSalaries: 0,
//                 averageSalary: 0,
//             };
//         }

//         this.departments[department].push(user);
//         this.aveSalaries[department].totalEmployees += 1;
//         this.aveSalaries[department].totalSalaries += salary;

//         this.aveSalaries[department].averageSalary =
//             this.aveSalaries[department].totalSalaries /
//             this.aveSalaries[department].totalEmployees;

//         return `New employee is hired. Name: ${username}. Position: ${position}`;
//     }

//     bestDepartment() {

//         let result = '';
//         let bestDepartment = Object
//             .entries(this.aveSalaries)
//             .sort((a, b) => b[1].averageSalary - a[1].averageSalary)
//             .shift();

//         result += `Best Department is: ${bestDepartment[0]}`;
//         result += `\nAverage salary: ${bestDepartment[1].averageSalary.toFixed(2)}`;

//         this.departments[bestDepartment[0]]
//             .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

//         this.departments[bestDepartment[0]].forEach(user => {
//             result += `\n${user.username} ${user.salary} ${user.position}`;
//         });

//         return result;
//     }

// }


class Company {

    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        if (!this.isValid(name) ||
            !this.isValid(salary) ||
            !this.isValid(position) ||
            !this.isValid(department) ||
            Number(salary) < 0) {
            throw new Error('Invalid input!');
        }

        let newEployee = {
            name,
            salary,
            position
        };

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push(newEployee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDep = '';
        let maxSalary = 0;

        for (const [key, value] of Object.entries(this.departments)) {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary;
            })
            salary = salary / value.length;
            if (salary > maxSalary) {
                bestDep = key;
                maxSalary = salary;
            }
        };
        if (bestDep) {
            let result = `Best Department is: ${bestDep}\nAverage salary: ${maxSalary.toFixed(2)}\n`;

            Object.values(this.departments[bestDep]).sort((a, b) => b.salary - a.salary ||
                a.name.localeCompare(b.name)).
            forEach(e => {
                let current = `${e.name} ${e.salary} ${e.position}\n`;
                result += current;
            })
            return result.trim();
        }
    }

    isValid(property) {
        if (property !== null && property !== '' && property !== undefined) {
            return true;
        }
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
console.log(c.bestDepartment());