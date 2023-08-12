<template>
<div class="container">
    <div class="menu">
        <LeftBar/>
    </div>
    <div class="router_container">
        <router-view/>
    </div>
</div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import LeftBar from "@/components/UI/LeftBar.vue";
import CoolButton from "@/components/UI/CoolButton.vue";

@Options({
    name: 'App',
    components: {CoolButton, LeftBar},
})
export default class App extends Vue {

}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: min-content 1fr;
}

.router_container {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: sticky;
    top: 0;
    height: 100vh;
}
</style>
