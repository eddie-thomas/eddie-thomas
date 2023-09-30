<template>
  <div class="rive-desktop" id="rive-container">
    <div class="rive-desktop-cover"></div>
    <canvas ref="canvas" id="rive"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Rive } from '@rive-app/canvas'

function resizeElements() {
  const canvas = document.getElementById('rive') as HTMLCanvasElement // canvasRef.value
  if (canvas === undefined) return
  /** Found in stack-overflow: @see https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window */
  const width =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  const height =
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

  // Assuming our width is 1.5x bigger than height, we can display normal
  if (width - 100 > height) {
    canvas.height = height
    canvas.width = height
    const canvasContainer = document.getElementById('rive-container') as HTMLElement
    const canvasCover = canvasContainer?.firstElementChild as HTMLElement
    canvasCover.style.width = `${height}px`
    canvasCover.style.height = `${height / 5}px`
    canvasContainer.style.display = 'unset'
  } else {
    const overrideStyling = document.getElementById('rive-container')?.style
    if (overrideStyling) overrideStyling.display = 'none'
  }
}

window.addEventListener<"resize">("resize", resizeElements)

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Rive',
  props: {
    src: String
  },
  mounted() {
    resizeElements()
    const can = this.$refs.canvas as HTMLCanvasElement
    new Rive({
      canvas: can,
      src: this.$props.src,
      autoplay: true
    })
  }
})
</script>
