<template>
    <div class="box"> 
        <div class="box-header">
            <p @click="modal = !modal">
                x 
            </p>     
            <transition name="fade" v-if="modal">
            <div class="modal-mask">
                <div class="modal">
                  <p>
                    Deseja realmente sair do formulario ?
                  </p>
                  <button class="btn-modal" 
                  @click="onReset()">Sair</button> 
                  <button class="btn-modal"
                  @click="modal = !modal">Voltar</button>
              </div>
           </div>
          </transition>
        </div>
          
        <div class="container">
            <div class="box__formulario">            
            <Formulario />        
        </div>      
        </div>
    </div>   
</template>

<script>
import Formulario from "../Formulario/Formulario";
export default {
  name: "box",
  components: {
    Formulario
  },
  data() {
    return {
      modal: false
    };
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
    onReset() {
      return this.$store.state.onReset;
    }
  }
};
</script>

<style lang="scss">
@import "./box.scss";
</style>
