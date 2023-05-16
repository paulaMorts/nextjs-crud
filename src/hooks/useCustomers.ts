import { useEffect, useState } from "react"
import CustomerDir from "../core/CustmerDir"
import CustomerCollection from "../backend/db/CustomerCollection"
import Customer from "../core/Customer"
import useTableOrForm from "./useTableOrForm"

export default function useCustomers() {
    
  const repo: CustomerDir = new CustomerCollection()

  const { formVisible, tableVisible, showForm, showTable } = useTableOrForm()

  const [customer, setCustomer] = useState<Customer>(Customer.empty())
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(AllCustomers, [])

  function AllCustomers() {
    repo.allCustomers().then(customers => {
      setCustomers(customers)
      showTable()
    })
  }

  function chosenCustomer(customer: Customer) {
    setCustomer(customer)
    showForm()
  }

  async function deleteCustomer(customer: Customer) {
    await repo.delete(customer)
    AllCustomers()
  }

  async function saveCustomer(customer: Customer) {
    await repo.save(customer)
    AllCustomers()
  }

  function newCustomer() {
    setCustomer(Customer.empty())
    showForm()
  }

  return {
    customer,
    customers,
    newCustomer,
    saveCustomer,
    chosenCustomer,
    deleteCustomer,
    tableVisible,
    showTable,
  }

}