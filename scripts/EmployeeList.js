import {getComputers, useComputers} from "./ComputerProvider.js"
import {getEmployees, useEmployees} from "./EmployeeProvider.js"
import {EmployeeComputerHTML} from "./EmployeeComputerHTML.js"
import { getDepartments, useDepartments } from "./DepartmentProvider.js"

let computers = []
let employees = []
let departments = []

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(() => {
            employees = useEmployees()
            computers = useComputers()
            departments= useDepartments()
            console.log(departments)
            
            render()

        })
}

const render = () => {
    contentTarget.innerHTML = employees.map(
        employee => {
            const matched = computers.find(computer => computer.id === employee.computerId)
            const departmentalized = departments.find(department => department.id === employee.departmentId)
                const html = EmployeeComputerHTML(employee, matched, departmentalized)
                
                return html
        }

    ).join("")
    
}

