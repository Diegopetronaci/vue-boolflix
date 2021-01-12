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
                        const votoDaTrasformare = Math.ceil(response.data.results[i].vote_average / 2);
                        console.log(votoDaTrasformare);
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


