<template>
    <div class="row">
        <div class="col col-4 studious-container classes-leftPadding">
            <div v-for="myClass in this.classes">
                <classes-card v-bind:classData="myClass" v-bind:selectedClass="this.selectedClass"></classes-card>
                <br>
            </div>
        </div>
        
        <div class="col col-7 studious-container classes-rightPadding">
            <classes-inner-page v-bind:selectedClass="this.selectedClass"></classes-inner-page>
        </div>
    </div>
</template>

<script>
    import ClassesCard from './ClassesCard.vue';
    import ClassesInnerPage from './ClassesInnerPage.vue';
    import { StudiousClass } from '../../Models/StudiousClass';

    export default {
        data () {
            return {
                classes: [],
                selectedClass: {}
            }
        },

        components: {
            'classes-card': ClassesCard,
            'classes-inner-page': ClassesInnerPage
        },

        methods: {
            loadClasses () {
                this.classes = StudiousClass.find();
            },

            selectClass (selectedClass) {
                this.selectedClass = selectedClass;
            },

            init() {
                this.loadClasses();
                // pass in first loaded class on initial app load
                this.selectClass(this.classes[0]);
            }
        },

        mounted () {
            console.log('Component Mounted...');
        },

        created () {
            console.log('Component Created...');
            console.log('Loading Data...');
            this.init();
        }       
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