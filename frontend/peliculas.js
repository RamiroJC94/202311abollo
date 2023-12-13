const {createApp} = Vue

createApp({
    data(){
        return{
            url:"https://ramcroce.pythonanywhere.com/peliculas",
            peliculas:[],
            error:false,
            cargando:true,
            desc:"",
            estreno:"",
            imagen:"",
            titulo:"",
            trailer:""
        }
    },

    methods:{
        fetchData(url){
            fetch(url)
                .then(response => response.json())
                .then(data  => {
                    this.peliculas=data
                    this.cargando=false
                })
                .catch(error => this.error=true)
        },

        grabar(){
            let pelicula = {
                desc:this.desc,
                estreno:this.estreno,
                imagen:this.imagen,
                titulo:this.titulo,
                trailer:this.trailer
            }
            var options = {
                body:JSON.stringify(pelicula),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./peliculas.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")
                })      
        },
        eliminar(id){
            const url= this.url+'/'+id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text())
                .then(res => {
                    alert('Registro Eliminado')
                    location.reload();
                })
        },

        masivo(){
            const url = "https://ramcroce.pythonanywhere.com/masivo"
            fetch(url)
            .then(response => response.json())
            .then(data  => {
                // this.peliculas=this.pelicula+data
                console.log(data)
            })
            .catch(error => this.error=true)
        }
    },

    created(){
        this.fetchData(this.url)
    }
}).mount('#app')