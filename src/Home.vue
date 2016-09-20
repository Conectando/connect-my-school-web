<template>

  	<header-school></header-school>

	    <!-- Slider -->
	    <div class="slider">
	      <ul class="slides">
	        <li>
	          <img class="sliderimg" src="./assets/img/2015_03_9c507b38ddfc.jpg"> <!-- random image -->
	          <div class="caption center-align">
	            <h3>Conoce el ranking de las escuelas</h3>
	            <h5 class="light grey-text text-lighten-3">Encuentra y evalúa la escuela de tus hijos</h5>
	          </div>
	        </li>
	        <li>
	          <img class="sliderimg" src="./assets/img/2015_02_ffeb2192215e.jpg"> <!-- random image -->
	          <div class="caption center-align">
	            <h3>Otra noticia relevante</h3>
	            <h5 class="light grey-text text-lighten-3">Descripción de la noticia.</h5>
	          </div>
	        </li>
	      </ul>
	    </div>

	    <!-- Noticias -->
	    <div class="container">
	      <div class="row">
	        <div class="col s12 m12">
	          <h4>Más noticias</h4>
	        </div>
	      </div>
	      <div class="row">
	        <div class="col s12 m4">
	          <div class="card">
	            <div class="card-image">
	              <img src="./assets/img/Card1.png">
	            </div>
	            <div class="card-content">
	              <span class="card-title card-news">Título</span>
	              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
	            </div>
	            <div class="card-action center-align">
	              <a class="waves-effect waves-light btn-large purple darken-3 center">Leer Más</a>
	            </div>
	          </div>
	        </div>
	        <div class="col s12 m4">
	          <div class="card">
	            <div class="card-image">
	              <img src="./assets/img/Card2.png">
	            </div>
	            <div class="card-content">
	              <span class="card-title card-news">Título</span>
	              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
	            </div>
	            <div class="card-action center-align">
	              <a class="waves-effect waves-light btn-large purple darken-3 center">Leer Más</a>
	            </div>
	          </div>
	        </div>
	        <div class="col s12 m4">
	          <div class="card">
	            <div class="card-image">
	              <img src="./assets/img/Card3.png">
	            </div>
	            <div class="card-content">
	              <span class="card-title card-news">Título</span>
	              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
	            </div>
	            <div class="card-action center-align">
	              <a class="waves-effect waves-light btn-large purple darken-3 center">Leer Más</a>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	    
	<footer-school></footer-school>

</template>

<script>

import HeaderSchool from './components/HeaderSchool'
import FooterSchool from './components/FooterSchool'

export default {

	data: function data() {
		return {

		};
	},
	components: {
		HeaderSchool,
		FooterSchool,
	},
	ready: function() {	
		$('.button-collapse').sideNav({
	    	menuWidth: 350, // Default is 240
	    	edge: 'left', // Choose the horizontal origin
	    	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    });

		$(document).ready(function(){
		  $('.slider').slider();
		});
	},
	methods: {

	}

};

</script>

<style scope>
</style>