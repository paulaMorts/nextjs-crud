import Layout from "../components/Layout";
import Table from "../components/Table";
import Button from "../components/Button";
import Form from "../components/Form";
import useCustomers from "../hooks/useCustomers";

export default function Home() {

  const { 
    customer, 
    customers, 
    chosenCustomer, 
    deleteCustomer, 
    newCustomer, 
    saveCustomer,
    tableVisible,
    showTable,
  } = useCustomers()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Register">
        {tableVisible ? (
          <>
          <div className="flex justify-end">
          <Button className="mb-4" color="green" 
          onClick={newCustomer}>Add Customer</Button>
          </div>
          <Table customers={customers} 
            chosenCustomer={chosenCustomer}
            deletedCustomer={deleteCustomer}/>
          </>
        ):(
          <Form 
            customer={customer}
            customerChagend={saveCustomer}
            cancel={showTable}
          />
        )}
      </Layout>
    </div>
  )
}
