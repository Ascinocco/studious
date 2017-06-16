<template>
    <div>
        <add-class-modal v-on:toggleModal="toggleAddClassModal" v-if="showAddClassModal"></add-class-modal>

        <div class="row">
            <div class="col col-4 studious-container">
                <div v-for="myClass in this.classes">
                    <classes-card v-on:updateSelectedClass="selectClass" v-bind:classData="myClass"></classes-card>
                    <br>
                </div>
            </div>
            
            <div class="col col-6 studious-container">
                <classes-inner-page v-bind:selectedClass="this.selectedClass"></classes-inner-page>
            </div>

            <div class="col col-1 studious-container" style="text-align: right;">
                <button class="button outline" v-on:click="toggleAddClassModal()">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import ClassesCard from './ClassesCard.vue';
    import AddClassModal from './AddClassModal.vue';
    import ClassesInnerPage from './ClassesInnerPage.vue';
    import { StudiousClass } from '../../Models/StudiousClass';

    export default {
        data () {
            return {
                classes: [],
                selectedClass: {},
                showAddClassModal: false
            }
        },

        components: {
            'classes-card': ClassesCard,
            'add-class-modal': AddClassModal,
            'classes-inner-page': ClassesInnerPage
        },

        methods: {
            loadClasses () {
                this.classes = StudiousClass.find();
            },

            selectClass (selectedClass) {
                this.selectedClass = selectedClass;
            },

            test (data) {
                alert('called test function..');
                alert(data);
            },

            toggleAddClassModal () {
                if (this.showAddClassModal == true) {
                    this.showAddClassModal = false;
                } else if (this.showAddClassModal == false) {
                    this.showAddClassModal = true;
                }
            },

            addClass() {

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

    div#addClass-modal {
        width: 50%;
        margin: auto;
    }

    div#addClass-modalHeader {
        text-align: center;
    }
</style>