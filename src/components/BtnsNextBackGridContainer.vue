<script setup>
import { inject } from 'vue';
let dataFnAndPaginateNumbers = inject('pokemonJsons');
let refreshFn = inject('refreshFn');
console.log(refreshFn);

const paginationNext = () => {
    dataFnAndPaginateNumbers[2].value *= 2; //range end is multiplied by 2 because we display 21 cards per page
    dataFnAndPaginateNumbers[1].value += 7;
    console.log('new values next: ', dataFnAndPaginateNumbers[1], ' ', dataFnAndPaginateNumbers[2]);
    refreshFn();
};

const paginationBack = () => {
    dataFnAndPaginateNumbers[2].value = dataFnAndPaginateNumbers[2].value == 21 ? dataFnAndPaginateNumbers[2].value = 21 : dataFnAndPaginateNumbers[2].value /= 2;
    dataFnAndPaginateNumbers[1].value = dataFnAndPaginateNumbers[1].value == 7 ? dataFnAndPaginateNumbers[1].value = 7 : dataFnAndPaginateNumbers[1].value /= 2;
    console.log('new values back: ', dataFnAndPaginateNumbers[1], ' ', dataFnAndPaginateNumbers[2]);
    refreshFn();
};
</script>
<style>
.buttons-container,
.container-for-end-justify {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3rem;
}

.btn-navigation-group {
    height: 70%;
    background-color: #E63946;
    color: #F1FAEE;
    border: 0;
    margin-right: 5px;
    cursor: pointer;
}

.btn-navigation-group:nth-child(1) {
    border-radius: 20px 0 0 20px;
}

.btn-navigation-group:nth-child(2) {
    border-radius: 0 20px 20px 0;
}


.container-for-end-justify {
    width: 85%;
    height: 100%;
    justify-content: flex-end;
}
</style>
<template>
    <div class="buttons-container">
        <div class="container-for-end-justify">
            <button @click="paginationBack()" class="btn-navigation-group">Go back</button>
            <button @click="paginationNext()" class="btn-navigation-group">Next</button>
        </div>
    </div>
</template>