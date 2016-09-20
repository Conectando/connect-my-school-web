<template>
	<label class="info-middle">
		<i class="small material-icons purple-text text-darken-3">work</i> 
	</label>
	Clave de centro de trabajo: {{ detail.cct }}<br/>
	<label class="info-middle">
	 	<i class="small material-icons school-phone">phone</i> 
	</label> 
	{{ detail.telephone }}<br/>
	<label class="info-middle">
		<i class="small material-icons school-email">email</i>
	</label> 
	{{ detail.email }}
	<star-rating label="Enseñanza" 
				 color="#6A1B9A"
				 value="4"
				 :disabled="true"></star-rating>
	<star-rating label="Segura"
				 color="#6A1B9A"
	     	 	 value="4" 
	       		 :disabled="true">
	   	<i class="material-icons">verified_user</i></star-rating>
	<star-rating label="Hambiente"
				 color="#6A1B9A"
			 	 value="5" 
				 :disabled="true">
		<i class="material-icons text-pink">favorite</i></star-rating>
</template>

<script>

// import StarRating from './StarRating'

export default {

	props: {
	    detail: {
	      type: Object,
	      required: true,
	      twoWay: true
	    }
	},

	data: function data() {
		return {

		};
	},

	components: {
		// StarRating,
	},

	ready: function() {

	},
	methods: {

	}

};

</script>

<style scope>
</style>