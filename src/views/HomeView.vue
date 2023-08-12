<template>
<div class="container">
    <div class="table_container">
        <FirstTableUI/>
    </div>
    <div class="graphic_container">
        <p>graphic</p>
    </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FirstTableUI from "@/components/UI/FirstTableUI.vue";

@Options({
    name: 'HomeView',
    components: {FirstTableUI}
})
export default class HomeView extends Vue {

}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}
</style>
