// eslint-disable-next-line unicorn/prefer-node-protocol
import EventEmitter from 'events'
import type { ItemManagerItemElement } from '../elements'

const ACTIVE_ITEMS_EMITTER_EVENTS = {
  added: 'added',
  removed: 'removed',
} as const

type ActiveItemsEmitterEventsHandlerMap = {
  added: (newItem: ItemManagerItemElement) => void
  removed: (newItem: ItemManagerItemElement) => void
}

type ActiveItem = {
  title: string
  imageUrl: string
  element: ItemManagerItemElement
}

type ActiveItemsEmitterEvents = keyof typeof ACTIVE_ITEMS_EMITTER_EVENTS

export class ActiveItemsEmitter {
  private eventEmitter: EventEmitter
  private mutationObserver: MutationObserver

  constructor() {
    this.eventEmitter = new EventEmitter()

    const activeItemsOuterContainerElement = document.querySelector(
      '.item-manager-active-items'
    )!
    const activeItemsContainerElement =
      activeItemsOuterContainerElement.firstChild!.firstChild as HTMLDivElement

    this.mutationObserver = new MutationObserver((mutations) => {
      const currentItems: Array<ActiveItem> = []
      mutations.forEach((mutation) => {
        const addedNodes = mutation.addedNodes[0] as HTMLDivElement
        const removedNodes = mutation.removedNodes[0] as HTMLDivElement

        const selectedItemManagers = [
          ...(document.querySelectorAll(
            'item-manager-item.item-manager-item-selected'
          ) as unknown as Array<HTMLDivElement>),
        ]

        const orderingReferenceImageUrls = [
          ...(activeItemsContainerElement.children as unknown as Array<HTMLDivElement>),
        ].map((item) => item.style.backgroundImage)

        if (addedNodes) {
          const newItem = selectedItemManagers.find(
            (item) =>
              !currentItems.find(
                (currentItem) => currentItem.title === item.title
              )
          )!
          currentItems.push({
            title: newItem.title,
            imageUrl: (<HTMLDivElement>(
              newItem.querySelector('.item-manager-item-img')!
            )).style.backgroundImage,
            element: newItem,
          })
          currentItems.sort(
            ({ imageUrl }, { imageUrl: imageUrl2 }) =>
              orderingReferenceImageUrls.indexOf(imageUrl) -
              orderingReferenceImageUrls.indexOf(imageUrl2)
          )
        } else if (removedNodes) {
          currentItems.splice(
            currentItems.findIndex(
              ({ imageUrl }) => removedNodes.style.backgroundImage === imageUrl
            ),
            1
          )
        }
      })
    })

    this.mutationObserver.observe(activeItemsContainerElement, {
      childList: true,
    })
  }

  public on<T extends ActiveItemsEmitterEvents>(
    event: T,
    handler: ActiveItemsEmitterEventsHandlerMap[T]
  ) {
    this.eventEmitter.on(event, handler)
  }

  public off<T extends ActiveItemsEmitterEvents>(
    event: T,
    handler: ActiveItemsEmitterEventsHandlerMap[T]
  ) {
    this.eventEmitter.off(event, handler)
  }
}
