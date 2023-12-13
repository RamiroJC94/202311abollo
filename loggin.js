const {createApp} = Vue
createApp({
    data(){
        return{
            user:"ADM",
            password:"ADM"
        }
    },
    methods:{
        logear(){
            let usuario = {
                user: this.user,
                password: this.password
            }
            if (usuario.user === "ADM" && usuario.password === "ADM"){
                window.location.href = "./peliculas.html";
                // this.$router.push({ path: "peliculas" });
            } else if (usuario.user === "user" && usuario.password === "user"){
                window.location.href = "./viewpeliculas.html";
            }
            
        }
    },
    created(){
        console.log("")
    },
}).mount('#app')