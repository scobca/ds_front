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
            <td>{{ item.hours }}</td>
            <td>{{ item.ready }}</td>
            <td>{{ item.fact }}</td>
        </tr>
        </tbody>
    </v-table>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
    name: 'SecondTableUI',
})
export default class SecondTableUI extends Vue {
    items = [
        {
          full_name: 'Иванов Иван Иванович',
          hours: 10,
          ready: 0.5,
          fact: 5,
        },
        {
          full_name: 'Иванов Иван Иванович',
          hours: 10,
          ready: 0.5,
          fact: 5,
        },
        {
          full_name: 'Иванов Иван Иванович',
          hours: 10,
          ready: 0.5,
          fact: 5,
        },
    ]
}
</script>

<style scoped>
.table_block {
    border-radius: 1rem;
    background: var(--container-bg-color);
}
</style>
