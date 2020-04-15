<template>
  <div class="footer">
    <div class="promotion-image">
      <img src="" alt="Alpine" />
    </div>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12 segment-one">
            <h2>DnG</h2>
            <ul>
              <li><a href="">Contact Us</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Catalogue Alpinestars</a></li>
              <li><a href="">Reseller Guide</a></li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 segment-two">
            <h2>Customer Service</h2>
            <ul>
              <li><a href="">Terms & Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 segment-three">
            <h2>Follow Us</h2>
            <p>Please follow us on our Social Media Profile in order to keep updated</p>
            <a href=""><i class="fa fa-facebook"></i></a>
            <a href=""><i class="fa fa-twitter"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <p class="footer-bottom-text">All Right reserved by &copy;Neko Pawrtal.2020</p>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style scoped>
.footer{
  width: 100%;
  text-align: left;
}
.promotion-image{
  text-align: center;
  width: 100%;
  background-color: rgb(206, 7, 7);
}

p{
  color: #999;
  line-height: 25px;
}

h2{
  columns: #ffffff;
  font-size: 18px;
}

.footer-top{
  background: #111;
  padding: 80px 0;
}

.segment-one,
.segment-two,
.segment-three{
  margin-bottom: 20px;
}

.segment-one h2{
  color: #fff;
  font-family: 'Poppins';
  text-transform: uppercase;
}

.segment-one h2::before{
  content: '|';
  color: #c65039;
  padding-right: 10px;
}

.segment-one ul{
  margin: 0;
  padding: 0;
  list-style: none;
}

.segment-one ul li{
 border-bottom: 1px solid rgba(255,255,255,0.3);
 line-height: 40px;
}

.segment-one ul li a{
  color: #999;
  text-decoration: none;
}

.segment-two h2{
  color: #fff;
  font-family: 'Poppins';
  text-transform: uppercase;
}

.segment-two h2::before{
  content: '|';
  color: #c65039;
  padding-right: 10px;
}

.segment-two ul{
  margin: 0;
  padding: 0;
  list-style: none;
}

.segment-two ul li{
 border-bottom: 1px solid rgba(255,255,255,0.3);
 line-height: 40px;
}

.segment-two ul li a{
  color: #999;
  text-decoration: none;
}

.segment-three h2{
  color: #fff;
  font-family: 'Poppins';
  text-transform: uppercase;
}

.segment-three h2::before{
  content: '|';
  color: #c65039;
  padding-right: 10px;
}

.segment-three a{
  background: #494848;
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 50%;
}

.segment-three a i{
  font-size: 20px;
  color: #fff;
  padding: 10px;
}

.footer-bottom-text{
  text-align: center;
  background: #000;
  line-height: 75px;
  margin: 0;
}

</style>
