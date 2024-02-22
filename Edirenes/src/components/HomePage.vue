<template>
  <div id="homepage">
    <v-container>
      <v-layout column>
        <v-carousel>
          <v-carousel-item
            src="./../../public/zeynep-aciktepe-jXIyWb5K5b4-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="./../../public/vinod-kumar-GO49uWrfkpA-unsplash.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="public/charlesdeluvio-yPI38imbQSI-unsplash.jpg"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-layout>
        <v-container>
          <v-row align="center" justify="center">
            <div class="d-flex align-center flex-column">
              <div class="mt-4 text-subtitle-2">With markup</div>

              <v-card width="400">
                <v-card-item>
                  <v-card-title>Organic Fruit Farming</v-card-title>
                </v-card-item>

                <v-card-text>
                  We provide quality hardened fruit seedling and also offer
                  extension services to farmers.At Clarifruit, we are meeting
                  this challenge head on by revolutionizing the fresh produce
                  supply chain from field to fork, bringing it into the digital
                  age, and contributing to a world standard for fresh produce
                  evaluation. The result: favorable revenue opportunities for
                  all stakeholders in the fresh produce supply chain and reduced
                  global waste.
                </v-card-text>
              </v-card>
            </div>
          </v-row>
        </v-container>
      </v-layout>
    </v-container>
  </div>
</template>
<script setup>
const variants = ["elevated", "flat", "tonal", "outlined"];
</script>
