<template>
  <nav class="shadow-md h-20 fixed bg-white w-full top-0 z-50">
    <div class="flex justify-between px-5 items-center h-full">
      <div class="flex items-center gap-4">
        <!-- Logo -->
        <RouterLink to="/" class="bg-color-none border-none">
          <img src="../assets/logo-ikatek.png" alt="logo Ikatek" class="w-14" />
        </RouterLink>

        <!-- Search Bar -->
        <div class="hidden sm:block border-2 h-14 px-3 rounded-full focus-within:ring-1">
          <div class="flex flex-col justify-center h-full">
            <div class="relative flex items-center">
              <i class="pi pi-search text-lg"></i>

              <input
                type="text"
                placeholder="Search"
                v-model="searchQuery"
                @focus="showSuggestions = true"
                @blur="hideSuggestions"
                class="bg-transparent pl-4 pr-8 focus:outline-none xl:w-[500px]"
              />
            </div>

            <!-- Suggestions Dropdown -->
            <ul
              v-if="showSuggestions && filteredSuggestions.length"
              class="absolute top-16 left-30 xl:w-[500px] bg-white border shadow-md rounded-md"
            >
              <li
                v-for="(suggestion, index) in filteredSuggestions"
                :key="index"
                @click="selectSuggestion(suggestion)"
                class="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                {{ suggestion }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Search Icon for Mobile -->
        <div class="block sm:hidden">
          <button>
            <i class="pi pi-search text-lg"></i>
          </button>
        </div>
      </div>

      <!-- Menu Items -->
      <div class="lg:flex gap-4 items-center hidden">
        <div v-for="item in menuItems" :key="item.label">
          <RouterLink
            :to="item.route"
            class="flex gap-2 items-center p-2 px-4 border-b-4 border-b-white transition-all font-medium text-lg rounded-sm hover:border-b-4 hover:border-b-[#DC2626] hover:text-[#DC2626]"
          >
            <i :class="item.icon"></i>
            <h3>{{ item.label }}</h3>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: 'Beranda', icon: 'pi pi-home', route: '/' },
        { label: 'Berita', icon: 'pi pi-briefcase', route: '/berita' },
        { label: 'Loker', icon: 'pi pi-envelope', route: '/loker' },
        { label: 'Event', icon: 'pi pi-calendar-clock', route: '/event' },
      ],
      searchQuery: '',
      showSuggestions: false,
      suggestions: ['Berita 1', 'Berita 2', 'Loker 1', 'Event 1'],
    };
  },
  computed: {
    filteredSuggestions() {
      return this.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    hideSuggestions() {
      // Delay hiding to allow click event to register
      setTimeout(() => {
        this.showSuggestions = false;
      }, 200);
    },
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion;
      this.showSuggestions = false;
    },
  },
};
</script>

<style scoped>
/* Add any necessary styling */
</style>
