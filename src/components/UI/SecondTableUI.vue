<template>
    <v-table theme="dark" class="table_block">
        <thead>
        <tr>
            <th class="text-left"> ФИО </th>
            <th class="text-left"> План часов </th>
            <th class="text-left"> Изготовлено </th>
            <th class="text-left"> Факт часов </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in items"
            :key="item.full_name"
        >
            <td>{{ item.full_name }}</td>
            <td>{{ item.plan }}</td>
            <td>{{ item.ready }}</td>
            <td>{{ item.fact }}</td>
        </tr>
        </tbody>
    </v-table>
    <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
        class="chart"
        options
    />
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import {Bar} from "vue-chartjs";
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, scales} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

@Options({
    name: 'SecondTableUI',
    components: {Bar},
})
export default class SecondTableUI extends Vue {
    items = [
        {
          full_name: 'Иванов Иван Иванович',
          plan: 10,
          ready: 0.5,
          fact: 5,
        },
        {
          full_name: 'Иванов Иван Иванович',
          plan: 124,
          ready: 0.5,
          fact: 54,
        },
        {
          full_name: 'Иванов Иван Иванович',
          plan: 211,
          ready: 0.5,
          fact: 100,
        },
        {
          full_name: 'Иванов Иван Иванович',
          plan: 100,
          ready: 0.5,
          fact: 80,
        },
    ]

    chartData: any = {
        labels: ['1', '2', '3', '4'],
        datasets: [
            {
                label: 'План часов',
                backgroundColor: "rgb(169,113,229)",
                data: [this.items[0].plan, this.items[1].plan, this.items[2].plan, this.items[3].plan]
            },
            {
                label: 'Факт часов',
                backgroundColor: "rgb(203,61,88)",
                data: [this.items[0].fact, this.items[1].fact, this.items[2].fact, this.items[3].fact],
            },
        ]
    }

    chartOptions: any = {
        responsive: true,
        color: 'white'
    }
}
</script>

<style scoped>
.table_block {
    border-radius: 1rem;
    background: var(--container-bg-color);
}
</style>
