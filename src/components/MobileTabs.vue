<template>
    <nav class="tab-wrap">
        <div class="tabs">
            <RouterLink class="button" :to="{ name: 'Home' }">
                <a title="Home" role="button">
                    <i class="mdi mdi-home"></i>
                </a>
            </RouterLink>
            <RouterLink class="button" :to="{ name: 'Projects' }">
                <a title="Projects" role="button">
                    <i class="mdi mdi-file-cabinet"></i>
                </a>
            </RouterLink>
            <RouterLink class="button" :to="{ name: 'Contact' }">
                <a title="Info" role="button">
                    <i class="mdi mdi-information-box"></i>
                </a>
            </RouterLink>
        </div>
    </nav>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.tab-wrap {
    background-color: var(--darkest-green);
    color: var(--seafoam);
    transition: 0.2 ease-out;
    padding: 0.25rem 0rem;

    .tabs {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .button {
            font-size: 1.25em;
            background-color: var(--darkest-green);
            color: var(--seafoam);
            padding: 0.25rem 1.5rem;
            border-radius: 3.5px;
            transition: 0.2s ease-in-out;

            &:hover {
                background-color: var(--seafoam);
                color: var(--darkest-green);

            }
        }
    }
}
</style>