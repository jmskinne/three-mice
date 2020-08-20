export const CustomerHTMLCon = (customer, employee) => {
    return `
        <section class="customerStuff">
            <div>Customer Name: ${customer.name}</div>
            <div> Employees assigned to customer :
                <ul>
                    ${
                        employee.map(employees => `<li>${employees.firstName} ${employees.lastName}</li>`).join("")
                    }
                </ul>
            </div>
        </section>
    `
}