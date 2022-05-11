import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css"


export default function LandingPage() {

    return (
        <body>


            <main>

                <article className={styles.homeLogo}>
                    <Link to={"/"}>
                        <img className={styles.scrumLogo} src="https://www.scrum.org/themes/custom/scrumorg/assets/images/logo-250.png" alt="" />
                    </Link>
                    <h1>Guidline för scrum</h1>
                </article>

                <section>
                    <article className={styles.BtnArticle}>
                        <Link to={"/AboutPage"}>
                            <button>Vad är scrum?</button>
                        </Link>
                        <Link to={"/PracticalPage"}>
                            <button>Hur praktiseras scrum?</button>
                        </Link>
                        <Link to={"ProsAndConsPage"}>
                            <button>Pros and cons med scrum</button>
                        </Link>
                    </article>

                    <article>
                        <img src="https://media.istockphoto.com/photos/agile-software-development-with-developer-using-kanban-board-on-picture-id1346698461?b=1&k=20&m=1346698461&s=170667a&w=0&h=JeZckqMep5VDuJ4PHsF2U9A7Nm9ooUiAvgXXoXW_HFk=" alt="" />
                    </article>
                </section>
            </main>

            <footer>
                <h1>Länkar</h1>
                <p>asdfghjkl</p>
                <p>asdfghjklö</p>
                <p>asdfghjklö</p>
            </footer>

        </body>

    );

}

