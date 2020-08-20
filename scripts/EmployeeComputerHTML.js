export const EmployeeComputerHTML = (person,computer, department, location, customer) => {
    return `
        <section class="employeeStuff">
            <div>Employee Name: ${person.firstName} ${person.lastName}</div>
            <div>Employee Age: ${person.age}</div>
            <div>Computer : ${computer.model}, ${computer.year}</div>
            <div>Works in the : ${department.name} Department </div>
            <div>Works at the : ${location.cityName} Office </div>
            <div> Worked for the following customers :
                <ul>
                    ${
                        customer.map(customers => `<li>${customers.name}</li>`).join("")
                    }
                </ul>
            </div>
        </section>
    `
}