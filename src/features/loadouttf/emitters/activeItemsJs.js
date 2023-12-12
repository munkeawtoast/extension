const a = new MutationObserver((mutations) => {
  const currentItems = []
  mutations.forEach((mutation) => {
    const addedNodes = mutation.addedNodes[0]
    const removedNodes = mutation.removedNodes[0]

    const selectedItemManagers = [
      ...document.querySelectorAll(
        'item-manager-item.item-manager-item-selected'
      ),
    ]

    const orderingReferenceImageUrls = [
      ...document.querySelector('.item-manager-active-items').firstChild
        .firstChild.children,
    ].map((item) => item.style.backgroundImage)

    if (addedNodes) {
      const newItem = selectedItemManagers.find(
        (item) =>
          !currentItems.find((currentItem) => currentItem.title === item.title)
      )
      currentItems.push({
        title: newItem.getAttribute('title'),
        imageUrl: newItem.querySelector('.item-manager-item-img').style
          .backgroundImage,
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

a.observe(
  document.querySelector('.item-manager-active-items').firstChild.firstChild,
  {
    childList: true,
  }
)
