import {getComputers, useComputers} from "./ComputerProvider.js"
import {getEmployees, useEmployees} from "./EmployeeProvider.js"
import {EmployeeComputerHTML} from "./EmployeeComputerHTML.js"
import { getDepartments, useDepartments } from "./DepartmentProvider.js"
import { getLocations, useLocations} from "./LocationProvider.js"
import { getCustomers, useCustomers} from "./CustomerProvider.js"
import {getEmployeeCustomers, useEmployeeCustomers} from "./EmployeeCustomerProvider.js"

let computers = []
let employees = []
let departments = []
let locations = []
let customers = []
let customerEmployees = []

const contentTarget = document.querySelector(".employees")

export const EmployeeList = () => {
    getEmployees()
        .then(getComputers)
        .then(getDepartments)
        .then(getLocations)
        .then(getCustomers)
        .then(getEmployeeCustomers)
        .then(() => {
            employees = useEmployees()
            computers = useComputers()
            departments= useDepartments()
            locations = useLocations()
            customers = useCustomers()
            customerEmployees = useEmployeeCustomers()
            
            
            render() //component state 

        })
}

const render = () => {
    contentTarget.innerHTML = employees.map(
        employee => {
            const matched = computers.find(computer => computer.id === employee.computerId)
            const departmentalized = departments.find(department => department.id === employee.departmentId)
            const location = locations.find(loc => loc.id === employee.locationId)
            const customerRelationship = customerEmployees.filter(relationship => relationship.employeeId === employee.id)
            
                const matchedEmployeeCustomer = customerRelationship.map(
                    relationship => {
                        return customers.find(customer => relationship.customerId === customer.id)
                })
                    const html = EmployeeComputerHTML(employee, matched, departmentalized, location, matchedEmployeeCustomer)
                
                return html
        }

    ).join("")
    
}

