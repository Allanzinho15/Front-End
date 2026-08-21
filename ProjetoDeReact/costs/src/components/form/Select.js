import styles from './Select.module.css'

export const Select = ({name, text, options, handLeOnChange, value }) =>{
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select 
            name={name} 
            id={name}
            onChange={handLeOnChange}
            value={value || ""}
            >
                <option value="">Selecione uma Opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}