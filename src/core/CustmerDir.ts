import Customer from "./Customer"

export default interface CustomerDir {
    save(customer: Customer): Promise<Customer>
    delete(customer: Customer): Promise<void>
    allCustomers(): Promise<Customer[]>
}