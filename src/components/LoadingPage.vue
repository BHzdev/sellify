<template>
  <div class="loading">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingPage",
};
</script>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
}

.line {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 14px;
  background-color: #833cdd;
  margin-left: 14px;
}

.loading .line:nth-last-child(1) {
  animation: loadingC 0.6s 0.1s linear infinite;
}

.loading .line:nth-last-child(2) {
  animation: loadingC 0.6s 0.2s linear infinite;
}

.loading .line:nth-last-child(3) {
  animation: loadingC 0.6s 0.3s linear infinite;
}

@keyframes loadingC {
  0 {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
