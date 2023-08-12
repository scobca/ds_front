<template>
    <v-table theme="dark" class="table_block">
        <thead>
        <tr>
            <th class="text-left"> Участок </th>
            <th class="text-left"> План часов </th>
            <th class="text-left"> Изготовлено </th>
            <th class="text-left"> Факт часов </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in items"
            :key="item.region"
        >
            <td>{{ item.region }}</td>
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
    name: 'TableUI',
    components: {Bar}
})
export default class FirstTableUI extends Vue {
    items = [
        {
            region: 1,
            plan: 731.29,
            ready: 0.3,
            fact: 222
        },
        {
            region: 2,
            plan: 731.29,
            ready: 0.3,
            fact: 500
        },
        {
            region: 3,
            plan: 731.29,
            ready: 0.3,
            fact: 32
        },
        {
            region: 4,
            plan: 731.29,
            ready: 0.3,
            fact: 43
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
