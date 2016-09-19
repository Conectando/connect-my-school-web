<template>
	<span class="info-gen"><b>Alumnos: </b> {{ statistic.students.total }}</span>
	<span class="info-gen"><b>Personal: </b> {{ statistic.employees.total }}</span>
	<span class="info-gen"><b>Grupos: </b> {{ statistic.groups }}</span>
</template>

<script>

export default {

	props: {
	    statistic: {
	      type: Object,
	      required: true
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