<template>
  <div id="update-product">
    <div class="product-container">
      <div class="product-data">
        <div class="row d-flex">
          <img :src="`${this.image_Url}`" :alt="`${this.name}`" />
          <div class="card col-lg-6 col-md-12">
            <form @submit.prevent="updateProduct">
              <div class="form-group">
                <label for="UpdateName">Name</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  id="UpdateName"
                  aria-describedby="Name"
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-group">
                <label for="UpdateStock">Stock</label>
                <input
                  v-model="stock"
                  type="text"
                  class="form-control"
                  id="UpdateStock"
                  aria-describedby="Stock"
                  placeholder="Enter Stock"
                />
              </div>
              <div class="form-group">
                <label for="UpdatePrice">Price</label>
                <input
                  v-model="price"
                  type="text"
                  class="form-control"
                  id="UpdatePrice"
                  aria-describedby="Price"
                  placeholder="Enter Price"
                />
              </div>
              <div class="form-group">
                <label for="UpdateCategory">Category</label>
                <select class="form-control" v-model="category">
                  <option value="Food">Food</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Grooming Aids">Grooming Aids</option>
                  <option value="Toiletries">Toiletries</option>
                </select>
              </div>
              <div class="form-group">
                <label for="UpdateImage">Image</label>
                <input
                  v-model="image_Url"
                  type="text"
                  class="form-control"
                  id="UpdateImage"
                  aria-describedby="Image"
                  placeholder="Enter Image"
                />
              </div>
              <button type="submit" class="secondary-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdatePage',
  data: () => {
    return {
      name: '',
      stock: '',
      price: '',
      category: '',
      image_Url: ''
    }
  },
  methods: {
    updateProduct: function () {
      const productData = {
        name: this.name,
        stock: this.stock,
        price: this.price,
        category: this.category,
        image_Url: this.image_Url,
        id: this.$route.params.id
      }
      this.$store.dispatch('updateProduct', productData)
        .then(({ data }) => {
          this.$toasted.show(`Success update Product ${data.name}`, {
            duration: 3000
          })
          this.$router.push('/product')
        })
        .catch(err => {
          this.$toasted.show(err.response.data.errors[0], {
            duration: 3000
          })
        })
    }
  },
  created () {
    this.$store.dispatch('getProduct', this.$route.params.id)
      .then(({ data }) => {
        this.name = data.name
        this.stock = data.stock
        this.price = data.price
        this.category = data.category
        this.image_Url = data.image_Url
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
* {
  color: #535353;
}

#update-product {
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

.product-data {
  text-align: left;
  width: 100%;
  min-height: 80vh;
  margin: 0px;
  background: #fff;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row{
  width: 100%;
  display: flex;
  justify-content: center;
}

.row img{
  width: fit-content;
}

.card{
  border: none;
}

.secondary-btn {
  padding: 0.7rem 1rem;
  height: 2.7rem;
  display: block;
  border: 1px solid #535353;
  border-radius: 2px;
  font-weight: 500;
  background: none;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s;
}

.secondary-btn:hover {
  border-color: #ff7b39;
  color: #ff7b39;
}
</style>
