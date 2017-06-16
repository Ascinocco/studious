<template>
    <div class="row">
        <div id="addClass-modal" class="modal-box">
            <div class="modal">
                <span class="close" v-on:click="closeModal()"></span>
                <div id="addClass-modalHeader" class="modal-header">Add Class</div>
                <div class="modal-body">...</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
        methods: {
            closeModal () {
                this.$emit('toggleModal');
            }
        },

        mounted () {
            console.log('Component Mounted...');
        },

        created () {
            console.log('Component Created...');
        },
    }
</script>

<style>
    div#addClass-modal {
        margin-top: 2%;
    }
</style>