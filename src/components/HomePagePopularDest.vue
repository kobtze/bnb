<template>
  <section class="home-page-popular-dest homepage-section container">
    <h2>Destinations for future trips</h2>

    <section class="list-3">
      <section v-on:click="sendCategory('New York')">
        <el-card  class="card" :body-style="{ padding: '0px' }">
          <img
            src="@/assets/img/new-york-small.jpg"
            class="image"
          />
          <div style="padding: 14px;">
            <h4 class="no-text-underneath">New York</h4>
            <div class="bottom clearfix"></div>
          </div>
        </el-card>
      </section>

      <section v-on:click="sendCategory('Tokyo')">
        <el-card class="card" :body-style="{ padding: '0px' }">
          <img
            src="@/assets/img/tokyo.jpg"
            class="image"
          />
          <div style="padding: 14px;">
            <h4 class="no-text-underneath">Tokyo</h4>
            <div class="bottom clearfix"></div>
          </div>
        </el-card>
      </section>

      <section v-on:click="sendCategory('Tel Aviv')">
        <el-card class="card" :body-style="{ padding: '0px' }">
          <img
            src="@/assets/img/tel-aviv-small.jpg"
            class="image"
          />
          <div style="padding: 14px;">
            <h4 class="no-text-underneath">Tel Aviv</h4>
            <div class="bottom clearfix"></div>
          </div>
        </el-card>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        location: "",
        checkIn: "",
        checkOut: "",
        adultNumber: "",
        childrenNumber: "",
        rating:"",
        type:"", 
      }
    };
  },
  methods:{
    sendCategory(city){
         this.filterBy.location = city;
         console.log(city)
         this.$emit("setPopular", this.filterBy);
         this.$router.push("/app");
    }
  }
};
</script>


<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>