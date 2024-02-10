<template>
    <div class="modal fade" id="projectModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div v-if="project" class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="projectModalLabel">{{ project.title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ul>
                        <li v-for="info in project.info">
                            {{ info }}</li>
                    </ul>
                </div>
                <div class="modal-footer align-items-center justify-content-between">

                    <div v-if="project.liveDemo == true">
                        <a :href="project.demoUrl" class="demo-btn">Live Demo</a>
                    </div>
                    <div v-if="project.githubUrl">
                        <a :href="project.githubUrl" class="git-btn">See on Github</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';


export default {
    setup() {
        return {
            project: computed(() => AppState.activeProject)
        }
    }
};
</script>


<style lang="scss" scoped>
.demo-btn {
    background-color: var(--darkest-green);
    color: var(--seafoam);
    padding: 0.5rem 1.5rem;
    font-size: 1.1em;
    transition: 0.2s ease-in-out;
    border-radius: 1.25rem;

    &:hover {
        color: var(--darkest-green);
        background-color: var(--seafoam);
    }
}

.git-btn {
    background-color: var(--dark-green);
    color: var(--lightest-teal);
    padding: 0.5rem 1.5rem;
    font-size: 1.1em;
    transition: 0.2s ease-in-out;
    border-radius: 1.25rem;

    &:hover {
        color: var(--dark-green);
        background-color: var(--lightest-teal);
    }
}
</style>