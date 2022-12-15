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
  - Válasz: A SonarQube egy nyílt forráskódú eszköz, amely segítségével elemezhetjük és javíthatjuk a forráskód minőségét. A SonarQube-ot általában a szoftverfejlesztés folyamatában használják, hogy biztosítsák a forráskód minőségét. A SonarQube segítségével lehetőségünk van a forráskód minőségét mérni és javítani többek között a kódduplikáció, a kommentek hiánya, a hibakezelés hiánya, a kódolási szabványok betartása, stb. szempontjából. A SonarQube segítségével tehát biztosíthatjuk, hogy a forráskód minősége megfelelő legyen.
  
5. Mi az a reszponzivitás, reszponzív webdesign?
  - Pont: 3
  - Válasz: A reszponzív webdesign vagy reszponzivitás a weboldalak tervezésének és fejlesztésének egyik alapelve, amelynek lényege, hogy a weboldal megjelenése és működése alkalmazkodjon a felhasználó által használt eszközhöz és képernyőmérethez. A reszponzív webdesign segítségével biztosíthatjuk, hogy a weboldalunk minden eszközön és képernyőméreten jól nézzen ki és működjön.
  
6. Sorolja fel a Memex legalább három tulajdonságát, jellemzőjét
  - Pont: 3
  - Válasz: Üveg borítás, alulról vetíti a képet vagy szöveget. Mechanikus keresés és input bevitel. Korlátlan kapacitás. Hiperszöveg, hiperhivatkozás. Az információk összekapcsolhatók.
  
7. Mi az az npm?
  - Pont: 1
  - Válasz: Az npm (Node Package Manager) a Node.js szoftvercsomag-kezelő rendszerének rövidítése. A Node.js egy nyílt forráskódú, JavaScript-alapú szerveroldali platform, amelyet webalkalmazások fejlesztésére használnak. Az npm segítségével a Node.js fejlesztők könnyedén telepíthetnek, frissíthetnek, törölhetnek és kezelhetnek különböző szoftvercsomagokat a Node.js platformon. Az npm segítségével tehát a Node.js fejlesztők könnyedén hozzáférhetnek a legújabb szoftvercsomagokhoz és frissítésekhez, és egyszerűen integrálhatják azokat a saját fejlesztéseikbe.

8. Milyen design pattern-t követ a Microsoft ASP.NET?
  - Pont: 1
  - Válasz: A Microsoft ASP.NET webfejlesztési platformja több design pattern-t is követ. Az egyik ilyen design pattern a model-view-controller (MVC) pattern, amely a webes alkalmazások fejlesztésének egyik leggyakrabban használt mintája. Ez a minta elválasztja a felhasználói felületet (view), a alkalmazás logikáját (controller), és az adatokat (model) egymástól, ami lehetővé teszi, hogy könnyen frissíthető és testre szabható legyen az alkalmazás.
  
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
  A sütik (cookie-k) kis adatfájlok, amelyeket a weboldalak a felhasználó számítógépére vagy eszközére tárolnak, hogy később felismerhessék a felhasználót és a böngészési szokásait. A sütiket általában a weboldalak látogatási statisztikák készítésére, a felhasználó bejelentkezéseinek megjegyzésére, a felhasználói preferenciák tárolására és más hasonló célokra használják.
  
13. Miért előnyösebb a W3C eseménykezelési módszerét alkalmazni a "klasszikus" eseménykezelés helyett?
  - Pont: 2
  - Válasz: Az eseménykezelő hozzárendelés JS kódból történik. Több eseménykezelő is hozzárendelhető. Rugalmas, logikus, viszonylag egyszerű.
  
14. Hogyan lehet megakadályozni, hogy a böngésző végrehajtsa egy eseményhez rendelt alapértelmezett tevékenységeit? Minden módszert írjon le, amit csak ismer!
  - Pont: 3
  - Válasz: e.preventDefault() | e.returValue = false. e.stopPropogation() | e.cancelBubble = true. addEventListener utolsó paramétere.
  
15. Mire a jó HTTP feltételes GET metódusa
  - Pont: 3
  - Válasz: Az HTTP (Hypertext Transfer Protocol) feltételes GET metódusa egy olyan HTTP kérési metódus, amely lehetővé teszi a kliens (például egy webböngésző) számára, hogy kérdezze le a szervertől (például egy weboldal szerverétől) egy adott erőforrás (például egy weboldal) állapotát.

Az HTTP feltételes GET metódusa segítségével a kliens megadhat egy feltételt, amely alapján a szerver eldönti, hogy adja-e vissza az erőforrás állapotát, vagy sem. Például, ha a kliens megadja, hogy csak akkor kérje le az erőforrás állapotát, ha az az utolsó lekéréskor megváltozott, akkor a szerver csak akkor fogja visszaadni az erőforrás állapotát, ha az az utolsó lekéréskor megváltozott.

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
  - Válasz: Az SGML (Standard Generalized Markup Language) egy szabványos, generikus jelölőnyelv, amelyet dokumentumok jelölésére használnak. A HTML (Hypertext Markup Language) az SGML egy speciális változata, amelyet hipertext dokumentumok jelölésére használnak. A HTML5 pedig a HTML legújabb változata, amely számos új funkciót tartalmaz, például támogatja a videó és az audio lejátszását, valamint a 2D-s és 3D-s grafikát.

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

