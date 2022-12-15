# Kérdések és Válaszok

1. Milyen szoftverek szokták a webes tartalmakat gyorsítótárazni?
  - Pont: 2
  - Válasz: Webböngészők, hogy elkerüljék a webes tartalmak sokszori ujra letöltést, abban az esetben ha azok nem változtak
  
2. Adjon meg legalább három relatív CSS mértékegységet
  - Pont: 3
  - Válasz: em, rem, ex, ch, vw, vh, vmin, vmax, %
  - Abszolút: cm, mm, in, px, pt, pc
  
3. Mi az a módszer, amivel valaminek a színét be lehet állítani CSS-ben? Adjon ezekre egy-egy mintát!
  - Pont: 3
  - Válasz: rgb | rgba method, color name, color hex code, hsl method
  
4. Mi a SonarQube, mire használható?
  - Pont: 2
  - Válasz: A SonarQube (korábban Sonar) egy nyílt forráskódú platform, amelyet a SonarSource fejlesztett ki a kódminőség folyamatos ellenőrzésére, hogy a kód statikus elemzésével automatikus felülvizsgálatot végezzen a hibák és kódszagok felderítésére 29 programozási nyelven.
  
5. Mi az a reszponzivitás, reszponzív webdesign?
  - Pont: 3
  - Válasz: A reszponzív webdesign a HTML és a CSS használatával automatikusan átméretezi, elrejti, kicsinyíti vagy nagyítja a weboldalt, hogy az minden eszközön (asztali számítógépek, táblagépek és telefonok) jól nézzen ki. A reszponzív webdesign olyan weboldalak készítéséről szól, amelyek minden eszközön jól néznek ki! A reszponzív webdesign automatikusan alkalmazkodik a különböző képernyőméretekhez és nézetablakokhoz.
  gyors reakcióképesség
  
6. Sorolja fel a Memex legalább három tulajdonságát, jellemzőjét
  - Pont: 3
  - Válasz: Üveg borítás, alulról vetíti a képet vagy szöveget. Mechanikus keresés és input bevitel. Korlátlan kapacitás. Hiperszöveg, hiperhivatkozás. Az információk összekapcsolhatók.
  
7. Mi az az npm?
  - Pont: 1
  - Válasz: Az npm a világ legnagyobb szoftver-nyilvántartója. A nyilvántartás több mint 800 000 kódcsomagot tartalmaz. A nyílt forráskódú fejlesztők az npm-et használják a szoftverek megosztására. Számos szervezet használja az npm-et a magánfejlesztések kezelésére is.

8. Milyen design pattern-t követ a Microsoft ASP.NET
  - Pont: 1
  - Válasz:
  
9. Adjon meg legalább hármat a HTML5 újdonságai közül!
  - Pont: 3
  - Válasz: Dokumentum típusának meghatározásának változása. Videó, hanglejátszás. Vektorgrafika, többszálúsítás. Helyi adattárolás. Bittérképes grafika.
  
10. Nevezzen meg elgalább két okot, amiért érdemes jQuery is használni egy weboldalon.
  - Pont: 2
  - Válasz: Gyorsabb fejlesztés. Könnyebb hibakeresés. Jobb böngésző támogatás.
  
11. A TCP/IP protokollstruktúrának melyik rétegében található a HTTP protokoll?
  - Pont: 2
  - Válasz: Alkalmazás réteg.
  
12. Mik azok a sütik, és mire használhatóak?
  - Pont: 3
  - Válasz: Korlátozott idejű adatmegőrzés. A weboldallal egyszerre jön le. Biztonságos átvitel. Legközelebbi letöltésnél mellékeli a tartomány sütijeit.
  
13. Miért előnyösebb a W3C eseménykezelési módszerét alkalmazni a "klasszikus" eseménykezelés helyett?
  - Pont: 2
  - Válasz: Az eseménykezelő hozzárendelés JS kódból történik. Több eseménykezelő is hozzárendelhető. Rugalmas, logikus, viszonylag egyszerű.
  
14. Hogyan lehet megakadályozni, hogy a böngésző végrehajtsa egy eseményhez rendelt alapértelmezett tevékenységeit? Minden módszert írjon le, amit csak ismer!
  - Pont: 3
  - Válasz: e.preventDefault() | e.returValue = false. e.stopPropogation() | e.cancelBubble = true. addEventListener utolsó paramétere.
  
15. Mire a jó HTTP feltételes GET metódusa
  - Pont: 3
  - Válasz: Weboldal olvasása

16. Az ex mértékegység pontosan mekkora hosszt jelent a CSS-ben?
  - Pont: 2
  - Válasz: A CSS ex egység a nevét a tipográfiában használt x-height, azaz "az x betű magassága a betűtípusban" kifejezésről kapta. Sok betűtípusban a kisbetűs x karakter általában a legnagyobb karakter magasságának körülbelül a fele. A CSS-ben az 1ex a betűtípus x-magassága, vagyis az 1em fele.

17. Nevezen meg három lényeges különbséget a HTTP 1 és a HTTP 2 között?
  - Pont: 3
  - Válasz: 
  HTTP1: Ithe usest működik a szöveges formátumban., Van feje a sor blokkolás, amely blokkolja az összes kérést mögötte, amíg nem kapja meg az összes erőforrást., Ez tömöríti az adatokat magától.
  HTTP2: A bináris protokollon működik., Lehetővé teszi a multiplexelést, így egy TCP-kapcsolat szükséges több kéréshez., HPACK-et használ az adattömörítéshez.

18. Mi a kapcsolat az SGML és a HTML között, különös tekintettel a HTML5-re? 
  - Pont: 3
  - Válasz: 

19. A CSS képpont (px) mértékegysége valóban, mindig fizikai képpontokban méri a távolságot? Ha nem, mondjon példát rá, hogy milyen esetben és miért nem!
  - Pont: 2
  - Válasz: 1 pixel = 1 fizikai képpont, viszont nagy felbontású eszközön, aminek a felbontása nagyobb mint 96dpi, ott ez a szám nagyobb

20. Adjon meg három módszert, amivel JavaScript programban eseménykezelő függvényt lehet társítani egy eseményhez! Mik ezek előnyei-hátrányai
  - Pont: 3
  - Válasz: - Klasszikus:
                Elönyök: Egyszerű, könnyen használható, minden böngésző támogatja
                Hátrányok: Csak egy eseményekezelő hozzáadása lehetsége (uj felül irja az elözőt)
            - W3C:
                Elönyök: Több eseménykezelő hozzáadása lehetséges, rugalmas, logikus
                Hátrányok: Régebbi böngészők nem támogatják
            - Soron belüli:
                Elönyök: Könnyen használható, gyors (azonnal a HTML irása közben)
                Hátrányok: A JS kód szétszorva helyezkedik el a kódban és a fokozatos fejlődés elve  nem valósítható meg

21. Mi az a három módszer, amivel valaminek a színét be lehet állítani CSS-ben? Adjon ezekre egy-egy mintát?
  - Pont: 3
  - Válasz: - Hexadecimális kód: #FF124B (RGB összetevők)
            - Kulcs szavakkal: red, black, green, white lightyellow
            - Függvényekkel: rgb(120, 255, 190), rgba(120, 255, 190, 0.7), hsl(270, 70%, 40%), hsla(270, 70%, 40%, 0.4)

21. Mi az a három módszer, amivel valaminek a színét be lehet állítani CSS-ben? Adjon ezekre egy-egy mintát?
  - Pont: 3
  - Válasz:            
# Notes
