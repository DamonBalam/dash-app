<script>
import { Doughnut } from "vue-chartjs";
import "chartjs-plugin-labels";
export default {
  extends: Doughnut,
  props: ["title", "data"],
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
              label: "Actividades",
              backgroundColor: ["#F4511E", "#F9A825", "#4DB6AC", "#00695C"],
              data: this.data,
              borderWidth: 1,
              borderColor: "#fff",
              hoverBorderWidth: 3,
              hoverBorderColor: "#fff"
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true
          },
          title: {
            display: true,
            text: this.title,
            fontSize: 22
          },
          plugins: {
            labels: {
              render: "percentage",
              fontColor: "white",
              precision: 2
            }
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
