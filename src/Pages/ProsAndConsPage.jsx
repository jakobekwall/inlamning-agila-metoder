import { Link } from "react-router-dom";
import styles from "./ProsAndConsPage.module.css"

export default function ProsAndConsPage() {

    return (
        <main>
            <article className={styles.homeLogo}>
                <Link to={"/"}>
                    <img className={styles.scrumLogo} src="https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png" alt="" />
                </Link>
                <h1>Pros and cons med scrum</h1>
            </article>



        </main>
    )
}