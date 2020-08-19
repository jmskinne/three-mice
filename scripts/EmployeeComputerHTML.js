export const EmployeeComputerHTML = (person,computer, department, location) => {
    return `
        <section class="employeeStuff">
            <div>Employee Name: ${person.firstName} ${person.lastName}</div>
            <div>Employee Age: ${person.age}</div>
            <div>Computer : ${computer.model}, ${computer.year}</div>
            <div>Works in the : ${department.name} Department </div>
            <div>Works at the : ${location.cityName} Office </div>
        </section>
    `
}