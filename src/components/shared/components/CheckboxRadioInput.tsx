import { Fragment } from "react";
import { OptionType } from "../model/shared.model";

type CheckboxRadioFieldProps = {
    name?: string;
    id?: string;
    value?: string
    optionArray?: OptionType[]
    type: 'checkbox' | 'radio';
    checkedValue?: string | string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
};
function CheckboxRadioInput({ name, type, checkedValue, onChange, optionArray, error, id, value }: CheckboxRadioFieldProps) {

    return (
        <>
            <div className='mb-3'>
                {optionArray && optionArray.length > 0 ? (
                    optionArray.map((option) => (
                        <Fragment key={option.id}>
                            <input
                                type={type}
                                id={option.value}
                                name={name}
                                value={option.value}
                                checked={Array.isArray(checkedValue) ? checkedValue.includes(option.value) : checkedValue === option.value}
                                onChange={onChange}
                            />
                            <label htmlFor={option.value}>{option.value}</label>
                        </Fragment>)
                    )) : (
                    <>
                        <input
                            type={type}
                            id={id}
                            name={name}
                            value={value}
                            // checked={checked}
                            onChange={onChange}
                        />
                        <label htmlFor={id}>{value}</label>
                    </>

                )}
                <div>{error}</div>
            </div>
        </>
    )
}

export default CheckboxRadioInput