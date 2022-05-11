import styles from "./AboutPage.module.css"
import { Link } from "react-router-dom";


export default function AboutPage() {


    return (
        <body>
            <main>
                <article className={styles.homeLogo}>
                    <Link to={"/"}>
                        <img className={styles.scrumLogo} src="https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png" alt="" />
                    </Link>
                    <h1>Vad scrum är och dess bakgrund</h1>
                </article>

                <section>
                    <p></p>
                </section>
            </main>
        </body>

    );

}
