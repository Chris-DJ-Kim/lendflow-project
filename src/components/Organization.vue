<template>
  <div class="flex justify-center items-center py-20 ">
    <div>
      <div class="max-w-xs rounded-3x1	">
        <img :src="avatar" alt="{{login}}" />
      </div>
      <div>
        <router-link :to="'/org/' + login + '/details'">
          {{ login }}
        </router-link>
      </div>
      <div>{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Organization",
  props: {
    login: String,
    avatar: String,
    description: String,
  },
};
</script>
