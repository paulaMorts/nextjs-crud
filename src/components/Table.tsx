import Customer from "../core/Customer"
import { DeleteIcon, EditIcon } from "./Icons"

interface TableProps {
    customers: Customer[] 
    chosenCustomer?: (customer: Customer) => void
    deletedCustomer?: (customer: Customer) => void
}

export default function Table (props: TableProps) {

    const showActions = props.deletedCustomer || props.chosenCustomer

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">ID</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                { showActions ? <th className="p-4">Action</th> : false }
            </tr>
        )
    }

    function renderData() {
        return props.customers?.map((customer, i) => {
            return (
                <tr key= { customer.id }
                className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{ customer.id }</td>
                    <td className="text-left p-4">{ customer.name }</td>
                    <td className="text-left p-4">{ customer.age }</td>
                    { showActions ? renderActions(customer) : false}
                </tr>
            )
        })
    }

    function renderActions(customer) {
        return(
            <td className="flex justify-center">
                { props.chosenCustomer ? (
                    <button onClick={()=> props.chosenCustomer?.(customer)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                        `}>
                            { EditIcon }
                    </button>
                ): false}
                
                { props.deletedCustomer ? (
                    <button onClick={()=> props.deletedCustomer?.(customer)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        { DeleteIcon }
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                { renderHeader() }
            </thead>
            <tbody>
                { renderData() }
            </tbody>
            
        </table>
    )
}