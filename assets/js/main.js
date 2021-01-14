//https://api.themoviedb.org/3/movie/550?api_key=d0d87b85e549264b7f1c08605be5929d

let app = new Vue({

    el: "#app",
    data: {
        search: "",
        films: [],
        tvSeries: [],
    },

    methods: {
        inviaRichiestaFilm() {
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
                        language: "it"
                    }
                })
                .then(response => {
                    const risultato = response.data.results;
                    this.films = risultato
                    console.log(risultato);

                    /* let n = 5 ;
                    for (let i = 0; i < n ; i++) {
                        self.arrayVoto.push(self.voto)
                        console.log(self.arrayVoto);
                    } */

                    this.films.forEach(element => {
                        
                        /* const rispostaBase = response.data.results; */
                        const votoDaTrasformare = Math.ceil(element.vote_average / 2);
                        return element.stelle = votoDaTrasformare;
                        /* console.log(votoDaTrasformare); */
                        //response.data.results[i].vote_average = votoDaTrasformare;
                        /* console.log(response.data.results[i].vote_average); */
                        //const votoTrasformato = votoDaTrasformare;
                        //this.stelle = votoTrasformato;
                        //console.log(votoDaTrasformare);
                        /* const votazioneTrasformata = rispostaBase[i].vote_average
                        console.log(votazioneTrasformata); */
                    
                    });
                    this.films.forEach(element => {
                        const base = "https://image.tmdb.org/t/p/w342";
                        const linkCopertina = element.poster_path;
                        if (element.poster_path) {
                            return element.copertinaCompleta = base + linkCopertina;
                        } else {
                            return element.copertinaCompleta = linkCopertina;
                        }                        
                    });
                })
            axios
                .get("https://api.themoviedb.org/3/search/tv", {
                    params: {
                        api_key: "d0d87b85e549264b7f1c08605be5929d",
                        query: self.search,
                        language: "it"
                    }
                })
                .then(response => {
                    const risultato = response.data.results;
                    this.tvSeries = risultato
                    console.log(risultato);

                    /* let n = 5 ;
                    for (let i = 0; i < n ; i++) {
                        self.arrayVoto.push(self.voto)
                        console.log(self.arrayVoto);
                    } */

                    this.tvSeries.forEach(element => {

                        const votoDaTrasformare = Math.ceil(element.vote_average / 2);
                        return element.stelle = votoDaTrasformare;
                        
                    });
                    this.tvSeries.forEach(element => {
                        const base = "https://image.tmdb.org/t/p/w342";
                        const linkCopertina = element.poster_path;
                        return element.copertinaCompleta = base + linkCopertina;

                    });
                    this.tvSeries.forEach(element => {
                        const base = "https://image.tmdb.org/t/p/w342";
                        const linkCopertina = element.poster_path;
                        if (element.poster_path) {
                            return element.copertinaCompleta = base + linkCopertina;
                        } else {
                            return element.copertinaCompleta = linkCopertina;
                        }
                    });  
                })
        },
    },
})


