<template>
  <div>
    <apexchart :options="options" :series="series" type="area" height="350px" />
  </div>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts';
import { defineProps } from 'vue';

const props = defineProps({
  chartData: {
    required: true,
    type: Object,
  }
});

const options = {
  chart: {
    id: "multi-area",
    fontFamily: "Inter, Graphik, sans-serif",
  },
  xaxis: {
    categories: props.chartData.months,
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
};

const series = [
  {
    name: "<b>$</b>",
    data: props.chartData.data,
  },
];
</script>

<script>
export default {
  components: {
    apexchart: VueApexCharts,
  },
};
</script>
