const { createApp } = Vue

createApp({
  data() {
    return {
      url: "https://ramcroce.pythonanywhere.com/peliculas",
      peliculas: []
    }
  },

  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.peliculas = data
          this.cargando = false
        })
        .catch(error => this.error = true)
    }
  },

  created() {
    this.fetchData(this.url)
  }
}).mount('#app')



