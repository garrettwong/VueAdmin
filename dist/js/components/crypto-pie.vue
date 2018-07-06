<template>
    
    <div class="box box-default">
        <div class="box-header with-border">
            <i class="fa fa-warning"></i>

            <h3 class="box-title">Crypto</h3>
        </div>
        
        <div class="box-body">
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    </div>
</template>

<script>
// import Chart from 'chart.js'
import Chart from 'chart.js/Chart.min.js'

export default {
  props: [],

  data() {
    return {};
  },

  methods: {
      
      
  },

  mounted: function() {
    
    setTimeout(function() {

var DEFAULT_DATASET_SIZE = 7;
		var addedCount = 0;
		var color = Chart.helpers.color;
		var bubbleChartData = {
			animation: {
				duration: 10000
			},
			datasets: [{
				label: 'My First dataset',
				backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
				borderColor: window.chartColors.red,
				borderWidth: 1,
				data: [{
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}]
			}, {
				label: 'My Second dataset',
				backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
				borderColor: window.chartColors.orange,
				borderWidth: 1,
				data: [{
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}, {
					x: randomScalingFactor(),
					y: randomScalingFactor(),
					r: Math.abs(randomScalingFactor()) / 5,
				}]
			}]
		};
        
        var ctx = document.getElementById('myChart').getContext('2d');
    
        window.myChart = new Chart(ctx, {
            type: 'bubble',
            data: bubbleChartData,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'Chart.js Bubble Chart'
                },
                tooltips: {
                    mode: 'point'
                }
            }
        });


    }, 1000)
  },

  computed: {}
};
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
</style>