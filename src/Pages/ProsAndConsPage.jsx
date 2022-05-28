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

            <article>
                <h3>Pros</h3>
                <p>1. Konstant återkoppling från kunden eller intressenten hjälper teamet att förstå behov och justera därefter.</p>
                <p>2. Delat ansvar hjälper teamen att få mer gjort på kortare tid.</p>
                <p>3. Gör att alla är ansvariga, vilket leder till hög motivation.</p>
                <p>4. Problem kan hanteras och åtgärdas under dagliga möten.</p>
                <p>5. Snabb utveckling betyder att projekt kan lanseras snabbt.</p>

                <h3>Cons</h3>
                <p>1. Kräver ett team som är kompetent, erfaret och engagerat.</p>
                <p>2. Snäv tidsplan betyder att förseningar är troliga om någon blir sjuk eller lämnar projektet.</p>
                <p>3. Konstanta ändringar kan leda till att större omfattning och förseningar. Det kan vara svårt att planera in dagliga möten.</p>
                <p>4. Teammedlemmar som har flera projekt kan försena leverablerna när deras prioriteringar ändras.</p>

            </article>
        </main>
    )
}