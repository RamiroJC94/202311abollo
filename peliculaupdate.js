var id = location.search.substr(4)  // pelicula_update.html?id=1
const { createApp } = Vue
createApp({
    data() {
        return {
            url: 'https://ramcroce.pythonanywhere.com/peliculas/' + id,
            peliculas: [],
            error: false,
            cargando: true,
            desc:"",
            estreno:"",
            imagen:"",
            titulo:"",
            trailer:""
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.id = data.id
                    this.desc = data.desc
                    this.estreno = data.estreno
                    this.imagen = data.imagen
                    this.titulo = data.titulo
                    this.trailer = data.trailer
                })
                .catch(err => { this.error = true })
        },
        modificar() {
            let pelicula = {
                desc:this.desc,
                estreno:this.estreno,
                imagen:this.imagen,
                titulo:this.titulo,
                trailer:this.trailer
            }
            var options = {
                body: JSON.stringify(pelicula),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./peliculas.html";        
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')