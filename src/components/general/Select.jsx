import './Select.css'

//funtion for creating an selection based on a list of options
function Select({label, options, name, onInputChange}) {
    const optionsJSX = options.map((option) => {
        return(
            <option 
                value={option}
                key={option}
                className="option-item"
            >
                {option}
            </option>
        )
    })
    return (
      <div 
        className="select-outer" 
        onChange={event => onInputChange(event, name)}
        >
        <p>{label}</p>
        <select>
            {optionsJSX}
        </select>
      </div>
    );
  }

export default Select;