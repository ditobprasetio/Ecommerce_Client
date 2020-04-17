<template>
  <div>
    <div id="product">
      <div class="product-container">
        <div class="card-deck row detail">
          <div class="card col-md-6 col-sm-12 col-xs-12 segment-one">
            <h1>nama admin</h1>
          </div>
          <div class="card col-md-3 col-sm-12 col-xs-12 segment-two">
            <h1>jumlah product</h1>
          </div>
          <div class="card col-md-3 col-sm-12 col-xs-12 segment-three">
            <h1>jumlah category</h1>
          </div>
        </div>
        <div class="product-list">
          <h4>All Products</h4>
          <div class="card" id="product-card" style="border: none;">
            <div id="banner" class="row no-gutters">
              <div class="col-md-2 col-sm-12 col-xs-12 image">
                <h5 class="card-text">Image</h5>
              </div>
              <div class="card-deck col-md-10 justify-content-between" id="product-detail">
                <div
                  id="detail"
                  class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 name"
                >
                  <h5 class="card-text">Name</h5>
                </div>
                <div
                  id="detail"
                  class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 quantity"
                >
                  <h5 class="card-text">Quantity</h5>
                </div>
                <div
                  id="detail"
                  class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 category"
                >
                  <h5 class="card-text">Category</h5>
                </div>
                <div
                  id="detail"
                  class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 price"
                >
                  <h5 class="card-text">Price</h5>
                </div>
                <div
                  id="detail"
                  class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 option"
                >
                  <h5 class="card-text">Option</h5>
                </div>
              </div>
            </div>
          </div>
          <!-- card -->
          <Card v-for="product in products" :key="product.id" :product="product" />
          <!-- ---- -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  name: 'ProductList',
  components: {
    Card
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fecthProduct')
  }
}
</script>

<style scoped>
*{
  color: #535353;
}

#product {
  width: 100%;
  min-height: 90vh;
  background: #fff;
  padding: 20px;
}

.product-container {
  width: 100%;
  min-height: 85vh;
  padding: 20px;
  border-radius: 20px;
  background: #edf0f5;
}

.detail {
  width: 100%;
  margin: 0;
  margin-bottom: 20px;
}

.detail .segment-one {
  margin-left: 0;
}

.detail .segment-three {
  margin-right: 0;
}

.card {
  padding: 15px;
  border-radius: 15px;
  text-align: left;
  border: none;
}

#banner{
  padding-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #b3b3b3;
}

.product-list {
  text-align: left;
  width: 100%;
  margin: 0px;
  background: #fff;
  padding: 15px;
  border-radius: 15px;
}

.product-list h4{
  padding-top: 15px;
  padding-left: 15px;
}

.image,
.card-text {
  margin: 0;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
