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
    selectedUser = 'Иванов Иван Иванович'
    plan = 100
    ready = 0.5
    fact = 50

    updated() {
        this.getName()
        console.log(this.selectedUser)
    }

    getName() {
        return this.selectedUser = this.$store.getters.getName
    }

    items = [
        {
          full_name: this.selectedUser,
          plan: this.plan,
          ready: this.ready,
          fact: this.fact,
        }
    ]

    chartData: any = {
        labels: [`Выбранный пользователь: ${this.selectedUser}`],
        datasets: [
            {
                label: 'План часов',
                backgroundColor: "rgb(169,113,229)",
                data: [this.items[0].plan]
            },
            {
                label: 'Факт часов',
                backgroundColor: "rgb(203,61,88)",
                data: [this.items[0].fact],
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
