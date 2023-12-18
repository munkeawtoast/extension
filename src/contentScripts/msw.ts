import { setupWorker } from 'msw'
import { mockItemsRequestInterceptors } from '~/features/items/hooks/apiMock/item'
import { mockItemGroupsRequestInterceptors } from '~/features/items/hooks/apiMock/itemGroup'

export async function setupWorkers() {
  const worker = setupWorker(
    ...mockItemGroupsRequestInterceptors,
    ...mockItemsRequestInterceptors
  )
  const registrationResult = await worker.start()

  if (!registrationResult) {
    // eslint-disable-next-line no-console
    console.log('MSW registration failed')
  } else {
    // eslint-disable-next-line no-console
    console.log('MSW registration successful')
  }
}
