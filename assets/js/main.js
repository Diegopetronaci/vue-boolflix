//https://api.themoviedb.org/3/movie/550?api_key=d0d87b85e549264b7f1c08605be5929d

let app = new Vue({

    el: "#app",
    data: {
        search: "",
        films: [],
    },

    methods: {
        inviaRichiesta() {
            /* const self = this;
            axios
                .get(`'https://api.themoviedb.org/3/search/movie?api_key=d0d87b85e549264b7f1c08605be5929d&language=en-US&query=${self.search}&page=1&include_adult=false'`)
                .then(response => {
                    this.films = response.data;
                    console.log(response.data);
                }) */

            const self = this;
            axios
                .get("https://api.themoviedb.org/3/search/movie", {
                    params: {
                        api_key: "d0d87b85e549264b7f1c08605be5929d",
                        query: self.search,
                        language: "it-IT"
                    }
                })
                .then(response => {
                    const risultato = response.data.results;
                    this.films = risultato
                    console.log(risultato);

                    for (let i = 0; i < self.films.length; i++) {
                        const rispostaBase = response.data.results;
                        const votoDaTrasformare = Math.ceil(response.data.results[i].vote_average / 2);
                        /* console.log(votoDaTrasformare); */
                        response.data.results[i].vote_average = votoDaTrasformare;
                        /* console.log(response.data.results[i].vote_average); */
                        const votoTrasformato = votoDaTrasformare;
                        console.log(votoTrasformato);

                        const votazioneTrasformata = rispostaBase[i].vote_average
                        if (votazioneTrasformata == 0) {
                            console.log("0 stella");
                        }
                        if (votazioneTrasformata == 1  ) {
                            console.log("1 stella");
                        }
                        if (votazioneTrasformata == 2) {
                            console.log("2 stella");
                        }
                        if (votazioneTrasformata == 3) {
                            console.log("3 stella");
                        }
                        if (votazioneTrasformata == 4) {
                            console.log("4 stella");
                        }
                        if (votazioneTrasformata == 5) {
                            console.log("5 stella");
                        }
                    }
                })
        },
        /* trasformaVoto(){
            for (let i = 0; i < self.films.length; i++) {
                const votoDaTrasformare = response.data.results[i].vote_average / 2
                console.log(votoDaTrasformare);  
            }
        } */
    },
})


