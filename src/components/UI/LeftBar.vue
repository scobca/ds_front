<template>
    <div class="main">
        <h1 class="header">Меню</h1>
        <div class="buttons_container">
            <router-link to="/" class="button">
                <div class="block">
                    <p> Главная </p>
                </div>
            </router-link>

            <router-link to="/client/registration" class="button">
                <div class="block">
                    <p> Кнопка </p>
                </div>
            </router-link>
            <router-link to="" class="button">
                <div class="block">
                    <p> Кнопка </p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
    name: 'LeftBar',
    components: {}
})
export default class LeftBar extends Vue {

}
</script>

<style scoped>
.main {
    position: sticky;
    height: 100%;
    max-height: 13rem;
    min-width: 10rem;
    border-radius: 0 1rem 1rem 0;
    background-color: var(--container-bg-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.buttons_container {
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: flex-start;
}

.button {
    text-decoration: none;
    border-bottom: 1px solid var(--border-menu-color);
    height: 2.25rem;
    min-width: inherit;
    box-sizing: border-box;

    display: flex;
    text-indent: .5rem;
    justify-content: flex-start;
    align-items: center;
}

.button:hover .img {
    transform: scale(1.2);
}

.block {
    display: flex;
    align-items: center;
}

.img {
    height: 1.1rem;
    margin-left: .5rem;
    transform: scale(1);
    transition: 500ms;
}
</style>
