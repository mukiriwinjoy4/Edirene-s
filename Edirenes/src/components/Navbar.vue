<script>
// import HomePage from "HomePage.vue"
// import About from "Aboutus.vue"
// import Gallery from "Gallery.vue"
// import ContactUs from "ContactUs.vue"
// import OrderDetails from "OrderDetails.vue"
// import SignUp from "SignUp.vue"
// import SignIn from "SignIn.vue"
</script>


<template>
    <v-app-bar color="green">
        <div>
            <v-btn to = "/" color = "white" dark >Home</v-btn>
        </div>       
        <div>
            <v-btn to = "/gallery" color = "white" dark >Gallery</v-btn>
        </div>
        <div>
            <v-btn to = "/contactus" color = "white" dark >Contact Us</v-btn>
        </div>
        <div>
            <v-btn to = "/orderdetails" color = "white" dark >Order Details</v-btn>
        </div>
        <div>
            <v-btn to = "/signin" color = "white" dark >Sign In</v-btn>
        </div>
      </v-app-bar>
</template>