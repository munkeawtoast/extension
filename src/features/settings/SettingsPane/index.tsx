import { Form } from '@radix-ui/react-form'
import classNames from 'classnames'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { useSettingsStore } from '../hooks/settingsStore'
import type { FilterKey } from '../filter'
import SelectSettingRow from './SelectSettingRow'
import SettingsHeader from './SettingsHeader'

export type SettingsPaneProps = {
  width?: 'screen' | 'default' | 'unset'
}

// type SetterFunction = (value: boolean) => void

// type FormToggleItem<T extends SetterFunction> = {
//   title: string
//   description?: string
//   tooltip?: React.ReactNode
//   setter: T
//   mapper: (value: boolean) => Parameters<T>['0']
// }

const SettingsPane: React.FC<SettingsPaneProps> = ({ width = 'default' }) => {
  const { filter, setFilter } = useSettingsStore((state) => ({
    filter: state.filter,
    setFilter: state.setFilter,
  }))

  // TODO: refactor current into this form
  // const forms: Array<FormToggleItem<typeof setMode>> = [
  //   {
  //     title: 'mode',
  //     setter: setMode,
  //     mapper: (value) => (value ? 'budget' : 'normal'),
  //     toggleHandler:
  //   },
  // ]

  function handleFilterSelect(filterName: FilterKey) {
    setFilter(filterName)
  }

  return (
    <TooltipProvider delayDuration={100}>
      <div className={classNames('font-sans', getPaneWidthStyle(width))}>
        <SettingsHeader
          large
          prefixElement={<img src="/assets/icon.svg" width={28} />}
          title="Pricetagged.TF"
        />
        <SettingsHeader title="Settings" />
        <div className="bg-tf2_settings-body h-32">
          <Form className="space-y-2">
            <div className="px-4 space-y-2">
              <SelectSettingRow
                title="filter"
                value={filter}
                availableValues={[
                  { label: 'No filter', value: 'all' } as const,
                  { label: 'Budget', value: 'only-budget-unique' } as const,
                  { label: 'Custom', value: 'custom' } as const,
                ]}
                onSelectValue={handleFilterSelect}
              />
            </div>
            {filter === 'custom' && (
              <div>
                <SettingsHeader
                  title="Custom"
                  rightElement={
                    <>
                      <div className="flex-1" />

                      {/* <Button className="text-tf2_settings-header group">
                        <Icon
                          className="group-hover:hidden block w-4 h-4"
                          icon="ph:trash-bold"
                        />
                        <Icon
                          className="group-hover:block hidden w-4 h-4"
                          icon="ph:trash-fill"
                        />
                      </Button> */}
                    </>
                  }
                />
              </div>
            )}
          </Form>
        </div>
      </div>
    </TooltipProvider>
  )
}

function getPaneWidthStyle(width: NonNullable<SettingsPaneProps['width']>) {
  const widthStyleMap: Record<NonNullable<SettingsPaneProps['width']>, any> = {
    screen: 'w-screen',
    default: 'w-[300px]',
    unset: null,
  }
  return widthStyleMap[width]
}

export default SettingsPane
