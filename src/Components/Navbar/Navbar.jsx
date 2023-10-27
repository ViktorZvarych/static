import reactLogo from '../../assets/react.png'
import reactFacts from '../../assets/ReactFacts.png'
// import styles from './navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src={reactLogo} alt="React logo" />
            <img className={styles.facts} src={reactFacts} alt="react facts" />
            <h2 className={styles.title}>React Course - Project 1</h2>
        </nav>
    )
}
