
import {getEmployees, useEmployees} from "./EmployeeProvider.js"
import {CustomerHTMLCon} from "./CustomerHTML.js"
import { getDepartments, useDepartments } from "./DepartmentProvider.js"
import { getLocations, useLocations} from "./LocationProvider.js"
import { getCustomers, useCustomers} from "./CustomerProvider.js"
import {getEmployeeCustomers, useEmployeeCustomers} from "./EmployeeCustomerProvider.js"

let departments = []
let employees = []
let locations = []
let customers = []
let customerEmployees = []

const contentTarget = document.querySelector(".customers")

export const CustomerList = () => {
    getCustomers()
        
        .then(getDepartments)
        .then(getLocations)
        .then(getEmployees)
        .then(getEmployeeCustomers)
        .then(() => {
            customers = useCustomers()
            employees = useEmployees()
            departments= useDepartments()
            locations = useLocations()
            customerEmployees = useEmployeeCustomers()
            
            
            render() //component state 

        })
}

// const render = () => {
//     contentTarget.innerHTML = employees.map(
//         employee => {
//             const matched = computers.find(computer => computer.id === employee.computerId)
//             const departmentalized = departments.find(department => department.id === employee.departmentId)
//             const location = locations.find(loc => loc.id === employee.locationId)
//             const customerRelationship = customerEmployees.filter(relationship => relationship.employeeId === employee.id)
            
//                 const matchedEmployeeCustomer = customerRelationship.map(
//                     relationship => {
//                         return customers.find(customer => relationship.customerId === customer.id)})
//                     const html = CustomerHTMLCon(employee, matched, location, matchedEmployeeCustomer)
                
//                 return html
//         }

//     ).join("")
    
// }

const render = () => {
    contentTarget.innerHTML = customers.map(
        customer => {
            const employeeRelationship = customerEmployees.filter(relationship => relationship.customerId === customer.id)
                const matchedCustomerEmployee = employeeRelationship.map(
                    relationship => {
                        return employees.find(employee => relationship.employeeId === employee.id)})
                const html = CustomerHTMLCon(customer, matchedCustomerEmployee)

                return html
        }
    ).join("")
}