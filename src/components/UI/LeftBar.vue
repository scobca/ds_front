<template>
    <div class="main">
        <h1 class="header">Меню</h1>
        <div class="buttons_container">
            <div class="block">
                <h4 class="block_header">Ваше ФИО</h4>
                <CoolInput :placeholder="'ФИО'" class="input"/>
            </div>
            <div class="block">
                <h4 class="block_header">Начало периода</h4>
                <vue-date-picker
                    class="datepicker dp__theme_dark"
                    :time-picker="false"
                    v-model="this.startData"
                    :placeholder="'Дата начала'"
                />
            </div>
            <div class="block">
                <h4 class="block_header">Конец периода</h4>
                <vue-date-picker
                    class="datepicker dp__theme_dark"
                    :time-picker="false"
                    v-model="this.endData"
                    :placeholder="'Дата конца'"
                />
            </div>
            <div class="block">
                <h4 class="block_header">Номер отдела</h4>
                <ButtonSelector/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CoolInput from "@/components/UI/CoolInput.vue";
import ButtonSelector from "@/components/UI/ButtonSelector.vue";
import VueDatePicker from '@vuepic/vue-datepicker';


@Options({
    name: 'LeftBar',
    components: {CoolInput, ButtonSelector, VueDatePicker}
})
export default class LeftBar extends Vue {
    startData: number | null = null
    endData: number | null = null
}
</script>

<style scoped>
.main {
    position: sticky;
    height: 100%;
    max-height: 25rem;
    width: 14rem;
    border-radius: 0 1rem 1rem 0;
    background-color: var(--container-bg-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.buttons_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0;
    gap: 1rem;
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
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
}

.img {
    height: 1.1rem;
    margin-left: .5rem;
    transform: scale(1);
    transition: 500ms;
}

.header {
    margin: 0 auto 1rem;
}

.datepicker {
    background-color: var(--container-bg-color);
    width: 12rem;
    margin: 0 3rem;
}
</style>
