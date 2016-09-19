<template>
	<header-school></header-school>

	<div class="container">

		<div class="row" style="margin-top:3em;">
			<div class="col col l6 offset-l3 m10 offset-m1 s12">
				
				<form class="z-depth-2">

					<md-tabs :active.sync="tab" class="z-depth-1">
					    <md-tab name="parent">
					    	<a>Padres de Familia</a>
					    </md-tab>
					    <md-tab name="teacher">
					    	<a>Profesores/Directivos</a>
					    </md-tab>
					</md-tabs>

					<h4 class="center-align">Ingresa tus datos</h4>

					<div v-if="tab == 'parent'">
						<div class="row">
			            	<div class="input-field col s10 offset-s1">
			                	<input id="parent_enrollment" type="text" class="validate">
			                	<label for="parent_enrollment">Matrícula del alumno</label>
			            	</div>
			            </div>
			            <div class="row">
			            	<div class="input-field col s10 offset-s1">
			                	<input id="parent_password" type="password" class="validate">
			                	<label for="parent_password">Contraseña</label>
			              	</div>
			            </div>
			            <div class="row">
				            <div class="input-field col s10 offset-s1" style="margin-bottom:20px;">
				            	<button href="!#" class="btn purple darken-3 waves-effect waves-light">
				            		Acceder
				            	</button>
				            </div>
			            </div>
					</div>

					<div v-if="tab == 'teacher'">
						<div class="row">
			            	<div class="input-field col s10 offset-s1">
			                	<input id="teacher_enrollment" type="text" class="validate">
			                	<label for="teacher_enrollment">RFC</label>
			            	</div>
			            </div>
			            <div class="row">
			            	<div class="input-field col s10 offset-s1">
			                	<input id="teacher_password" type="password" class="validate">
			                	<label for="teacher_password">Contraseña</label>
			              	</div>
			            </div>
			            <div class="row">
				            <div class="input-field col s10 offset-s1" style="margin-bottom:20px;">
				            	<button href="!#" class="btn purple darken-3 waves-effect waves-light">
				            		Acceder
				            	</button>
				            </div>
			            </div>
					</div>

		        </form>

			</div>
		</div>

		<!-- <pre> {{ $data | json }} </pre> -->
	</div>

	<footer-school></footer-school>

</template>

<script>

import HeaderSchool from './components/HeaderSchool'
import FooterSchool from './components/FooterSchool'

export default {

	data: function data() {
		return {
			tab: 'parent'
		};
	},

	components: {
		FooterSchool,
		HeaderSchool,
	},

	ready: function() {	
		
		$('.button-collapse').sideNav({
	    	menuWidth: 350, // Default is 240
	    	edge: 'left', // Choose the horizontal origin
	    	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    });

	},
	methods: {
		
	}

};

</script>

<style scope>
	button.btn {
		width: 100%;
	}
</style>