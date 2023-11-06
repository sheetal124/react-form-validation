import {
    updateDate,
    validateCheckbox,
    validateContactField,
    validateEmailField,
    validateFile,
    validateNameField,
    validatePasswordField,
    validateRadioValue,
    validateSelectField
} from "../../shared/utility/validateData";
import { UserFormDataType } from "../model/userData.model";

export function validateFormData(formData: UserFormDataType, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = event.target;
    const updatedFormData = { ...formData }
    if (type === "checkbox") {
        validateCheckbox(updatedFormData, value, event);
    } else {
        switch (name) {
            case 'file':
                validateFile(updatedFormData, event, name);
                break;
            case 'date':
                updateDate(updatedFormData, value, name);
                break;
            case 'radioValue':
                validateRadioValue(updatedFormData, value, name);
                break;
            case 'name':
                validateNameField(updatedFormData, value, name);
                break;
            case 'email':
                validateEmailField(updatedFormData, value, name);
                break;
            case 'password':
                validatePasswordField(updatedFormData, value, name);
                break;
            case 'selectValue':
                validateSelectField(updatedFormData, value, name);
                break;
            case 'contactNumber':
                validateContactField(updatedFormData, value, name);
                break;
        }
    }
    return updatedFormData;
}