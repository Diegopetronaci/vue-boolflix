//https://api.themoviedb.org/3/movie/550?api_key=d0d87b85e549264b7f1c08605be5929d

let app = new Vue({

    el: "#app",
    data: {
        search: "",
        films: [],
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
    methods: {
        inviaRichiesta() {
            for (let i = 0; i < 2; i++) {
                axios
                    .get('https://api.themoviedb.org/3/movie/550?api_key=d0d87b85e549264b7f1c08605be5929d')
                    .then(response => {
                        this.films = response.data.response;
                        console.log(response.data);
                    })
            }
        }
    },
    
})


