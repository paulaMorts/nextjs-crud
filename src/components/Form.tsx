import { useState } from "react"
import Input from "./Input"
import Customer from "../core/Customer"
import Button from "./Button"

interface FormProps {
    customer: Customer
    customerChagend ?: (customer: Customer) => void
    cancel?: ()=> void
}

export default function Form(props: FormProps) {
    const id = props.customer?.id
    const [name, setName] = useState(props.customer?.name ?? '')
    const [age, setAge] = useState(props.customer?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input 
                    readOnly
                    text="Id" 
                    value={id}
                    className="mb-4"
                />
            ): false}
            <Input 
                text="Name" 
                value={name}
                valueChanged={setName}
                className="mb-4"
            />
            <Input 
                text="Age" 
                type="number" 
                value={age}
                valueChanged={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button color="blue" className="mr-2"
                onClick={() => props.customerChagend?.(new Customer(name, +age, id))}>
                    {id ? 'Edit' : 'Save'}
                </Button>
                <Button onClick={props.cancel} color="gray">Cancel</Button>
            </div>
        </div>
    )
}