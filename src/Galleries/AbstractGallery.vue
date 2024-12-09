<template>
  <LoadingIndicator loading="loading">
    <div class="p-2 m-2">
      <div class="font-bold text-3xl mb-4">{{ props.name }}</div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="image-container"
        >
          <img
            :src="image"
            alt="Image"
            class="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  </LoadingIndicator>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  folder: {
    type: String,
    required: true,
  },
});

// Define the constants array for the images we will eventaully load in.
const images = ref([]);
const folderName = ref("");

const loadImages = () => {
  const imagesContext = require.context(
    "@/assets/",
    true,
    /\.(png|jpe?g|svg)$/
  );

  console.log(imagesContext);
  images.value = imagesContext
    .keys()
    .filter((key) => key.startsWith(`./${folderName.value}/`)) // Ensure folder match
    .map((key) => imagesContext(key));
};

// on the mounting of the page load the images.
onMounted(() => {
  folderName.value = props.folder;
  console.log("The name of the folder:  " + folderName.value);

  console.log("Loading the images now...");
  loadImages();
});
</script>
