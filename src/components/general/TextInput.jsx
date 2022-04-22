import './TextInput.css'

//class for inputing text
const TextInput = ({label, name, value, onInputChange}) => {
    //render the text input field
    return (
        <div className='text-input-outer'>
            <p>{label}</p>
            <input
                className='text-input'
                type='text'
                value={value}
                onChange={event => onInputChange(event, name)}
            />
        </div>
    )
}

export default TextInput;