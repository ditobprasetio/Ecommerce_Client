<template>
  <div class="card" id="product-card" style="border: none;">
    <div class="row no-gutters">
      <div class="col-md-2 col-sm-12 col-xs-12 image" @click="toEditPage(product.id)">
        <img :src="`${product.image_Url}`" class="card-img" style="width: auto; height: 150px" alt />
      </div>
      <div class="card-deck col-md-10 justify-content-between" id="product-detail">
        <div id="detail" class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 name">
          <h5 class="card-text">{{ product.name }}</h5>
        </div>
        <div id="detail" class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 quantity">
          <h5 class="card-text">{{ product.stock }}</h5>
        </div>
        <div id="detail" class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 category">
          <h5 class="card-text">{{ product.category }}</h5>
        </div>
        <div id="detail" class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 price">
          <h5 class="card-text">Rp. {{ product.price }}</h5>
        </div>
        <div id="detail" class="d-flex justify-content-center col-md-2 col-sm-12 col-xs-12 option">
          <h5 @click.prevent="deleteProduct(product.id)" class="card-text">
            Delete
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  methods: {
    deleteProduct: function (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(({ data }) => {
          this.$store.dispatch('fecthProduct')
          this.$toasted.show(`${data.message}`, {
            duration: 3000
          })
        })
        .catch((err) => {
          this.$toasted.show(err.response.data.errors[0], {
            duration: 3000
          })
        })
    },
    toEditPage: function (id) {
      this.$router.push(`/product/edit/${id}`)
    }
  }
}
</script>

<style scoped>
.row{
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

#product-card {
  margin: 0;
  padding-bottom: 0;
}

#detail{
  width: fit-content;
  color: #6f6f6f;
}

.card-text {
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.image:hover{
  transition: .5s;
  transform: scale(1.15);
}

.option{
  color: #e28391 !important;
  cursor: pointer;
  align-items: center;
  margin-bottom: 5px;
}

.option:hover{
  transition: .5s;
  transform: scale(1.15);
}

.option h5{
  width: 90px;
  height: 50px;
  border-radius: 5px;
  background: #f1c8d4;
}
</style>