22. Miért lehet indokolt több adatforrást is megadni weboldalba ágyazott videó lejátszásakor?
  - Pont: 2
  - Válasz: Több adatforrást megadva weboldalba ágyazott videó lejátszásakor azért lehet indokolt, mert így a videó megtekintése folyamatosan történhet, anélkül, hogy a lejátszás akadozna vagy megszakadna. Ha egy adatforrásból származó videót játszunk le, és valami miatt megszakad az adatforrás, akkor a videó megtekintése is megszakad. Ha viszont több adatforrásból származó videót játszunk le, akkor a lejátszás folyamatosan történhet, mert ha az egyik adatforrás megszakad, akkor a másik adatforrásra váltva a videó megtekintése folytatódhat. Ez különösen fontos, ha a videót élőben sugározzuk, hiszen ilyenkor a nézőknek folyamatosan kell biztosítani a lejátszást.  

23. Milyen szintaktikai szerepe van a CSS-ben a ::-nak?
    - Pont: 2
  - Válasz: A CSS (Cascading Style Sheets) nyelvben a :: (dupla kettőspont) szintaktikai elemének van szerepe. A ::-t ún. pseudo-elemként használják, ami olyan elemeket jelöl, amelyek nem léteznek a dokumentum DOM (Document Object Model) struktúrájában, de mégis lehetővé teszik a stílusok alkalmazását rájuk. Például a ::before pseudo-elem segítségével hozzáadhatunk tartalmat egy elem elé, míg a ::after pseudo-elem segítségével tartalmat adhatunk hozzá az elem után.

24. A margó (margin), szegély (border) és kitöltés (padding) közül melyiknek/melyek- nek lehet negatív méretet megadni?
    - Pont: 2
  - Válasz: A margó (margin), szegély (border) és kitöltés (padding) közül csak a margó méretének lehet negatív értéket megadni. A szegély és a kitöltés méretének nem lehet negatív értéket megadni.

25. Milyen űrlapvezérlőnél nélkülözhetetlen a value attribútum megadása, és miért?
  - Pont: 2
- Válasz: Az űrlapvezérlők közül a legtöbb esetben nélkülözhetetlen a value attribútum megadása. Ennek oka, hogy az űrlapvezérlők legtöbb esetben értéket tárolnak, és a value attribútum segítségével lehet megadni, hogy milyen értéket szeretnénk tárolni az űrlapvezérlőben. Például ha beviteli mezőt (input) használunk, akkor a value attribútum segítségével lehet megadni, hogy milyen szöveget szeretnénk megjeleníteni a beviteli mezőben. Ha pedig gombot (button) használunk, akkor a value attribútum segítségével lehet megadni, hogy milyen szöveget szeretnénk megjeleníteni a gombon.

26. Hogyan lehet beállítani CSS-ben a kitöltések (padding) színét?
  - Pont: 2
- Válasz: CSS-ben a kitöltések színét úgy lehet beállítani, hogy az adott elemhez rendelünk egy padding-szín nevű tulajdonságot, és annak értékéül megadjuk a kívánt színt. Például, ha szürke színű kitöltést szeretnénk az adott elemhez, akkor a következőképpen állíthatjuk be:
padding-color: grey;

27. Írjon egy példát arra, amikor szükséges egy űrlapvezérlőnél (pl. küldés gomb) megadni a formaction attribútumot!
  - Pont: 2
- Válasz: Az űrlapvezérlők közül a legtöbb esetben nem szükséges a formaction attribútum megadása. Ennek oka, hogy az űrlapvezérlők alapértelmezetten az adott űrlap (form) címére továbbítják az adatokat. Például, ha egy űrlapban van egy küldés (submit) gomb, akkor alapértelmezetten a küldés gomb megnyomásakor az adatok az űrlap címére kerülnek továbbításra.

Viszont ha szeretnénk, hogy az adatok ne az űrlap címére, hanem egy másik címre kerüljenek továbbításra, akkor a formaction attribútumot kell megadni az adott űrlapvezérlőnél. Például, ha egy űrlapban van egy küldés (submit) gomb, és szeretnénk, hogy az adatok a "http://example.com/submit" címre kerüljenek továbbításra, akkor a következőképpen állíthatjuk be:

28. Milyen űrlapvezérlőnél nélkülözhetetlen a value attribútum megadása, és miért?
  - Pont: 2
- Válasz: Például, ha egy űrlapban van egy beviteli mező és egy gomb, és szeretnénk, hogy a beviteli mezőben "Szöveg" szöveg jelenjen meg, valamint a gombon "Gomb" szöveg jelenjen meg, akkor a következőképpen állíthatjuk be:
<form>
  <input type="text" value="Szöveg">
  <input type="submit" value="Gomb">
</form>
Ebben az esetben a beviteli mezőben "Szöveg" szöveg fog megjelenni, és a gombon "Gomb" szöveg fog megjelenni. Ha nem adnánk meg a value attribútumokat, akkor a beviteli mező és a gomb üresen jelenne meg.
# Notes
