import { Carousel, CarouselItem } from 'carousel'
import type { Component } from 'solid-js'

import 'carousel/styles'

const App: Component = () => {
  return (
    <>
      <h1>Carousel Demo</h1>
      <Carousel abstractWidth={128} abstractHeight={128}>
        <CarouselItem>First Carousel Item</CarouselItem>
        <CarouselItem>Second Carousel Item</CarouselItem>
        <CarouselItem>Third Carousel Item</CarouselItem>
        <CarouselItem>Fourth Carousel Item</CarouselItem>
        <CarouselItem>Fifth Carousel Item</CarouselItem>
      </Carousel>
    </>
  )
}

export default App
