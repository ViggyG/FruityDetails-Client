import './ToggleButton.css'

//class for inputing text
const ToggleButton = ({label, name, value, onInputChange}) => {
    //render the text input field
    return (
        <div className='toggle-button-outer'>
            <p>{label}</p>
            <button
                type='button'
                className='toggle-button'
                value={value}
                onClick={event => onInputChange(event, name)}
            >
            {(value === 'asc')? 'v' : '^'}
            </button>
        </div>
    )
}

export default ToggleButton;