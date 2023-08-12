<template>
    <div class="container">
        <div class="button_container">
            <CoolButton class="button" @click="this.$router.push({name: 'FHome'})">План-факта выполнения операций</CoolButton>
            <CoolButton class="button" @click="this.$router.push({name: 'SHome'})">План-факта выполнения операций</CoolButton>
            <CoolButton class="button" @click="this.$router.push({name: 'THome'})">Процент распределения сотрудников по операциям</CoolButton>
        </div>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import CoolButton from "@/components/UI/CoolButton.vue";

@Options({
    name: 'TableSelector',
    components: {CoolButton},
})
export default class TableSelector extends Vue {
    toggle: boolean | null = null
}
</script>

<style scoped>
.button_container {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    gap: 2rem;
}

.button {
    width: 15rem;
    height: 3.5rem;
}
</style>
