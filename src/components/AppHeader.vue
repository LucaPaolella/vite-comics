<template>
    <div>
        <header class="header">
            <div class="flex">
                <div>
                    img
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
  
<script>
import Header from "components/Header.vue";

export default {
    name: "App",
    components: {
        Header,
    },
};
</script>
  
<style lang="scss">
@import "scss/main.scss";

.header {
    height: 200px;
    background-color: #f0f0f0;
}
</style>