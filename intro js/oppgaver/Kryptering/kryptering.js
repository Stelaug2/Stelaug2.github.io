var alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ.,?-_ "; //
        //let bokstavPosisjon = alfabet.indexOf("b");
        //console.log(bokstavPosisjon);

        document.getElementById("krypter").addEventListener("click", krypterMelding);
        document.getElementById("dekrypter").addEventListener("click", dekrypterMelding);

        function krypterMelding() {
            let melding = document.getElementById("melding").value;
            console.log(melding);

            let nøkkel = document.getElementById("nøkkel").value;
            console.log(nøkkel);

            krypteringsNøkkel = Number(nøkkel);

            let helkryptert = "";
            
            for(let i = 0; i < melding.length; i++) {
                if(alfabet.indexOf(melding.charAt(i)) !== -1) {
                    helkryptert += krypter(melding.charAt(i), krypteringsNøkkel);
                    console.log(helkryptert)
                }

                else {
                    helkryptert += melding.charAt(i);
                    console.log("Finner ikke bokstaven i alfabetet :(");
                }
            }
            let kryptertMelding = helkryptert
            document.getElementById("utskrift").innerHTML = kryptertMelding
        }

        function dekrypterMelding() {
            let melding = document.getElementById("deMelding").value;
            console.log(melding);

            let nøkkel = document.getElementById("deNøkkel").value;
            console.log(nøkkel);

            krypteringsNøkkel = Number(nøkkel);

            let helkryptert = "";
            
            for(let i = 0; i < melding.length; i++) {
                if(alfabet.indexOf(melding.charAt(i)) !== -1) {
                    helkryptert += dekrypter(melding.charAt(i), krypteringsNøkkel);
                    console.log(helkryptert)
                }

                else {
                    helkryptert += melding.charAt(i);
                    console.log("Finner ikke bokstaven i alfabetet :(");
                }
            }
            let kryptertMelding = helkryptert
            document.getElementById("deUtskrift").innerHTML = kryptertMelding
        }

        var alfabetLengde = alfabet.length
        function krypter(originalBokstav, kryptNøkkel) {
            let bokstavPosisjon = alfabet.indexOf(originalBokstav);
            console.log(" input: " + originalBokstav + " " + bokstavPosisjon);

            let nyPosisjon = (bokstavPosisjon + kryptNøkkel);

            if(nyPosisjon >= alfabetLengde) {
                nyPosisjon -= alfabetLengde;
            }

            return alfabet[nyPosisjon];
        }

        function dekrypter(originalBokstav, kryptNøkkel) {
            let bokstavPosisjon = alfabet.indexOf(originalBokstav);
            console.log(" input: " + originalBokstav + " " + bokstavPosisjon);

            let nyPosisjon = (bokstavPosisjon - kryptNøkkel);

            if(nyPosisjon <= 0) {
                nyPosisjon = alfabetLengde + nyPosisjon;
                console.log("Under alfabetets lengde");
            }

            console.log(nyPosisjon);
            return alfabet[nyPosisjon];
        }
        
