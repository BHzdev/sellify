<template>
  <transition>
    <ul class="error" v-if="errors.length > 0">
      <li v-for="(error, index) in errors" :key="index" v-html="error"></li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "ErrorNotification",
  props: {
    errors: Array,
  },
};
</script>

<style>
.error {
  margin: 20px auto;
}

.error li {
  color: #5c0fbd;
  text-align: center;
}
</style>
