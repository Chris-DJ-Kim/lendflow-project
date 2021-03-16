<template>
  <div class="flex h-screen justify-center items-center bg-gray-500">
    <div>
      <img
        :src="this.$store.state.company.company.avatar_url"
        alt="{{this.$store.state.company.company.login}}"
      />
      <div class="text-gray-300	">
        Name:
        {{
          this.$store.state.company.company.name
            ? this.$store.state.company.company.name
            : "No name provided"
        }}
      </div>
      <div class="text-gray-300	">
        {{
          this.$store.state.company.company.description
            ? this.$store.state.company.company.description
            : "No description provided"
        }}
      </div>
      <div class="text-gray-300	">
        {{ this.$store.state.company.company.url }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "OrganizationDetail",
  methods: {
    ...mapActions(["getOneCompany"]),
    oneCompany() {
      return this.$store.getters.oneCompany();
    },
  },
  mounted() {
    this.getOneCompany(this.$route.params.orgName);
  },
};
</script>
