<template>
<div class="container">
    <div class="table_container">
        <TableSelector class="table_selector_container"/>
        <FirstTableUI v-if="this.$route.name == 'FHome'"/>
        <SecondTableUI v-if="this.$route.name == 'SHome'"/>
    </div>
    <div class="graphic_container">
        <p>graphic</p>
    </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FirstTableUI from "@/components/UI/FirstTableUI.vue";
import SecondTableUI from "@/components/UI/SecondTableUI.vue";
import TableSelector from "@/components/UI/TableSelector.vue";

@Options({
    name: 'HomeView',
    components: {TableSelector, SecondTableUI, FirstTableUI}
})
export default class HomeView extends Vue {

}
</script>

<style scoped>
.container {
    display: flex;
    gap: 2rem;
}

.table_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
}

.table_selector_container {
    margin: auto 1rem;
}

</style>
