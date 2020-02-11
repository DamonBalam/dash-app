<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  mounted() {
    this.renderLineChart();
    // Overwriting base render method with actual data.
  },
  methods: {
    renderLineChart: function() {
      this.renderChart(
        {
          labels: ["Abierto", "Atendido", "Revisión", "Cerrado"],
          datasets: [
            {
              label: "% de avance",
              backgroundColor: [
                "#F4511E",
                "rgba(255, 206, 86, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(255, 99, 132, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 99, 132, 0.6)"
              ],
              data: [25, 25, 25, 25],
              borderWidth: 1,
              borderColor: "#777",
              hoverBorderWidth: 3,
              hoverBorderColor: "#000",
              yAxis: 3
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
            text: "Avances de ",
            fontSize: 25
          },
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                // barThickness: 6,
                // maxBarThickness: 8,
                minBarLength: 2
                // gridLines: {
                //     offsetGridLines: true
                // }
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
