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
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'TableUI'
})
export default class FirstTableUI extends Vue {
    items = [
        {
            region: 1,
            plan: 731.29,
            ready: 0.3,
            fact: 2
        },
        {
            region: 2,
            plan: 731.29,
            ready: 0.3,
            fact: 2
        },
        {
            region: 3,
            plan: 731.29,
            ready: 0.3,
            fact: 2
        },
        {
            region: 4,
            plan: 731.29,
            ready: 0.3,
            fact: 2
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
