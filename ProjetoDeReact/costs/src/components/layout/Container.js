import styles from './Container.module.css'

export const Container = ({customClass, children}) =>{
    return(
        <div className={`${styles.container} ${styles[customClass]}`}> {children}</div>
    )
}
