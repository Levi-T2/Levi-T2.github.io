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


<style lang="scss" scoped></style>