<template>
	<router-view></router-view>
</template>

<script>

import $ from 'jquery';

import './assets/css/materialize.min.css'
import './assets/css/main.css'
import './assets/css/escuelas.css'

window.$ = $;
window.jQuery = $;

require('materialize-css')

export default {

	data: function data() {
		return {

		};
	},
	components: {

	},
	ready: function(){	

	},
	methods: {

	}

};

</script>

<style scope>

</style>