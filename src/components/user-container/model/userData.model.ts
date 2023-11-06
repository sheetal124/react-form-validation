import { FormFieldValues } from "../../shared/model/shared.model";

// Define the type for the entire userFormData object
export type UserFormDataType = {
    name: FormFieldValues;
    email: FormFieldValues;
    password: FormFieldValues;
    contactNumber: FormFieldValues;
    date: FormFieldValues;
    checkboxValue: FormFieldValues;
    radioValue: FormFieldValues;
    selectValue: FormFieldValues;
    file: FormFieldValues;
};
