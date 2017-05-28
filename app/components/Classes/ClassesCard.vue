<template>
    <div class="card">
        <div id="activeCardContainer">
            <i class="card-classColor" v-bind:style="{ backgroundColor: this.classData.color }"></i>
        </div>

        <div class="card-header">
            <h3>{{ this.classData.name }}</h3>
        </div>

        <div class="card-body">
            <p>{{ this.classData.professor }} | {{ this.classData.courseCode }} | {{ this.classData.location }}</p>
        </div>

        <div class="col card-footer">
            <button class="button secondary outline small" v-on:click="select()">
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['classData'],

        methods: {
            select() {
                this.$emit('updateSelectedClass', this.classData);
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
    .classes-rightPadding {
        padding-right: 50px;
    }

    .classes-leftPadding {
        padding-left: 50px;
    }
</style>