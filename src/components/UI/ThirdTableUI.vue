<template>
    <v-table theme="dark" class="table_block">
        <thead>
        <tr>
            <th class="text-left"> Участок </th>
            <th class="text-left"> План операций </th>
            <th class="text-left"> Назначено </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="item in items"
            :key="item.region"
        >
            <td>{{ item.region }}</td>
            <td>{{ item.plan }}</td>
            <td>{{ item.assigned }}</td>
        </tr>
        </tbody>
    </v-table>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'ThirdTableUI',
})
export default class ThirdTableUI extends Vue {
    items = [
        {
            region: '1',
            plan: 296,
            assigned: '2.7%',
        },
        {
            region: '2',
            plan: 296,
            assigned: '2.7%',
        },
        {
            region: '3',
            plan: 296,
            assigned: '2.7%',
        },
        {
            region: '4',
            plan: 296,
            assigned: '2.7%',
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
