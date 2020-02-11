<script>
import { Bar } from "vue-chartjs";
import "chartjs-plugin-labels";
export default {
  extends: Bar,
  mounted() {
    this.renderLineChart();
    // Overwriting base render method with actual data.
  },
  methods: {
    renderLineChart: function() {
      this.renderChart(
        {
          labels: [
            "SITIO 1",
            "SITIO 2",
            "SITIO 3",
            "SITIO 4",
            "SITIO 5",
            "SITIO 6",
            "SITIO 7",
            "SITIO 8",
            "SITIO 9",
            "SITIO 10"
          ],
          datasets: [
            {
              label: "INC",
              data: [47.8, 20, 14, 33, 19, 35, 25, 25, 5, 15],
              backgroundColor: "#FF6D00" // green
            },
            {
              label: "PRO",
              data: [20.7, 15, 36, 10, 35, 20, 30, 15, 25, 10],
              backgroundColor: "#E53935" // yellow
            },
            {
              label: "TAR",
              data: [11.4, 10, 10, 15, 15, 15, 20, 15, 15, 10],
              backgroundColor: "#5E35B1" // red
            },
            {
              label: "CON",
              data: [10.1, 25, 30, 25, 35, 25, 15, 15, 35, 35],
              backgroundColor: "#00897B" // green
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          title: {
            display: true,
            text: "TOP 10 ",
            fontSize: 25
          },
          plugins: {
            labels: {
              render: "percentage",
              fontColor: "black",
              arc: true,
              precision: 2
            }
          },
          scales: {
            xAxes: [
              {
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true
              }
            ]
          }
        }
      );
    }
  },
  watch: {
    data: function() {
      this.$data._chart.destroy();
      this.renderLineChart();
    }
  }
};
</script>
