// import { useState } from "react"
// import { FormDataType } from "../model/shared.model";

// export const useFormValidation = (initialData, validateData) => {
//     const [formData, setFormData] = useState(initialData);

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const updatedFormData = validateData(formData, e);
//         setFormData(updatedFormData);
//     };

//     const isFormValid = () => {
//         return Object.values(formData).every(field => {
//             if ('error' in field) {
//                 return field.value !== '' && field.error === '';
//             }
//             return field.value !== '';
//         });
//     };

//     return {
//         formData,
//         handleChange,
//         isFormValid
//     };
// }