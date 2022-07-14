<script setup>
import { inject, onBeforeMount, onMounted } from 'vue';
let dataFnAndPaginateNumbers = inject('pokemonJsons');
let [refreshFn,goBackButtonDisplay,notDisplayButtonsWhileReloadingGrid] = inject('refreshFn');


const paginationNext = () => {
    notDisplayButtonsWhileReloadingGrid.value=false;
    dataFnAndPaginateNumbers[1].value=dataFnAndPaginateNumbers[2].value+1;
    dataFnAndPaginateNumbers[2].value +=21; // we display 21 cards per page 
    console.log('new values next: ', dataFnAndPaginateNumbers[1].value, ' ', dataFnAndPaginateNumbers[2].value);
    if(dataFnAndPaginateNumbers[1].value==22)goBackButtonDisplay.value=true;
    refreshFn();
};

const paginationBack = () => {
        notDisplayButtonsWhileReloadingGrid.value=false;
    dataFnAndPaginateNumbers[2].value = dataFnAndPaginateNumbers[2].value == 21 ? dataFnAndPaginateNumbers[2].value = 21 : dataFnAndPaginateNumbers[2].value -=21;
    dataFnAndPaginateNumbers[1].value -=21;
    if(dataFnAndPaginateNumbers[1].value==1)goBackButtonDisplay.value=false; 
    console.log('new values back: ', dataFnAndPaginateNumbers[1].value, ' ', dataFnAndPaginateNumbers[2].value);
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

#btn-back {
    border-radius: 20px 0 0 20px;
}

#btn-next {
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
        <div v-if="notDisplayButtonsWhileReloadingGrid" class="container-for-end-justify">
            <button id="btn-back" v-if="goBackButtonDisplay" @click="paginationBack()" class="btn-navigation-group">Go back</button>
            <button id="btn-next" @click="paginationNext()" class="btn-navigation-group">Next</button>
        </div>
    </div>
</template>