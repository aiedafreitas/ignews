import styles from './styles.module.scss'

export function Header (){
    return(
        <header className={styles.HeaderContainer}>
            <div className={styles.HeaderContent}>
                <img src="/images/logo.svg" alt="histórias pra brincar"/>
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Estórias</a>

                </nav>
            </div>
        </header>

    );

}