<template>
    <div class="container">
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
            class="chart"
            options
        />
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Bar} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, scales} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

@Options({
    name: 'BarChart',
    components: {Bar}
})
export default class BarChart extends Vue {
    twelve = 12

    chartData: any = {
        labels: ['January', 'February', 'March'],
        datasets: [
            {
                label: 'План часов',
                backgroundColor: "rgba(168, 90, 50,1)",
                data: [50, 40, 23, 45, 67, 78, 23]
            },
            {
                label: 'Факт часов',
                backgroundColor: "rgba(50, 168, 80,1)",
                data: [50, 40, 78, 23, 23, 45, 67],
            },
        ]
    }

    chartOptions: any = {
        responsive: true,
        drawTicks: true,


    }
}
</script>

<style scoped>
.container {
    width: 30rem;
    background: var(--chart-bg-color) !important;
    border-radius: 1rem;
}
</style>
