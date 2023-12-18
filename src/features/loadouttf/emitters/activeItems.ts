// eslint-disable-next-line unicorn/prefer-node-protocol
import EventEmitter from 'events'
import type { ItemManagerItemElement } from '../elements'

const ACTIVE_ITEMS_EMITTER_EVENTS = {
  added: 'added',
  removed: 'removed',
  changed: 'changed',
} as const

export type ActiveItemEvent = {
  name: string
  element: ItemManagerItemElement
  referenceElement: HTMLDivElement
}
export type ActiveItemAddedEvent = ActiveItemEvent
export type ActiveItemRemovedEvent = ActiveItemEvent
export type ActiveItemsChangeEvent = {
  newItems: Array<ActiveItemEvent>
}

type ActiveItemsEmitterEventsHandlerMap = {
  added: (newItem: ActiveItemAddedEvent) => void
  removed: (newItem: ActiveItemRemovedEvent) => void
  changed: (newItems: ActiveItemsChangeEvent) => void
}

type InternalActiveItem = {
  title: string
  imageUrl: string
  element: ItemManagerItemElement
  referenceElement: HTMLDivElement
}

type ActiveItemsEmitterEvents = keyof typeof ACTIVE_ITEMS_EMITTER_EVENTS

export class ActiveItemsEmitter {
  private eventEmitter: EventEmitter
  private mutationObserver: MutationObserver
  private currentItems: Array<InternalActiveItem> = []

  constructor() {
    this.eventEmitter = new EventEmitter()

    const activeItemsOuterContainerElement = document.querySelector(
      '.item-manager-active-items'
    )!
    const activeItemsContainerElement =
      activeItemsOuterContainerElement.firstChild!.firstChild as HTMLDivElement

    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const selectedItemManagers = [
          ...(document.querySelectorAll(
            'item-manager-item.item-manager-item-selected'
          ) as NodeListOf<ItemManagerItemElement>),
        ]

        const orderReferenceBackgroundImages = [
          ...(activeItemsContainerElement.children as HTMLCollectionOf<HTMLDivElement>),
        ].map((item) => item.style.backgroundImage)

        mutation.addedNodes.forEach((addedReferenceNode) => {
          const addedReferenceDiv = addedReferenceNode as HTMLDivElement
          const newItemManagerElement = selectedItemManagers.find(
            (item) =>
              !this.currentItems.find(
                (currentItem) => currentItem.title === item.title
              )
          )!
          const newItem: InternalActiveItem = {
            title: newItemManagerElement.title,
            imageUrl: (
              newItemManagerElement.querySelector(
                '.item-manager-item-img'
              )! as HTMLDivElement
            ).style.backgroundImage,
            element: newItemManagerElement,
            referenceElement: addedReferenceDiv,
          }
          this.currentItems.push(newItem)
          this.currentItems.sort(
            ({ imageUrl }, { imageUrl: imageUrl2 }) =>
              orderReferenceBackgroundImages.indexOf(imageUrl) -
              orderReferenceBackgroundImages.indexOf(imageUrl2)
          )
          this.emit('added', {
            name: newItem.title,
            element: newItem.element,
            referenceElement: addedReferenceDiv,
          })
        })

        mutation.removedNodes.forEach((removedReferenceNode) => {
          const removedReferenceDiv = removedReferenceNode as HTMLDivElement
          const removedItemIndex = this.currentItems.findIndex(
            ({ imageUrl }) =>
              removedReferenceDiv.style.backgroundImage === imageUrl
          )
          const removedItem = this.currentItems[removedItemIndex]
          this.currentItems.splice(removedItemIndex, 1)
          this.emit('removed', {
            name: removedItem.title,
            element: removedItem.element,
            referenceElement: removedReferenceDiv,
          })
        })

        this.emit('changed', {
          newItems: this.currentItems.map(
            ({ title, element, referenceElement }) => ({
              name: title,
              element,
              referenceElement,
            })
          ),
        })
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

  private emit<T extends ActiveItemsEmitterEvents>(
    event: T,
    ...args: Parameters<ActiveItemsEmitterEventsHandlerMap[T]>
  ) {
    this.eventEmitter.emit(event, ...args)
  }
}
