<template>
  <div>
    <apexchart :options="options" :series="series" type="bar" height="350px" />
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

console.log(props.chartData);

const options = {
  chart: {
    id: "grouped-bar",
    fontFamily: "Inter, Graphik, sans-serif",
  },
  xaxis: {
    enabled: false,
    categories: props.chartData.months,
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
      borderRadius: 6,
      columnWidth: "60%",
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  colors: ["#4ADE80", "#FACC15", "#F87171"],
  grid: {
    borderColor: "#F3F4F6",
  },
}

// console.log(props.chartData.High);

const series = [
  {
    name: "High",
    data: props.chartData.data.High,
  },
  {
    name: "Average",
    data: props.chartData.data.Average,
  },
  {
    name: "Low",
    data: props.chartData.data.Low,
  },
];
</script >

<script>
export default {
  components: {
    apexchart: VueApexCharts,
  },
};
</script>