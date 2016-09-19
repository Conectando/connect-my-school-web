<template>
	<header-school></header-school>

	<div class="container">
		
		<div class="row">
	    	<div class="col s12 center-align">
	      		<h4>{{ school.name }}</h4>
	    	</div> 
	  	</div>
	  	
	  	<div class="row">
	    	<div class="col s12 m12">

	    		<md-tabs :active.sync="tab" class="z-depth-1">
					<md-tab :name="'detail' + detail.id" v-for="detail in school.details">
						<a class="text-purple text-darken-3">{{ detail.level }}</a>
					</md-tab>
				</md-tabs>

		    	<div class="card">
		        	<div class="card-content">
			        	
			        	<div class="row">
			        		<div class="col s12 m6">
			        			<map :center.sync="map.center"
									 :zoom.sync="map.zoom"
									 :options="map.options"
									 :style="{ height: map.height }">
									<marker :position.sync="school.position"
											:icon.sync="map.icon"
											:title.sync="school.name">
									</marker>	 	
								</map>
			        		</div>
				        	<div class="col s12 m6">

				        		<label class="info-middle">
				        			<i class="small material-icons school-direction">room</i>
				        		</label>
				        		{{ school.full_address }}<br/>
								<detail-school :detail.sync="detail" 
											   v-if="tab == 'detail' + detail.id" 
								  			   v-for="detail in school.details">
								</detail-school>
						    </div>
			        	</div>
		        	</div>
		        	<div class="card-action center-align">
			        	<statistic-detail v-if="tab == 'detail' + detail.id" 
								  		  v-for="detail in school.details"
								  		  :statistic="detail.statistic">
						</statistic-detail>
			        </div>
		     	</div>
	    	</div>
	  	</div>
	</div>

	<!-- More info -->
	<div class="container">
	  <div class="row">
	    <div class="col s12 m6">
	      <div class="z-depth-1">
	        <table class="bordered highlight">
	          <thead class="purple darken-3">
	            <tr>
	                <th data-field="id">Instalaciones</th>
	                <th data-field="name"></th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <td>Salones</td>
	              <td>20</td>
	            </tr>
	            <tr>
	              <td>Laboratorios</td>
	              <td>5</td>
	            </tr>
	          </tbody>
	        </table>
	      </div>
	    </div>
	    <div class="col s12 m6">
	      <div class="z-depth-1">
	        <table class="bordered highlight">
	          <thead class="purple darken-3">
	            <tr>
	                <th data-field="id">Servicios</th>
	                <th data-field="name"></th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <td>Luz eléctrica</td>
	              <td>Si</td>
	            </tr>
	            <tr>
	              <td>Internet</td>
	              <td>No</td>
	            </tr>
	          </tbody>
	        </table>
	      </div>
	    </div>
	  </div>
	  <div class="row">
	    <div class="col s12 m6">
	      <div class="z-depth-1">
	        <table class="bordered highlight">
	          <thead class="purple darken-3">
	            <tr>
	                <th data-field="id">Enseñanza</th>
	                <th data-field="name"></th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <td>Docentes</td>
	              <td>25</td>
	            </tr>
	            <tr>
	              <td>Preparación</td>
	              <td>8.5</td>
	            </tr>
	          </tbody>
	        </table>
	      </div>
	    </div>
	    <div class="col s12 m6">
	      <div class="z-depth-1">
	        <table class="bordered highlight">
	          <thead class="purple darken-3">
	            <tr>
	                <th data-field="id">Población estudiantil</th>
	                <th data-field="name"></th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <td>Promedio general</td>
	              <td>8.7</td>
	            </tr>
	            <tr>
	              <td>Mujeres (%)</td>
	              <td>55</td>
	            </tr>
	          </tbody>
	        </table>
	      </div>
	    </div>
	  </div>
	  <div class="row">
	    <div class="col s12 m12">
	      <div class="z-depth-1">
	        <table class="bordered highlight">
	          <thead class="purple darken-3">
	            <tr>
	                <th data-field="id">Objetivos y logros de la escuela</th>
	                <th data-field="name"></th>
	                <th></th>
	            </tr>
	          </thead>
	          <thead class="grey lighten-1">
	            <tr>
	                <th data-field="id">Objetivo</th>
	                <th data-field="name">Estatus</th>
	                <th data-field="name">Progreso</th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr>
	              <td>Programa de capacitación a maestros</td>
	              <td>Activa</td>
	              <td>85%</td>
	            </tr>
	            <tr>
	              <td>Incrementar las becas para los alumnos</td>
	              <td>Activa</td>
	              <td>79%</td>
	            </tr>
	            <tr>
	              <td>Restauración del patio</td>
	              <td>Pendiente</td>
	              <td>15%</td>
	            </tr>
	          </tbody>
	        </table>
	      </div>
	    </div>
	  </div>
	</div>

	<!-- <pre> {{ $data | json }} </pre> -->

	<footer-school></footer-school>

