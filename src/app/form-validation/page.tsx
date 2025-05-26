"use client"

import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { useState } from "react"

interface FormDataObject {
    name : string,
    email: string,
    age: number,
}
const FormValidation = () => {
    const [formData, setFormData] = useState<FormDataObject>({
        name: "",
        email: "",
        age: 0
    });

    const [errorAge, setErrorAge] = useState<string>("");
    const [errorEmail, setErrorEmail] = useState<string>("");
    const [errorName, setErrorName] = useState<string>("");
    const [initialStage, setInitialStage] = useState<boolean>(true);


    const handleOnChange = (e, field) => {
        const value = e.target.value;
        switch (field) {
            case "name":
                setFormData(prev => ({...prev, name: value}))                
                break;
            case "email":
                setFormData(prev => ({...prev, email: value}))
                break;
            case "age":
                setFormData(prev => ({...prev, age: value}))
                break;
        }
        setInitialStage(false)
    }

    const handleOnSubmit = () => {
        if ((formData.name).length < 3) {
            setErrorName("Name should be minimum 3 characters")
        } else {
            setErrorName("")
        }
        if (!(formData.email).includes("@") && !(formData.email).includes(".com")) {
            setErrorEmail("Email must contain @ and .com ");
        } else {
            setErrorEmail("");
        }
        if (!parseInt(formData.age)) {
            setErrorAge("Age must be integer");
        } else {
            setErrorAge("");
        }
    }

  return (
  <div className="mt-20">
        <h2>FormValidation</h2>
        <div className="flex flex-col gap-15 align-middle justify-between">
            <div className="bg-amber-50">
            <Label className={"w-[100%]"}>Name</Label>
            <Input
            className={""}
            required={true}
            type={"text"}
            placeholder="Enter Name"
            onChange={(e) => handleOnChange(e, "name")}

            />
            {errorName && <div className="text-red-600">{errorName}</div>}
            </div>

            <div className="bg-amber-50">
            <Label className={"w-[100%]"}>Email</Label>
            <Input
            className={""}
            required={true}
            type={"text"}
            placeholder="Enter Name"
            onChange={(e) => handleOnChange(e, "email")}

            />

            {errorEmail && <div className="text-red-600">{errorEmail}</div>}
            </div>

            <div className="bg-amber-50">
            <Label className={"w-[100%]"}>Age</Label>
            <Input
            className={""}
            required={true}
            type={"text"}
            placeholder="Enter Name"
            onChange={(e) => handleOnChange(e, "age")}

            />
            {errorAge && <div className="text-red-600">{errorAge}</div>}
            </div>

          <div>
            <button className="bg-amber-800 w-[100%] h-10 cursor-pointer" onClick={handleOnSubmit}> Submit</button>  
          </div>  
        </div>
        <div>
            {!initialStage && !errorAge && !errorEmail && !errorName  && <h3 className="h-10 mt-10 bg-red-600 w-[100%]">Form Submitted Successfully</h3>}
        </div>
  </div>
  )
}

export default FormValidation