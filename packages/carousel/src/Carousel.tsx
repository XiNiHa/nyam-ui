import { ReactiveMap } from '@solid-primitives/map'
import { createElementSize } from '@solid-primitives/resize-observer'
import { Accessor, createContext, createSignal, JSX, Setter } from 'solid-js'

interface CarouselContextData {
  registerItem: (id: string) => {
    width: Accessor<number>
    height: Accessor<number>
  }
  deregisterItem: (id: string) => void
}

export const CarouselContext = createContext<CarouselContextData>({
  registerItem: () => ({ width: () => 0, height: () => 0 }),
  deregisterItem: () => {},
})

interface CarouselItemData {
  id: string
  width: Accessor<number>
  setWidth: Setter<number>
  height: Accessor<number>
  setHeight: Setter<number>
}

interface Props {
  /**
   * Abstract width of the carousel. This is used to calculate the position of the items in SSR.
   *
   * The actual size of the carousel never gets affected by this.
   */
  abstractWidth: number
  /**
   * Abstract height of the carousel. This is used to calculate the position of the items in SSR.
   *
   * The actual size of the carousel never gets affected by this.
   */
  abstractHeight: number

  children: JSX.Element[]
}

export default function Carousel(props: Props) {
  const [wrapper, setWrapper] = createSignal<HTMLDivElement>()
  const size = createElementSize(wrapper)
  const itemMap = new ReactiveMap<string, CarouselItemData>()

  const contextData: CarouselContextData = {
    registerItem: (id) => {
      const [width, setWidth] = createSignal(props.abstractWidth)
      const [height, setHeight] = createSignal(props.abstractHeight)
      itemMap.set(id, { id, width, setWidth, height, setHeight })
      return { width, height }
    },
    deregisterItem: (id) => {
      itemMap.delete(id)
    },
  }

  return (
    <CarouselContext.Provider value={contextData}>
      <div class="__carousel__">
        <div ref={setWrapper} class="wrapper">
          {props.children}
        </div>
      </div>
    </CarouselContext.Provider>
  )
}
