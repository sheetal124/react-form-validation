import { FormFieldValues, FormFieldWithoutError } from "../../shared/model/shared.model"

export type SellerFormDataType = {
    companyName: FormFieldValues,
    contactPerson: FormFieldValues,
    email: FormFieldValues,
    contactNumber: FormFieldValues,
    productName: FormFieldValues,
    rememberMe: FormFieldWithoutError
}