<template>
    <div id="homepage">
      <v-container>
        <v-layout column>
          <v-carousel>
            <v-carousel-item
              src="public/marek-studzinski-3D6yReT06p0-unsplash.jpg"
              cover
            ></v-carousel-item>
  
            <v-carousel-item
              src="public/xiaolong-wong-nibgG33H0F8-unsplash.jpg"
              cover
            ></v-carousel-item>
  
            <v-carousel-item
              src="public/elisa-stone-7t3tGnKhZrc-unsplash.jpg"
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
                  title="Want to know more?"
                  text="Reach out to us!"
                ></v-card>
  
                <div class="mt-4 text-subtitle-2">With slots</div>
  
                <v-card width="400">
                  <template v-slot:title> WhatsApp/Message </template>
                      
                  <template v-slot:text
                    >0716194355. We are located in Murang'a along Nairobi-Nyeri highway on the first bridge near kwa samaki.@everyone
                  </template>
                </v-card>
  
                <div class="mt-4 text-subtitle-2">With markup</div>
  
                <v-card width="400">
                  <v-card-item>
                    <v-card-title>Email</v-card-title>
                      
                  </v-card-item>
  
                  <v-card-text>
                    Edirenesseedlings@gmail.com
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
  