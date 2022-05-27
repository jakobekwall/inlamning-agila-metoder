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

            <article className={styles.scrumRoles}>
                <h2>De 3 rollerna</h2>
                <p>Det finns 3 roller i scrum som tillsammans tar fram produkten som kunden efterfrågar</p>
                <p>
                    Produkt owner: Produktägaren utarbetar och prioriterar ytterligare krav och förändringar främst utifrån affärsintressen. I ett webbprojekt kommer vanligtvis produktägaren att vara projektledare för kunden.
                </p>

                <p>
                    Scrum master: Scrum master coachar teamet och ser till att allt går bra. Scrum mastern koordinerar mellan spelare och ser till att det inte finns några hinder för teamet.
                </p>

                <p>
                    Team: Teamet är självorganiserande och bestämmer gemensamt vem som gör vad och hur man löser olika uppgifter.
                </p>
            </article>

            <article className={styles.scrumPractical}>
                <h2>Scrum i process </h2>

                <h3>Backlog</h3>
                <p>
                    En backlog är en förändlig lista med alla önskemål om produkten, det menas att saker på listan kan både tas bort och läggas till. Detta märker man under projektets gång. En backlog skrivs i form av flera issues som är själva uppgiften och i varje issue skriver man en user story som beskriver uppgiften mer utförligt. Produktägaren prioriterar och ansvarar för backlogen.
                </p>

                <h3>Sprint planning</h3>
                <p>
                    Scrum master, produktägaren och teamet går igenom de önskemål som finns. Därefter bryter teamet ned kraven och tidsestimerar. Genom att jämföra de tidsestimerade och prioriterade önskemålen med tillgänglig tid tas en sprint backlog fram som teamet åtar sig att genomföra.
                </p>

                <h3>Sprint backlog</h3>
                <p>
                    Det är den delen av produktbacklogen som teamet åtar sig att implementera under en sprint.
                </p>

                <h3>Daily scrum</h3>
                <p>
                    Daily scrum är ett kort statusmöte för teamet. Scrum master går igenom alla personer i teamet som besvarar "Vad har jag gjort sedan igår?", "Vad ska jag göra idag?", "Finns det något som hindrar mig?".
                </p>

                <h3>Sprint</h3>
                <p>
                    I scrum delas arbetet in i sprintar. En sprint kan vara allt mellan några dagar upp till en månad lång. En sprint inleds med en planeringsmöte (Sprint planning) och avslutas med en demonstration och genomgång av det som utvecklats under sprinten (Sprint review). Under sprinten sker dagliga Daily scrums och sist i en sprint görs en återblick (Sprint retrospective).
                </p>

                <h3>Sprint review</h3>
                <p>
                    Det är en genomgång av status på det arbete som genomförts i sprinten samt demonstration av funktionaliteten för produktägare, kunder och andra inbjudna intressenter. Syftet är att alla intressenter ska få bästa möjliga förståelse för dagsläget.
                </p>

                <h3>Sprint retrospective</h3>
                <p>
                    Team, scrum master och produktägare går tillsammans igenom erfarenheter från sprinten och identifierar möjliga förbättringar i arbetssättet. Några punkter väljs ut och åtgärdas i kommande sprint.
                </p>

                <h3>Se processen nedan på bilden</h3>
                <img src="https://storage.googleapis.com/mesmerizing-matrix-1380/2020/02/e6e4c180-image.png" alt="" />
            </article>




        </main>
    )
}