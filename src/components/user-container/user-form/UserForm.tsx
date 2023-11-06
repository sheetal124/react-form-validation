import React, { useState } from 'react';
import { getDate } from '../../shared/utility/getDate';
import { userInitialData, options, skills } from '../constants/userData.const';
import { FORM_VALIDATION_MESSAGES } from '../../shared/enums/enum';
import InputField from '../../shared/components/InputField';
import CheckboxRadioInput from '../../shared/components/CheckboxRadioInput';
import SelectInput from '../../shared/components/SelectInput';
import { UserFormDataType } from '../model/userData.model';
import { validateFormData } from './userFormValidation';

function UserForm() {
    const [userFormData, setUserFormData] = useState<UserFormDataType>(userInitialData)

    const todayDate = getDate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const updatedFormData = validateFormData(userFormData, e);
        // Update the form data
        setUserFormData(updatedFormData);
    };

    const isFormValid = () => {
        return Object.values(userFormData).every(field => field.value !== '' && field.error === '');
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        isFormValid() ? (console.log(userFormData), alert(FORM_VALIDATION_MESSAGES.SUCCESS)) : alert(FORM_VALIDATION_MESSAGES.INVALID);
    }

    return (
        <form className='mt-3' onSubmit={handleSubmit}>
            <InputField
                type="text"
                id="textValue"
                name="name"
                value={userFormData.name.value}
                onChange={(e) => handleChange(e)}
                error={userFormData.name.error} />
            <InputField
                type="email"
                id="emailValue"
                name="email"
                value={userFormData.email.value}
                onChange={(e) => handleChange(e)}
                error={userFormData.email.error} />
            <InputField
                type="password"
                id="passwordValue"
                name="password"
                value={userFormData.password.value}
                onChange={(e) => handleChange(e)}
                error={userFormData.password.error} />
            <InputField
                type="number"
                id="numberValue"
                name="contactNumber"
                value={userFormData.contactNumber.value}
                onChange={(e) => handleChange(e)}
                error={userFormData.contactNumber.error} />
            <InputField
                type="date"
                id="date"
                name="date"
                value={userFormData.date.value}
                onChange={(e) => handleChange(e)}
                error={userFormData.date.error}
                minValue={todayDate} />
            <CheckboxRadioInput
                type="checkbox"
                optionArray={skills}
                checkedValue={userFormData.checkboxValue.value}
                error={userFormData.checkboxValue.error}
                onChange={(e) => handleChange(e)}
            />
            <CheckboxRadioInput
                name="radioValue"
                type="radio"
                optionArray={options}
                checkedValue={userFormData.radioValue.value}
                onChange={(e) => handleChange(e)}
            />
            <SelectInput
                id="selectValue"
                name="selectValue"
                onChange={(e) => handleChange(e)}
                error={userFormData.selectValue.error}
                optionArray={options}
            />
            <InputField
                type="file"
                id="file"
                name="file"
                onChange={(e) => handleChange(e)}
                error={userFormData.file.error} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default UserForm