<style>
.buttons-container,.container-for-end-justify{
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
    cursor:pointer;
}

.btn-navigation-group:nth-child(1){
    border-radius: 20px 0 0 20px;
}
.btn-navigation-group:nth-child(2){
    border-radius: 0 20px 20px 0;
}


.container-for-end-justify{
    width: 85%;
    height: 100%;
    justify-content: flex-end;
}
</style>
<template>
    <div class="buttons-container">
        <div class="container-for-end-justify">
            <button class="btn-navigation-group">Go back</button>
            <button class="btn-navigation-group">Next</button>
        </div>
    </div>
</template>