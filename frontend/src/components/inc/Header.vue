<template>
  <header class="top-0 z-index-3 shadow-sm position-sticky start-0 end-0 bg-white">
    <div class="container">
      <div class="d-flex justify-content-end align-items-center py-2 d-lg-none border-bottom">
        <a href="#" class="text-dark mx-2">
          <CartIcon :size="24"  />
        </a>
        <a href="#" class="text-dark mx-2">
          <BellIcon :size="24"  />
        </a>
        <a href="#" class="text-dark mx-2">
          <AccountCircleIcon :size="24"  />
        </a>
      </div>

      <div class="d-none d-lg-flex justify-content-between align-items-center py-2">
        <div class="d-flex align-items-center">
          <span class="fw-bold fs-4 text-dark me-4">FRESH JUICE SHOP</span>
        </div>

        <ul class="nav">
          <li class="nav-item"><a class="nav-link px-3 text-dark" href="#">About Us</a></li>
          <li class="nav-item"><a class="nav-link px-3 text-dark" href="#">Shop</a></li>
          <li class="nav-item"><a class="nav-link px-3 text-dark" href="#">Our Juices</a></li>
          <li class="nav-item"><a class="nav-link px-3 text-dark" href="#">Contact</a></li>
        </ul>

        <div class="d-flex align-items-center gap-3">
          <a href="#" class="text-dark">
            <CartIcon :size="24"  />
          </a>
          <a href="#" class="text-dark">
            <BellIcon :size="24"  />
          </a>
          <a href="#" class="text-dark">
            <AccountCircleIcon :size="24"  />
          </a>
        </div>
      </div>

      <div class="d-none d-lg-flex justify-content-between align-items-center py-2 border-top">
        <ul class="nav">
          <li class="nav-item"><a class="nav-link px-3 text-dark" href="#">New Arrivals</a></li>
          <li class="nav-item"><a class="nav-link px-3 text-dark" href="#">Special Offers</a></li>
          <li class="nav-item"><a class="nav-link px-3 text-dark" href="#">Categories</a></li>
        </ul>

        <form class="d-flex" role="search" @submit.prevent="onSearch">
          <input
            v-model="searchQuery"
            class="form-control me-2"
            type="search"
            placeholder="Search for fresh juices..."
            aria-label="Search"
          />
          <button class="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>

      <div class="d-flex justify-content-between align-items-center py-2 d-lg-none">
        <div class="d-flex align-items-center">
          <span class="fw-bold fs-4 text-dark">FRESH JUICE SHOP</span>
        </div>

        <button
          class="navbar-toggler border-0 bg-transparent"
          type="button"
          @click="isMenuOpen = !isMenuOpen"
          aria-controls="mobileMenu"
          :aria-expanded="isMenuOpen.toString()"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <transition name="fade">
        <div
          v-if="isMenuOpen"
          id="mobileMenu"
          class="d-lg-none bg-white shadow-sm rounded mt-2 py-3"
        >
          <ul class="nav flex-column px-3 mb-3">
            <li class="nav-item"><a class="nav-link text-dark" href="#">About Us</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">Shop</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">Our Juices</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">Contact</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">New Arrivals</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">Special Offers</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">Categories</a></li>
          </ul>
          <form class="d-flex px-3" role="search" @submit.prevent="onSearch">
            <input
              v-model="searchQuery"
              class="form-control me-2"
              type="search"
              placeholder="Search for fresh juices..."
              aria-label="Search"
            />
            <button class="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      searchQuery: '',
      isMenuOpen: false,
    };
  },
  methods: {
    onSearch() {
      alert(`Search for: ${this.searchQuery}`);
      // Logique recherche ici
    },
  },
};
</script>

<style scoped>
header{
  position:relative;
  z-index:99;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%280, 0, 0, 0.7%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
