<template>
  <div class="tit font18">
    <Header />
    <div class="img">1</div>
    <div class="img-big">2</div>
  </div>
</template>
<script>
import Header from '@/components/header/index.vue'
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.tit {
  color: #ddd;
}
.img {
  background-image: url("./assets/imgs/test1.png");
}
</style>