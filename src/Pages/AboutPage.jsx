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

                <section className={styles.scrumText}>

                    <p>
                        Just ordet "scrum" är en term från sporten rugby, och är den täta axel mot axel-formation teamet använder för att föra bollen framåt när den sätts i spel. De japanska managementforskarna Hirotaka Takeuchi och Ikujiro Nonaka myntade uttrycket och tyckte rugby var en bra liknelse eftersom ett tvärfunktionellt team samarbetar för att göra klart produkten på samma sätt som ett rugbylag spelar tillsammans för att föra bollen uppför planen. Scrum skapades ursprungligen av Jeff Sutherland och Ken Schwaber.
                    </p>

                    <p>
                        Kort sagt är scrum en metodik för systemutveckling. Scrum uppfanns under 1990-talet och är idag en etablerad metodik för systemutveckling som används över hela världen.En fördel med scrum är fokuseringen på affärsnytta och möjligheten att förändra projektet på ett strukturerat sätt. I scrum finns det inte en klassisk kravspecifikation utan man har istället en backlog. En backlog är kort sagt en prioriterad och levande lista med önskemål. Detta innebär att i ett projekt kan önskemål som är aktuella vid projektets start falla bort om de prioriteras ned under projektets gång och nya önskemål kan också läggas till.
                    </p>

                </section>
            </main >
        </body >

    );

}
