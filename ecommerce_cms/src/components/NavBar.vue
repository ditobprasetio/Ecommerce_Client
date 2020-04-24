<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/icn.jpg" />Neko Pawrtal
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggle">
        <ul class="navbar-nav mr-auto mt-4 mt-lg-0 justify-content-center">
          <li>
            <router-link class="nav-link" to="/product">
            All Product
            </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/product/add">
            Upload Product
            </router-link>
          </li>
        </ul>
        <div id="signout">
          <a @click="$store.dispatch('signout')">
            <i class="fas fa-sign-out-alt fa-lg"></i>Sign Out
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style scoped>
/* .navbar {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10000;
} */

.navbar-brand{
  display: flex;
  align-items: center;
  font-family: 'Gochi Hand', cursive;
}

.navbar-brand img{
  width: 60px;
  margin-right: 15px;
}

#navbarToggle ul li {
  font-size: 20px;
  margin-right: 13px;
}

#navbarToggle ul li:hover {
  color: #f96816;
  transition: .5s;
  transform: scale(1.15);
}

#signout {
  height: 80%;
  padding-left: 30px;
  border-left: 1px solid #b3b3b3;
  color: #646666;
  cursor: pointer;
  display: flex;
  align-items: center;
}

#signout a{
  display: flex;
  align-items: center;
}

#signout a i{
  margin-right: 10px;
}

#signout a:hover {
  color: #f96816;
  transition: .5s;
  transform: scale(1.15);
}

.nav-link{
  font-size: 17px;
  padding: 0;
}
</style>
