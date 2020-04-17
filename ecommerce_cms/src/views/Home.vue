<template>
  <div class="home">
    <div class="row">
      <div class="col-md-6 col-sm-12 col-xs-12 image">
        <div class="color">
          <div class="color-one"></div>
          <div class="color-two"></div>
        </div>
        <div class="cat-img">
          <img src="../assets/cats.jpg" alt="">
        </div>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12 desc">
        <div class="options">
          <router-link class="product" to="/product">All Product</router-link>
          <router-link class="signin" to="/signin">Sign In</router-link>
        </div>
        <div class="intro">
          <h1>
            <span>CAT'S</span><br>
            As every cat owner knows,<br>
            nobody owns a cat.
          </h1>
          <p>
            Working and being a cat parent can be a bit tough. Our little furry kids not only demand attention but they have endless needs. Neko Pawrtal provides the best cat supplies online. We offer quality products and accessories for a healthier, happier, fluffier cat. We deliver your products right to your doorstep. Pawsome isn’t it?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.home{
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, rgba(236,236,236,1) 0%, rgba(173,173,173,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.row{
  width: 90%;
  box-shadow: 0px 50px 30px -20px rgb(119, 119, 119) ;
}

.image{
  border: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  width: fit-content;
  background: #f8f8f8;
}

.image .color{
  height: 100%;
  width: 10%;
}

.color-one{
  height: 50%;
  width: 100%;
  background: #565052;
}

.color-two{
  height: 50%;
  width: 100%;
  background: #fe6c6c;
}

.image .cat-img{
  width: 100%;
  height: 100%;
  display: block;
}

img{
  width: 100%;
  height: 100%;
  display: block;
}

.desc{
  border: none;
  padding: 30px;
  background: #f8f8f8;
}

.options{
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.product,
.signin{
  height: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a5a5a;
  cursor: pointer;
  font-size: large;
  font-weight: 500;
  margin-right: 10px;
}

.product:hover,
.signin:hover{
  background: #5a5a5a;
  color: #f8f8f8;
  border-radius: 30px;
  text-decoration: none;
}

/* .intro{
  display: flex;
  justify-content: flex-start;
  height: 90%;
  padding: 10px;
  align-items: center;
} */

.intro{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  padding: 10px;
  align-content: flex-start;
}

.intro h1{
  text-align: left;
  font-weight: 500;
  color: #5a5a5a;
  margin-bottom: 20px;
}

.intro h1 span{
  font-weight: 600;
  font-size: 50px;
  color: #fe6c6c;
}

.intro p {
  text-align: left;
}
</style>
