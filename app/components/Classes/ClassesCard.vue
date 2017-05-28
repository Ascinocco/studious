<template>
    <div class="col col-4 studious-container classes-leftPadding">
            <div class="card" v-if="true">
                <div id="activeCardContainer">
                    <i class="card-active" style="float: right;">&nbsp;</i>
                </div>

                <div class="card-header">
                    <h3>Intro to C++</h3>
                </div>

                <div class="card-body">
                    <p>Some generic description of the class</p>
                </div>

                <div class="col card-footer">
                    <button class="button secondary outline small">
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        
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