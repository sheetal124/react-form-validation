import { OptionType } from "../../shared/model/shared.model";
import { UserFormDataType } from "../model/userData.model";

// Define the userFormData using the specified type
export const userInitialData: UserFormDataType = {
    name: {
        value: '',
        error: ''
    },
    email: {
        value: '',
        error: ''
    },
    password: {
        value: '',
        error: ''
    },
    contactNumber: {
        value: '',
        error: ''
    },
    date: {
        value: '',
        error: ''
    },
    checkboxValue: {
        value: '',
        error: ''
    },
    radioValue: {
        value: 'Option 1',
        error: ''
    },
    selectValue: {
        value: '',
        error: ''
    },
    file: {
        value: '',
        error: ''
    }
};

export const skills: OptionType[] = [
    { id: 1, value: "html" },
    { id: 2, value: "css" },
    { id: 3, value: "angular" },
    { id: 4, value: "react" },
    { id: 5, value: "Scss" },
    { id: 6, value: "Bootstrap" },
    { id: 7, value: "tailwind" },
    { id: 8, value: "vue" }
];

export const options: OptionType[] = [
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
    { id: 3, value: 'Option 3' }
];
