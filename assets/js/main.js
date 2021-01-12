//https://api.themoviedb.org/3/movie/550?api_key=d0d87b85e549264b7f1c08605be5929d

let app = new Vue({

    el: "#app",
    data: {
        search: "",
        films: [],
    },

    methods: {
        inviaRichiesta() {
            
            /* axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=d0d87b85e549264b7f1c08605be5929d&language=en-US&query=matrix&page=1&include_adult=false')
                .then(response => {
                    this.films = response.data;
                    console.log(response.data);
                })  */

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
                    /* this.films  */
                    const risultato = response.data.results;
                    console.log(risultato);
                })
        } 
    },
    /* computed: {
        listaFiltrata() {
            return this.films.filter(element => {
                return element.data.title.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }, */
    /* mounted() {
        for (let i = 0; i < 10; i++) {

            axios
            .get('https://api.themoviedb.org/3/movie/550?api_key=d0d87b85e549264b7f1c08605be5929d')
            .then(response => {
                this.films = response.data.response;
                console.log(response);
            })
        }
    }, */
})


