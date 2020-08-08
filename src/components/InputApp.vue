<template>
  <div>
    <template v-if="name === 'email'">
      <mail-icon size="1.5x"></mail-icon>
    </template>

    <template v-if="name === 'password'">
      <lock-icon size="1.5x"></lock-icon>
    </template>

    <template v-if="name === 'user'">
      <user-icon size="1.5x" class="custom-class"></user-icon>
    </template>
    <input
      :name="name"
      :type="type"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import { MailIcon, LockIcon, UserIcon } from 'vue-feather-icons'
export default {
  name: 'InputApp',
  props: ['icon', 'name', 'type', 'placeholder'],
  components: {
    MailIcon,
    LockIcon,
    UserIcon
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;

  width: 100%;
  height: 56px;
  padding: 0 16px;

  border-radius: 10px;
  border: 2px solid #232129;

  background: #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;

    color: #f4ede8;
    background: transparent;

    border: none;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
}

</style>
