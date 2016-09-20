<template>
  	<header>
		
		<nav class="purple darken-3">
			<div class="nav-wrapper">
				<a v-link="{ name: 'home' }" class="brand-logo center">Mi Escuela</a>
			</div>
		</nav>
	    
	    <nav class="deep-purple lighten-1">
	    	<div class="nav-wrapper">
		     	<form v-on:submit.prevent="searchSchool">
		          	<div class="input-field">
		           		<input id="search" 
		           		       type="search" 
		          		       v-model="search" 
		           		       placeholder="Busca tu escuela"/>
		           		<label for="search">
		           			<i class="material-icons">search</i>
		           		</label>
		           		<i class="material-icons">close</i>
		           	</div>
		       	</form>
	        </div>
	        <div class="container">
	        	<a href="#" data-activates="nav-mobile" class="button-collapse top-nav full hide-on-large-only">
	        		<i class="material-icons">menu</i>
	        	</a>
	        </div>
	    </nav>
	    <school :schools.sync="schools" :center.sync="center" :zoom.sync="zoom"></school>
		<map :center.sync="center"
		     :zoom.sync="zoom"
		     :options="options"
		     :style="{ height: map.height }">
		    <cluster :grid-size="gridSize" :styles="cluster_styles">
		     	<marker v-for="school in schools"
						:position.sync="school.position"
						:icon.sync="icon"
						:title.sync="school.name"
						@g-click="markerCliked(school)">
					<info-window :opened.sync="school.opened">
					   	<info-window-school :school.sync="school"></info-window-school>
				  	</info-window>
				</marker>
			</cluster>
	    </map>
		<!-- <pre>{{ $data | json }}</pre> -->
    </header>
    <footer-school></footer-school>
</template>

<script>

import School from './components/School'
import FooterSchool from './components/FooterSchool'
import InfoWindowSchool from './components/InfoWindowSchool'
import {Cluster, InfoWindow, load, Map, Marker} from 'vue-google-maps'

import './assets/css/escuelas.css'

load('AIzaSyD__96IlUzlRf46hSUAixxd6i95M_4s5do')

export default {

	data: function data() {
		return {
			map: {
				height: '600px',
				center: { 
					lat: 20.902, 
					lng: -103.640 
				},
				zoom: 8
			},
			schools: [],
			search: "",
			meta: {},
			center: { lat: 20.902, lng: -103.640 },
			zoom: 8,
			gridSize: 100,
			icon: {
	        	url: 'http://104.131.140.61/images/black-marker.png'
	        },
	        options: {
	        	scrollwheel: true
	        },
	        cluster_styles : [
			     {
			        url: 'http://104.131.140.61/images/m1.png',
			        height: 106,
			        width: 106,
			        textColor: '#44A8FA',
			        textSize: 24
			    }
			],
	        requests: {
	        	default : {
	        		options: {
	        			headers: {
	        				accept: 'application/json'
		        		},
		        		params: {
		        			include: 'details'
		        		},
		        		credentials: false
	        		},
	        		uri: 'schools'
	        	},
	        	schoolByName: {
	        		options: {
	        			headers: {
	        				accept: 'application/json'
		        		},
		        		params: {
		        			include: 'details',
		        			searchFields: 'nombre_ct:like',
		        			search: ''
		        		},
		        		credentials: false
	        		},
	        		uri: 'schools'
	        	} 
	        },
	        request: {

	        }
		};
	},

	components: {
		Cluster,
		FooterSchool,
		InfoWindow,
		InfoWindowSchool,
		Map,
		Marker,
	    School
	},

	ready: function() {	
		
		$('.button-collapse').sideNav({
	    	menuWidth: 350, // Default is 240
	        edge: 'left', // Choose the horizontal origin
	        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    });
	    
	    this.map.height = ($(window).height() - 128) + 'px';

		this.request = this.requests.default;

		this.$http.get(this.request.uri, this.request.options)
				  .then(this.responseSuccess, this.responseError);
	},
	methods: {
		responseSuccess(response) {
			this.schools = response.body.data.filter(this.filterSchool);
			this.meta = response.body.meta;
		},

		filterSchool(school) {
			school.position = { lat: school.latitude, lng: school.longitude};
			school.opened = false;
			school.name = this.firstUpperCase(school.name);
			var full_address = (school.address == 'undefined' ? 'Sin dirección' : this.firstUpperCase(school.address)) +
				 ', ' + (school.colony == 'undefined' ? 'Sin colonia' : 'Col. ' + this.firstUpperCase(school.colony)) + 
				 ', ' + (school.postal_code == 'undefined' ? 'Sin código postal' : 'C.P. ' + school.postal_code) /*+ 
				 ' '  + this.firstUpperCase(school.location)*/ + ', ' + this.firstUpperCase(school.municipality) + 
				 ', ' + this.firstUpperCase(school.state);
			school.full_address = full_address;	
			return school;
		},

		firstUpperCase(string) {
	    	var words = string.toLowerCase().split(' ');
	    	var except = ['de', 'el', 'la'];
	    	words = words.map(function(word, index) {
	    		if(except.indexOf(word) === -1)
	    			word = word.charAt(0).toUpperCase() + word.slice(1);
	    		return word;
	    	});
	    	return words.join(' ');
		},

		responseError(response) {

		},
	    markerCliked(school) {
	    	this.schools.forEach(function(school, index){
	    		school.opened = false;
	    	});
	        this.center = school.position;
	    },
	    searchSchool() {
	    	if(this.search != '')
	    	{
	    		this.request = this.requests.schoolByName;
				this.request.options.params.search =  '%' + this.search + '%';
				this.schools = [];
				this.$http.get(this.request.uri, this.request.options)
					  .then(this.responseSuccess, this.responseError);
				this.center = this.map.center;
				this.zoom = this.map.zoom;
				this.search = '';
	    	} 
		}
	}

};

</script>

<style scope>

</style>