import { OptionType } from "../model/shared.model";

type selectProps = {
    id: string,
    name: string,
    value?: string | string[],
    error: string,
    optionArray: OptionType[]
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
function SelectInput({ id, name, value, onChange, error, optionArray }: selectProps) {
    return (
        <div className='mb-3'>
            <label htmlFor="selectValue">Select:</label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            >
                <option>-- Select an option --</option>
                {optionArray.map((option) => (
                    <option key={option.id}>{option.value}</option>
                ))}
            </select>
            <div>{error}</div>
        </div>
    )
}

export default SelectInput