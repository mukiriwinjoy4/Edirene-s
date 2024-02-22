<template>
    <div id="signin">
      <v-container>
        <v-layout column>
          <v-carousel>
            <v-carousel-item
              src="public/marek-studzinski-3D6yReT06p0-unsplash.jpg"
              cover
            ></v-carousel-item>
             
            
          </v-carousel>
        </v-layout>
        <v-layout>
          <v-container>
            <v-row align="center" justify="center">
              <div class="d-flex align-center flex-column">
                <div class="text-subtitle-2">With props</div>
  
                <v-card
                  width="400"
                  title="Full Name"
                  
                  text="Email"
                ></v-card>
  
                <div class="mt-4 text-subtitle-2">With slots</div>
  
                <v-card width="400">
                  <template v-slot:title> Country </template>
  
                    
                  <template v-slot:text
                    >Product Type
                  </template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2">With markup</div>
  
                <v-card width="450">
                  <v-card-item>
                    <v-card-title>How did you hear about Edirenes seedlings?</v-card-title>
  
                    <v-card-subtitle>How can we help you?</v-card-subtitle>
                  </v-card-item>
  
                  <v-card-text>
                    Submit
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
  