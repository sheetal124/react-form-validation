type inputProps = {
    type: string,
    id: string,
    name: string,
    value?: string | string[],
    error: string,
    minValue?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
function InputField({ id, name, value, type, minValue, onChange, error }: inputProps) {
    return (
        <div className='mb-3'>
            <label htmlFor={id}>{name}:</label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                min={minValue}
                onChange={onChange}
            />
            <div>{error}</div>
        </div>
    )
}

export default InputField