</template>

<script>

import FooterSchool from './components/FooterSchool'
import HeaderSchool from './components/HeaderSchool'
import DetailSchool from './Components/DetailSchool'
import StatisticDetail from './Components/StatisticDetail'
import {Map, Marker} from 'vue-google-maps'

export default {

	data: function data() {
		return {
			tab: null,
			map: {
				center: { 
					lat: 20.902, 
					lng: -103.640 
				},
				height: '244px',
				icon: {
		        	url: 'http://104.131.140.61/images/black-marker.png'
		        },
				options: {
		        	scrollwheel: true
		        },
				zoom: 16
			},
			school: {},
	        request: {
	        	options: {
	        		headers: {
	        			accept: 'application/json'
		       		},
		       		params: {
		       			include: 'details.indicator,details.plan,details.statistic',
		       			schoolId: 0
		       		},
		       		credentials: false
	        	},
	        	uri: 'schools{/schoolId}'
	        }
		};
	},

	components: {
		FooterSchool,
		HeaderSchool,
		Map,
		Marker,
		DetailSchool,
		StatisticDetail,
	},

	ready: function() {	
		
		$('.button-collapse').sideNav({
	    	menuWidth: 350, // Default is 240
	    	edge: 'left', // Choose the horizontal origin
	    	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    });

	    var resource = this.$resource(this.request.uri);

		this.request.options.params.schoolId = this.$route.params.schoolId;;

	    // GET schools{/id}
		resource.get(this.request.options.params)
				.then(this.responseSuccess, this.responseError);

	},
	methods: {
		
		responseSuccess(response) {
			this.school = this.filterSchool(response.body.data);
			this.map.center = this.school.position;
		},

		filterSchool(school) {
			school.position = { lat: school.latitude, lng: school.longitude};
			school.name = this.firstUpperCase(school.name);
			var full_address = (school.address == 'undefined' ? 'Sin dirección' : this.firstUpperCase(school.address)) +
				 ', ' + (school.colony == 'undefined' ? 'Sin colonia' : 'Col. ' + this.firstUpperCase(school.colony)) + 
				 ', ' + (school.postal_code == 'undefined' ? 'Sin código postal' : 'C.P. ' + school.postal_code) /*+ 
				 ' '  + this.firstUpperCase(school.location)*/ + ', ' + this.firstUpperCase(school.municipality) + 
				 ', ' + this.firstUpperCase(school.state);
			school.full_address = full_address;	
			school.details = school.details.data;
			this.tab = 'detail' + school.details[0].id;
			return school;
		},

		firstUpperCase(string) {
	    	var words = string.toLowerCase().split(' ');
	    	var except = ['de', 'el', 'la', 'del'];
	    	words = words.map(function(word, index) {
	    		if(except.indexOf(word) === -1)
	    			word = word.charAt(0).toUpperCase() + word.slice(1);
	    		return word;
	    	});
	    	return words.join(' ');
		},

		responseError(response) {
			this.$router.go('/404');
		},
	}

};

</script>

<style scope>
	map {
		display: block;
		width: 100%;
	}
	.info-middle {
		display: inline-block;
		vertical-align: middle;
		line-height: 1;
	}
	.card {
		margin: 0px;
	}
	.tabs .tab a {
		color: #6A1B9A;
		cursor: pointer;
	}
	.tabs .tab a:hover {
		color: #8e24aa;
	}
	.tabs .indicator {
		background-color: #6A1B9A; 
	}
</style>