<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      datasets: [
        {
          label: "Incidentes",
          fill: false,
          borderColor: "#EF6C00",
          data: [10, 15, 13, 14, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 15, 80]
        },
        {
          label: "Problemas",
          borderColor: "#C62828",
          fill: false,
          data: [0, 22, 23, 24, 25, 26, 27, 28, 29, 20, 21, 22, 23, 24, 25, 80]
        },
        {
          label: "Tareas",
          borderColor: "#4527A0",
          fill: false,
          data: [15, 52, 53, 54, 55, 56, 57, 58, 59, 50, 51, 52, 53, 54, 55, 80]
        },
        {
          label: "Consultas",
          borderColor: "#004D40",
          fill: false,
          data: [28, 32, 43, 24, 45, 56, 17, 28, 39, 40, 11, 32, 23, 54, 65, 80]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      fill: true
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
