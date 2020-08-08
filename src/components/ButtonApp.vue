<template>
  <div>
    <button type="submit">{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonApp',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
button {
  width: 100%;
  padding: 16px 0;
  margin: 24px 0;

  background: #ff9000;
  color: #312e38;

  border: 2px solid #ff9000;
  border-radius: 10px;

  font-weight: 500;

  transition: background 0.2s;

  &:hover {
    background: #e98400;
  }
}
</style>
