<template>
  <div>
    <apexchart :options="options" :series="series" type="area" height="350px" />
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
          id: "multi-area",
          fontFamily: "Inter, Graphik, sans-serif",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          fontWeight: "600",
          borderRadius: "100%",
          fill: "transparent",
        },
        plotOptions: {
          area: {
            borderRadius: 5,
          },
        },
        stroke: {
          show: true,
          width: 3,
        },
        colors: ["#3B82F6"],
        grid: {
          borderColor: "#F3F4F6",
        },
      },
      series: [
        {
          name: "<b>$</b>",
          data: [80, 60, 100, 120, 100, 200, 50, 155, 140, 100, 120, 100],
        },
      ],

    };
  },
};
</script>
