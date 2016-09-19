<template>
	<div class="info-windows-school">
		<div class="row">
	    	<div class="col s12">
			    <div class="card hoverable">
				    <div class="card-image waves-effect waves-block waves-light">
				    	<img src="http://ciudadania-express.com/wp-content/uploads/2011/07/cuealumnosjalisco.jpg">
				        <span class="card-title activator">
				        	{{ school.name }}
				        	<i class="material-icons right">more_vert</i>
				        </span>
				    </div>
				    <div class="card-content">
				    	<p class="valign">
					    	<i class="tiny material-icons purple-text text-darken-3">location_on</i>
					    	{{ school.full_address }}
					    </p> <br/>
					    <div class="chip" v-for="turn in turns(school)">{{ turn }}</div>
				    </div>
				    <div class="card-action">
				        <a v-link="{ name: 'schools.show', params: { schoolId: school.id }}" 
				           class="right">
				        	Conocer más
				        </a>
				        <br/>
					</div>
				    <div class="card-reveal">
				    	<span class="card-title grey-text text-darken-4">
				    		Información de la escuela<i class="material-icons right">close</i>
				    	</span>
				    	<div v-for="detail in school.details.data">
				    		<div class="divider"></div>
				    		<div class="section">
								<h6>{{ detail.level }}</h6>
							    <p class="valign">
							    	<i class="tiny material-icons purple-text text-darken-3">work</i>
							    	&nbsp;Clave de centro de trabajo: {{ detail.key }}
							    </p>
							    <p class="valign">Turno: {{ detail.turn }}</p>
							    <p class="valign">Sostenimiento: {{ detail.sustenance }}</p>
							    <p class="valign">
							    	<i class="tiny material-icons purple-text text-darken-3">phone</i>
							    	Telefono: {{ detail.telephone }}
							    </p>
							    <p class="valign">
							    	<i class="tiny material-icons purple-text text-darken-3">email</i>
							    	Correo electronico: {{ detail.email }}
							    </p>
							</div>
				    	</div>
				    </div>
				</div>
	    	</div>
	    </div>
	</div>    
</template>

<script>

// import StarRating from './StarRating'

export default {
	props: {
	    school: {
	      type: Object,
	      required: true,
	      twoWay: true
	    }
	},
	components: {
		// StarRating,
	},
	methods: {
		turns(school) {
			var turns = [];
			
			if(school.details !== 'undefined')
			{
				school.details.data.forEach(function(detail, index) {
		        	turns.push(detail.turn);
		      	});

				turns = turns.filter(function(level, index) {
		        	return turns.indexOf(level) == index;
		      	});   

			}

			return turns;
		}, 
		closeInfoWindows(event) {
			alert(event);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.card .card-image .card-title {
		background-color: rgba(0,0,0,0.5);
		padding: 5px 20px;
		width: 100%;
	}
</style>
