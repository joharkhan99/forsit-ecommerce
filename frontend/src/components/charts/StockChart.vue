<template>
  <div>
    <apexchart :options="options" :series="series" type="bar" height="350px" />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      options: {
        chart: {
          id: "grouped-bar",
          fontFamily: "Inter, Graphik, sans-serif",
        },
        xaxis: {
          enabled: false,
          categories: [
            "",
          ],
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
          fontWeight: "600",
          borderRadius: "100%",
          fill: "transparent",
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: "50%",
          },
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        colors: ["#4ADE80", "#FACC15", "#F87171"],
        grid: {
          borderColor: "#F3F4F6",
        },
      },
      series: [
        {
          name: "High",
          data: [80],
        },
        {
          name: "Average",
          data: [200],
        },
        {
          name: "Low",
          data: [80],
        },
      ],
    };
  },
};
</script>