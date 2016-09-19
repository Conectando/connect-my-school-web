<template>
	<div class="star-rating">
		<span>{{ label }}</span>
        <label class="star-rating-star" 
        	   v-for="rating in ratings" 
        	   :class="computedClass"
        	   :style="computedStyle(rating)"
        	   v-on:click="set(rating)" 
        	   v-on:mouseover="star_over(rating)" 
        	   v-on:mouseout="star_out">
        	<input class="star-rating star-rating-checkbox"
	        	   type="radio"
	        	   :value="rating" 
	        	   :name="name"
	        	   v-model="value" 
	        	   :disabled="disabled">
	       	<slot>
	       		<i class="material-icons">star</i>
	       	</slot>
       	</label>
    </div>
</template>

<script>
export default {
	props: {
    	name: String,
	    value: null,
	    disabled: {
	    	type: Boolean,
	    	default: false
	    },
	    required: {
	    	type: Boolean,
	    	default: false
	    },
	    color: {
            type: String,
        	default: '#ffd600'
        },
        label: {
        	type: String,
        	default: ''
        }
	},
	/*
	 * Initial state of the component's data.
	 */
	data: function() {
		return {
	    	temp_value: null,
	      	ratings: [1, 2, 3, 4, 5]
	    };
	},

	computed: {
		
	},

	methods: {

		computedClass: function () {
			var classArray = [];

			if(this.disabled)
            	classArray.push('is-disabled');
			
			return classArray;
        },

        computedStyle: function (rating) {
			var styleObject = {};        

            if((this.value >= rating) && this.value != null)
            	styleObject.color = this.color;

            return styleObject;
        },

	    /*
	     * Behaviour of the stars on mouseover.
	     */
	    star_over: function(index) {
	      	var self = this;
	      	if (!this.disabled) {
	        	this.temp_value = this.value;
	        	return this.value = index;
	      	}
	    },

	    /*
	     * Behaviour of the stars on mouseout.
	     */
	    star_out: function() {
	    	var self = this;

	    	if (!this.disabled) {
	        	return this.value = this.temp_value;
	      	}
	    },

	    /*
	     * Set the rating of the score
	     */
	    set: function(value) {
	    	var self = this;
	    	if (!this.disabled) {
	        	this.temp_value = value;
	        	return this.value = value;
	      	}
	    }
	}
}
</script>

<style scoped>	
	.star-rating-checkbox {
		position: absolute;
		overflow: hidden;
		clip: rect(0 0 0 0);
		height: 1px;
		width: 1px;
		margin: -1px;
		padding: 0;
		border: 0;
	}
	.star-rating-star {
		display: inline-block;
		padding: 3px;
		vertical-align: middle;
		line-height: 1;
		font-size: 2em;
		color: #ABABAB;
		transition: color .2s ease-out;
	}
	.star-rating-star:hover {
		cursor: pointer;
	}
	.star-rating-star.is-disabled:hover {
		cursor: default;
	}
</style>