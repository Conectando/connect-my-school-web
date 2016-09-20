<template>
	<span class="info-gen"><b>Alumnos: </b> {{ statistic.students === undefined ? 0 : statistic.students.total }}</span>
	<span class="info-gen"><b>Personal: </b> {{ statistic.employees === undefined ? 0 : statistic.employees.total }}</span>
	<span class="info-gen"><b>Grupos: </b> {{ statistic.groups === undefined ? 0 : statistic.groups }}</span>
</template>

<script>

export default {

	props: {
	    statistic: {
	      type: Object,
	      required: true,
	      default: {
	      	students: {
	      		total: 0
	      	},
	      	employees: {
	      		total: 0
	      	},
	      	groups: 0
	      }
	    }
	},

	data: function data() {
		return {

		};
	},

	components: {

	},

	ready: function() {
		this.statistic = this.filterStatistic(this.statistic);
	},
	methods: {
		filterStatistic(statistic)
		{
			statistic = statistic.data;
			return statistic;
		}
	}

};

</script>

<style scope>
</style>