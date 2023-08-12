<template>
    <div class="container">
        <v-btn-toggle v-model="toggle" class="btn_container" color="primary" variant="outlined">
            <v-btn class="button"> 1 </v-btn>
            <v-btn class="button"> 2 </v-btn>
            <v-btn class="button"> 3 </v-btn>
            <v-btn class="button"> 4 </v-btn>
        </v-btn-toggle>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";

@Options({
    name: 'ButtonSelector',
})
export default class ButtonSelector extends Vue {
    toggle: boolean | null = null
}
</script>

<style scoped>

.btn_container {
    background-color: var(--container-bg-color) !important;
    display: grid;
    grid-template-columns: min-content min-content;
    width: 12rem;
}

.button {
    width: 6rem;
}
</style>
