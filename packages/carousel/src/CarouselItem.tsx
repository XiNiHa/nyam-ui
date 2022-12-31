import { nanoid } from 'nanoid/non-secure'
import { JSX, onCleanup, useContext } from 'solid-js'

import { CarouselContext } from '@/Carousel'

interface Props {
  children: JSX.Element
}

export default function CarouselItem(props: Props) {
  const id = nanoid()
  const contextData = useContext(CarouselContext)

  const { width, height } = contextData.registerItem(id)
  onCleanup(() => contextData.deregisterItem(id))

  return (
    <div
      class="item-wrapper"
      style={{ width: `${width()}px`, height: `${height()}px` }}
    >
      {props.children}
    </div>
  )
}
