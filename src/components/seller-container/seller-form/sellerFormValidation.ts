import {
    validateNameField,
    validateEmailField,
    validateContactField,
    validateSelectField
} from "../../shared/utility/validateData";
import { SellerFormDataType } from "../model/sellerData.model";

export function validateSellerData(formData: SellerFormDataType, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, checked } = event.target;
    const updatedSellerData = { ...formData }
    switch (name) {
        case 'companyName':
            validateNameField(formData, value, name);
            break;
        case 'contactPerson':
            validateNameField(formData, value, name);
            break;
        case 'email':
            validateEmailField(formData, value, name);
            break;
        case 'contactNumber':
            validateContactField(formData, value, name);
            break;
        case 'productName':
            validateSelectField(formData, value, name);
            break;
        case 'rememberMe':
            updatedSellerData.rememberMe.value = checked;
            break;
    }
    console.log(formData);

    return updatedSellerData;

}