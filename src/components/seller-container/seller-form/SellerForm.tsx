import React, { useState } from "react"
import CheckboxRadioInput from "../../shared/components/CheckboxRadioInput"
import InputField from "../../shared/components/InputField"
import SelectInput from "../../shared/components/SelectInput"
import { FORM_VALIDATION_MESSAGES } from "../../shared/enums/enum"
import { sellerData } from "../constants/sellerData.const"
import { SellerFormDataType } from "../model/sellerData.model"
import { validateSellerData } from "./sellerFormValidation"
import { options } from "../../user-container/constants/userData.const"

function SellerForm() {
    const [sellerFormData, setSellerFormData] = useState<SellerFormDataType>(sellerData);
    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        // const { name, value } = event.target
        const updatedSellerData = validateSellerData(sellerFormData, event)
        setSellerFormData(updatedSellerData);
    }

    const isFormValid = () => {
        return Object.values(sellerFormData).every(field => {
            if ('error' in field) {
                return field.value !== '' && field.error === '';
            }
            return field.value !== '';
        });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        isFormValid() ? (console.log(sellerFormData), alert(FORM_VALIDATION_MESSAGES.SUCCESS)) : alert(FORM_VALIDATION_MESSAGES.INVALID);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                type="text"
                id="companyName"
                name="companyName"
                value={sellerFormData.companyName.value}
                onChange={(e) => handleChange(e)}
                error={sellerFormData.companyName.error}
            />
            <InputField
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={sellerFormData.contactPerson.value}
                onChange={(e) => handleChange(e)}
                error={sellerFormData.contactPerson.error} />
            <InputField
                type="email"
                id="email"
                name="email"
                value={sellerFormData.email.value}
                onChange={(e) => handleChange(e)}
                error={sellerFormData.email.error} />
            <InputField
                type="number"
                id="contactNumber"
                name="contactNumber"
                value={sellerFormData.contactNumber.value}
                onChange={(e) => handleChange(e)}
                error={sellerFormData.contactNumber.error} />
            <SelectInput
                id="productName"
                name="productName"
                value={sellerFormData.productName.value}
                onChange={(e) => handleChange(e)}
                error={sellerFormData.productName.error}
                optionArray={options}
            />
            <CheckboxRadioInput
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                value="Remember me"
                onChange={(e) => handleChange(e)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SellerForm