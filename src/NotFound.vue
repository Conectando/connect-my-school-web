<template>
	<header-school></header-school>

	<div class="container">
		<div class="row">
			<div class="col s12 m12">
				<div class="valign-wrapper center-align">
					<h1 class="valign purple-text text-darken-3">Not Found 404</h1>
				</div>
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

		};
	},

	components: {
		FooterSchool,
		HeaderSchool,
	},

	ready: function() {	
		
		// $('.button-collapse').sideNav({
	 //    	menuWidth: 350, // Default is 240
	 //    	edge: 'left', // Choose the horizontal origin
	 //    	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	 //    });

	},
	methods: {
		
	}

};

</script>

<style scope>

</style>