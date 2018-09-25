<template>
    
    <div class="box box-default">
      <div class="box-header with-border">
          <i class="fa fa-warning"></i>

          <h3 class="box-title">{{this.chartTitle}}</h3>
      </div>
      
      <div class="box-body">
        <canvas id="line-styles-chart"></canvas>

        <button id="randomizeLineStylesChartData">Randomize Data</button>
      </div>
    </div>

</template>

<script>
// import Chart from 'chart.js'
import Chart from "chart.js";
import ChartJsUtils from "./chartjs-utils.js";

export default {
  props: {
    chartTitle: ""
  },

  data() {
    return {};
  },

  methods: {
    setupChart: title => {
      console.log(this);

      let config = {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
          ],
          datasets: [
            {
              label: "Unfilled",
              fill: false,
              backgroundColor: ChartJsUtils.chartColors.blue,
              borderColor: ChartJsUtils.chartColors.blue,
              data: [
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor()
              ]
            },
            {
              label: "Dashed",
              fill: false,
              backgroundColor: ChartJsUtils.chartColors.green,
              borderColor: ChartJsUtils.chartColors.green,
              borderDash: [5, 5],
              data: [
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor()
              ]
            },
            {
              label: "Filled",
              backgroundColor: ChartJsUtils.chartColors.red,
              borderColor: ChartJsUtils.chartColors.red,
              data: [
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor(),
                ChartJsUtils.randomScalingFactor()
              ],
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: title
          },
          tooltips: {
            mode: "index",
            intersect: false
          },
          hover: {
            mode: "nearest",
            intersect: true
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Month"
                }
              }
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "Value"
                }
              }
            ]
          }
        }
      };

      window.onload = function() {
        var ctx = document.getElementById("line-styles-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
      };

      document
        .getElementById("randomizeLineStylesChartData")
        .addEventListener("click", function() {
          config.data.datasets.forEach(function(dataset) {
            dataset.data = dataset.data.map(function() {
              return ChartJsUtils.randomScalingFactor();
            });
          });

          myLine.update();
        });
    }
  },

  mounted: function() {
    console.log(this);

    setTimeout(() => {
      this.setupChart(this.chartTitle);
    }, 0);
  },

  computed: {}
};
</script>


<style>
canvas {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>