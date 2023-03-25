<template>
    <div>
        <header class="header container">
            <div class="flex">
                <div>
                    <img src="../assets/img/dc-logo.png" alt="">
                </div>
                <div>
                    <nav class="flex">
                        <div>item1</div>
                        <div>item2</div>
                        <div>item3</div>
                        <div>item4</div>
                        <div>item5</div>
                        <div>item6</div>
                        <div>item7</div>
                        <div>item8</div>
                        <div>item9</div>
                        <div>item10</div>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>
  

  
<style lang="scss" scoped>
@import "../assets/style/main.scss";
@import "../assets/style/partials/header.scss";

.header {
    height: 100px;
    background-color: yellow;
}

.flex {
    display: flex;
}

header>div {
    justify-content: space-between;
}

header>div,
div>nav {
    align-items: center;
}

nav,
nav>div {
    padding: 10px;
}
</style>

