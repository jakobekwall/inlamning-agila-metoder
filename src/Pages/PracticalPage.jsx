import styles from "./PracticalPage.module.css"
import { Link } from "react-router-dom";

export default function PracticalPage() {

    return (
        <main>
            <article className={styles.homeLogo}>
                <Link to={"/"}>
                    <img className={styles.scrumLogo} src="https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png" alt="" />
                </Link>
                <h1>Hur man praktiserar scrum på en arbetsplats</h1>
            </article>

        </main>
    )
}