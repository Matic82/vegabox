// 1. Dodaj EventListener za nalozitev spletne strani tipa 'load'
window.addEventListener('/* tip dogodka */', function() {
    // stran nalozena

    var prizgiCakanje = function() {
        document.querySelector('.loading').style.display = // dodajte vrednost za PRIKAZ elementa
    }
    var ugasniCakanje = function() {
        document.querySelector('.loading').style.display = // dodajte vrednost za SKRITJE elementa
    }

    // Dodaj 'click' EventListener elementu z id="nalozi"
    // Koda gre sem ...

    // Pridobi seznam datotek
    var pridobiSeznamDatotek = function(event) {
        // Klic funkcije za cakanje
        // Koda gre sem ...
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(xhttp.readyState == 4 && xhttp.status == 200) {
                var datoteke = JSON.parse(xhttp.responseText);
                var datotekeHTML = document.querySelector('/* dodaj element z id dateteke */');

                /** Z zanko ZA pojdi skozi seznam datotek in  izvedi naslednje korake:
                 *  1. določi spremenljivko, ki predstavlja datoteko
                 *  2. definiraj spremenljivko za velikost datoteke
                 *  3. definiraj spremenljivko za enoto (B kot Byte)
                 *  4. sestavi html div ki predstavlja posamezno datoteko
                 */
                var datoteka = /* Koda gre sem */;

                var velikost = // Koda gre sem */;

                datoteke.innerHTML += " \
                    <div class='datoteka'> \
                    <div class='naziv_datoteke'> " + datoteka.datoteka + " (" + velikost + " " + enota + ") </div> \
                    <div class='akcije'> \
                    | <span><a href='/prenesi/" + datoteka.datoteka + "' target='_self'>Prenesi</a></span> \
                    | <span akcija='brisi' datoteka='"+ datoteka.datoteka +"'>Izbriši</span> </div> \
                </div>";
            }

            if (datoteke.length > 0) {
                // Dodaj EventListener za dogodek click in klic funkcije brisi
                document.querySelector("span[akcija=brisi]").addEventListener(/* Koda gre sem... */);
            }

            // Klici funkcijo ugasniCakanje()
        }
    };
})