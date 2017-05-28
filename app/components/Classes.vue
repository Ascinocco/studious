<template>
    <div class="row">
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

                <div class="card-footer">
                    <button class="button secondary outline small">View</button>
                    <button class="button secondary outline small">Delete</button>
                </div>
            </div>
        </div>

        <div class="col col-7 studious-container classes-rightPadding">
            <div class="inner-page">
                <div class="inner-header">
                    <h2>Intro to C++</h2>
                </div>

                <div class="inner-body">
                    <p>Intoduction to Programming in the C++ Language</p>
                    <ul>
                        <li>Prof: Jason Gubbels</li>
                        <li>Location: B225</li>
                        <li>Start Date: 2017-04-08</li>
                        <li>Start Date: 2017-08-21</li>
                        <li> Class Periods: 
                            <ul>
                                <li>Tuesday: 16:00 - 19:00</li>
                            </ul>
                        </li>
                        <li>Color: Green</li>
                    </ul>
                </div>

                <div class="inner-footer">
                    <button class="button secondary outline small">Edit</button>
                    <button class="button secondary outline small">View Homework</button>
                    <button class="button secondary outline small">Delete</button>
                </div>
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