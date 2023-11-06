import { SellerFormDataType } from "../../seller-container/model/sellerData.model";
import { UserFormDataType } from "../../user-container/model/userData.model";

// type for checkbox and radio button values
export type OptionType = {
    id: number,
    value: string
}

// Define types for form field values
export type FormFieldValues = {
    value: string | string[];
    error: string;
}

export type FormFieldWithoutError = {
    value: string | string[] | boolean;
}

export type FormDataType = UserFormDataType | SellerFormDataType;