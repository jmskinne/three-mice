import {getComputers, useComputers} from "./ComputerProvider.js"
import {getEmployees, useEmployees} from "./EmployeeProvider.js"
import {EmployeeComputerHTML} from "./EmployeeComputerHTML.js"
import { getDepartments, useDepartments } from "./DepartmentProvider.js"
import { getLocations, useLocations} from "./LocationProvider.js"

let computers = []
let employees = []
let departments = []
let locations = []

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(getLocations)
        .then(() => {
            employees = useEmployees()
            computers = useComputers()
            departments= useDepartments()
            locations = useLocations()
            
            
            render() //component state 

        })
}

const render = () => {
    contentTarget.innerHTML = employees.map(
        employee => {
            const matched = computers.find(computer => computer.id === employee.computerId)
            const departmentalized = departments.find(department => department.id === employee.departmentId)
            const location = locations.find(loc => loc.id === employee.locationId)
                const html = EmployeeComputerHTML(employee, matched, departmentalized, location)
                
                return html
        }

    ).join("")
    
}

