import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {     
    form: {
      titulo: '',
      selected: 'App category',
    },
    enviar() {   
      this.$http.post("form.json", this.form)
      .then(resp => {
        this.form.titulo = "";
        this.form.selected = "";
        this.images = "";
        this.colors = "";
      });
      // eslint-disable-next-line
      console.log(this.form.titulo);
      // eslint-disable-next-line
      console.log(this.form.selected);
      // eslint-disable-next-line
      // eslint-disable-next-line
      console.log(this.images);
      // // eslint-disable-next-line
      // alert('formulario enviado');  
     
      
    },

    
  },
  mutations: {},
  actions: {}
})