import { RegexPatterns } from "../constants/regex";
import { errorMessages } from "../constants/shared.constants";

export function validateCheckbox(formData: any, name: string, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const isChecked = (event.target as HTMLInputElement).checked;
    const updatedFormData = { ...formData };
    const updatedCheckboxValues = [...formData.checkboxValue.value];
    if (isChecked) {
        updatedCheckboxValues.push(name);
    } else {
        const index = updatedCheckboxValues.indexOf(name);
        if (index !== -1) {
            updatedCheckboxValues.splice(index, 1);
        }
    }

    updatedFormData.checkboxValue.value = updatedCheckboxValues;
    updatedFormData.checkboxValue.error = updatedCheckboxValues.length <= 2 ? errorMessages.skillsError : errorMessages.noError;
    console.log(updatedFormData.checkboxValue.value);

}

export function validateRadioValue(formData: any, value: string, name: string) {
    const updatedFormData = { ...formData };
    updatedFormData[name].value = value;
    updatedFormData[name].error = '';

}

export function validateFile(formData: any, event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: string) {
    const updatedFormData = { ...formData };
    const selectedFile = (event.target as HTMLInputElement).files[0];
    updatedFormData[name].value = selectedFile ? selectedFile.name : '';
    updatedFormData[name].error = selectedFile && selectedFile.name.match(RegexPatterns.fileType)
        ? errorMessages.noError : errorMessages.fileFormatError;
}

export function updateDate(formData: any, value: string, name: string) {
    const updatedFormData = { ...formData };

    updatedFormData[name].value = value;
    updatedFormData[name].error = '';
}

export function validateNameField(formData: any, value: string, name: string) {
    const updatedFormData = { ...formData };
    updatedFormData[name].error = value.trim() === '' ? errorMessages[`${name}Error`] : errorMessages.noError;
    updatedFormData[name].value = value;
}

export function validatePasswordField(formData: any, value: string, name: string) {
    const updatedFormData = { ...formData };
    updatedFormData[name].error =
        value.trim() === ''
            ? errorMessages.passwordError
            : !value.match(RegexPatterns.password)
                ? errorMessages.passwordPaternError
                : errorMessages.noError;
    updatedFormData[name].value = value;
}

export function validateEmailField(formData: any, value: string, name: string) {
    const updatedFormData = { ...formData }
    updatedFormData[name].error =
        value.trim() === ''
            ? errorMessages.emailError
            : !value.match(RegexPatterns.email)
                ? errorMessages.emailFormatError
                : errorMessages.noError;
    updatedFormData[name].value = value;
}

export function validateSelectField(formData: any, value: string, name: string) {
    const updatedFormData = { ...formData }
    console.log(name);

    updatedFormData[name].error = value.trim() === '' ? errorMessages.selectError : errorMessages.noError;
    updatedFormData[name].value = value;
}

export function validateContactField(formData: any, value: string, name: string) {
    const updatedFormData = { ...formData }
    updatedFormData[name].error =
        value.trim() === ''
            ? errorMessages.contactNumberError
            : !value.match(RegexPatterns.contactNumber)
                ? errorMessages.contactNumberPaternError
                : errorMessages.noError;
    updatedFormData[name].value = value;
}