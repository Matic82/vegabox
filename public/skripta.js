// 1. Dodaj EventListener za nalozitev spletne strani tipa 'load'
window.addEventListener("load", function() {
    // stran nalozena

    var prizgiCakanje = function() {
        document.querySelector('.loading').style.display = 'block';
    }
    var ugasniCakanje = function() {
        document.querySelector('.loading').style.display = 'none';
    }
    if(id="nalozi"){
        this.addEventListener(click);
    }
    // Dodaj 'click' EventListener elementu z id="nalozi"
    

    // Pridobi seznam datotek
    var pridobiSeznamDatotek = function(event) {
        // Klic funkcije za cakanje
        prizgiCakanje();
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
                var datoteka = // /* Koda gre sem */

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

            ugasniCakanje();
        }
    };
    var brisi = function(event) {
        prizgiCakanje();
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {

                /** 2. Preveri da lastnost responseText objekta xhttp odgovarja "Datoteka izbrisana",
                 *  v pozitivnem primeru preusmeri uporabnika na glavno stran (pomoč: window.location)
                 *  sicer sproži alert s sporočilom, ki sporoči uporabniku, da ni moč zbrisati datoteko
                 */
				if (xhttp.responseText == "Datoteka izbrisana") {
					window.location = "/";
				}else {
					window.alert("Datoteke ni moč zbrisati");
				}
                // 3. Klici funkcijo ugasniCakanje()
                ugasniCakanje();
			}
			
		};
        // 4. Poglej sintakso funkcije .open() ter podaj zahtevo strežniku tipa GET
		xhttp.open("GET", "/brisi/"+this.getAttribute("datoteka"), true);
		// 5. Pošlji zahtevo strežniku s funkcijo send() na objektu xhttp
        xhttp.send();
    }
});