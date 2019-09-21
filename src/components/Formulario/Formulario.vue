<template>
   <div class="content-formulario">
    <div class="formulario">
      <h2 class="titulo">Create Your App</h2>     
      <div class="container">                      
          <form @submit.prevent="enviar()"  method="post">
          <div class="formulario__input">
            <label class="titulo">APP NAME</label>
            <input type="text" placeholder="Enter App Display Name" id="name-input" 
            v-model="form.titulo">
          </div>

        <div class="formulario__input">
            <label class="titulo">APP ICON</label>            
              <div class="formulario__input--select__file"
                @dragenter="OnDragEnter"
                @dragleave="OnDragLeave"
                @dragover.prevent
                @drop="onDrop"
                :class="{dragging : isDragging }">    

                 <div >
                    <input type="text" class="file" 
                    @change="onInputChange"
                    placeholder="Drag an image here to upload">
                  <label class="custom-file-upload">
                       <input type="file" 
                        @change="onInputChange"
                       class="btn-file">
                       SELECT A FILE
                  </label>                                     
              </div>   
            </div>   
         </div>

         <div class="formulario__input">
            <label class="titulo">ICON'S BACKGROUND COLOR</label>         
                <input type="text" 
                    placeholder="Pick a color" 
                    id="select-color">
                <span class="color"
                  v-bind:style="{ backgroundColor: colors.hex}"
                 @click="show = !show" 
                 key="clear">
                 {{ colors.hex }}
                </span>   
                <transition name="fade" mode="out-in">
                  <div class="container-pick">
                    <chrome v-if="show" class="color-picke"                    
                    v-model="colors" @change-color="onChange">
                </chrome>  
                  </div>
              </transition> 
        </div>

        <div class="formulario__input">
            <label class="titulo">CATEGORY</label>
            <select v-model="form.selected"
                placeholder="Select a Category"
                id="select-category">
                <option disabled value="App category">Please select Category</option>
                <option>Category A</option>
                <option>Category B</option>
                <option>Category C</option>
              </select>
        </div>       
      </form>   
      
        <div class="box__linha"></div>     
         <div class="box__preview">           
            <div class="preview">
        <h2>APP'S CARD PREVIEW</h2>

        <div class="preview__card">
            <div class="preview__card--imagem" v-bind:style="{ backgroundColor: colors.hex}">
              <div class="image-preview" >
                     <div class="img-wrapper" v-for="(image, index) in images" :key="index.id">
                       <img :src="image">                      
                     </div>
                </div>
            </div>
            <div class="preview__card--informacao">             
                <h3> {{ form.titulo }} </h3>
                <h4> {{ form.selected }} </h4>
                <h5> New App </h5>                
            </div>            
        </div>
            <button class="btn-app" @click="enviar()">
                SAVE APP
            </button>
       </div>
      </div>
    </div>         
  </div>
</div>


</template>

<script>
import { Chrome } from "vue-color";

export default {
  name: "formulario",
  components: {
    Chrome
  },
  data() {
    return {
      show: false,
      isDragging: false,
      dragCount: 0,
      files: [],
      images: [],

      colors: {
        hex: "#000",
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.3,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      }
    };
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
    enviar() {
      return this.$store.state.enviar;
    }
  },
  methods: {
    OnDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDragging = true;
    },
    OnDragLeave(e) {
      e.preventDefault();
      this.dragCount--;

      if (this.dragCount < 0) this.isDragging = false;
    },
    onInputChange(e) {
      const files = e.target.files;

      Array.from(files).forEach(file => this.addImage(file));
    },
    onDrop(e) {
      e.preventDefault();
      e.stopPropagation();

      this.isDragging = false;

      const files = e.dataTransfer.files;

      Array.from(files).forEach(file => this.addImage(file));
    },
    addImage(file) {
      if (!file.type.match("image.*")) {
        return;
      }
      this.files.push(file);

      const reader = new FileReader();

      reader.onload = e => this.images.push(e.target.result);
      reader.readAsDataURL(file);
    },
    onChange(val) {
      this.colors = val;
    }
  }
};
</script>

<style lang="scss">
@import "./formulario";
</style>