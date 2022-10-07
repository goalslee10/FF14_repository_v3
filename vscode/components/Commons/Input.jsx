import React from 'react'

const Input = (props) => {
  return (
    <div className={props.divClassName}>
        <label htmlFor={props.htmlFor} className={props.labelClassName}>{props.labelText}</label>
        <input
        
            type={props.type}
            name={props.name}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            className={props.inputClassName}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
        />
        <p className='text-xs text-end text-deeppink'>{props.validationMessage}</p>
    </div>
  )
}

export default Input