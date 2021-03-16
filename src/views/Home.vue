<template>
  <div>
    <input
      class="bg-gray-300 mt-10 rounded-lg	"
      type="text"
      v-model="search"
      placeholder="Search"
    />

    <div grid grid-rows-6 gap-1 justify-center items-center text-center>
      <Organization
        :key="company.id"
        v-for="company in allCompanies"
        :login="company.login"
        :avatar="company.avatar_url"
        :description="company.description"
      />
    </div>
  </div>
</template>

<script>
import Organization from "../components/Organization";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Organization,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["getCompanies"]),
  },
  computed: {
    allCompanies() {
      return this.$store.getters.allCompanies(this.search);
    },
  },
  created() {
    this.getCompanies();
    console.log("created!");
  },
};
</script>
