const employeeLists = {
    fetchAllFolks: () => {
        return fetch("http://localhost:3000/employees?_expand=department&_expand=computer")
            .then(response => response.json())}}

const domMethod = {
    printToDom: (employees) => {
        employees.forEach(employee => {
            const container = document.querySelector(".employee")
            container.innerHTML += `<div> This is ${employee.assignee}. They work in the ${employee.department.name} department. They work from a ${employee.computer.name}.</div><br>`
        });
    }
}

employeeLists.fetchAllFolks()
.then(employees => {domMethod.printToDom(employees);
});