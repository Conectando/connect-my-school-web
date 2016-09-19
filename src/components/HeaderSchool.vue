<template>
  	<div class="navbar-fixed">
	    <nav class="white">
	        <div class="nav-wrapper">
	        	<a v-link="{ name: 'home' }" class="brand-logo">Mi Escuela</a>
	        	<a href="#" data-activates="mobile-demo" class="button-collapse">	<i class="material-icons">menu</i>
	        	</a>
	          	<ul class="right hide-on-med-and-down">
	            	<li><a v-link="{ name: 'home' }">Inicio</a></li>
	            	<li><a v-link="{ name: 'public.data' }">Datos Públicos</a></li>
	            	<li><a v-link="{ name: 'schools.search' }">Escuelas</a></li>
	            	<li>
	            		<a v-link="{ name: 'login' }">
	            			<i class="material-icons left">perm_identity</i>Iniciar sesión
	            		</a>
	            	</li>
	        	</ul>
		        <ul class="side-nav" id="mobile-demo">
		            <li><a v-link="{ name: 'home' }">Inicio</a></li>
		            <li><a v-link="{ name: 'public.data' }">Datos Públicos</a></li>
		            <li><a v-link="{ name: 'schools.search' }">Escuelas</a></li>
		            <li>
		            	<a v-link="{ name: 'login' }">
		            		<i class="material-icons left">perm_identity</i>Iniciar sesión
		            	</a>
		            </li>
		        </ul>
		    </div>
	    </nav>
	</div>
</template>

<script>

export default {

	data: function data() {
		return {

		};
	},

	components: {

	},

	ready: function() {	

	},
	methods: {

	}

};

</script>

<style scope>
</style>