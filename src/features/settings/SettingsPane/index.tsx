import { Form } from '@radix-ui/react-form'
import classNames from 'classnames'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { type Modes, useSettingsStore } from '../hooks/settingsStore'
import SelectSettingRow from './SelectSettingRow'
import SettingsHeader from './SettingsHeader'

export type SettingsPaneProps = {
  width?: 'screen' | 'default' | 'unset'
}

type SetterFunction = (value: boolean) => void

type FormToggleItem<T extends SetterFunction> = {
  title: string
  description?: string
  tooltip?: React.ReactNode
  setter: T
  mapper: (value: boolean) => Parameters<T>['0']
}

const SettingsPane: React.FC<SettingsPaneProps> = ({ width = 'default' }) => {
  const { mode, setMode } = useSettingsStore((state) => ({
    mode: state.mode,
    setMode: state.setMode,
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

  function handleModeSelect(a: string) {
    setMode(a as Modes)
  }

  return (
    <TooltipProvider delayDuration={100}>
      <div className={classNames('', getPaneWidthStyle(width))}>
        <SettingsHeader
          large
          prefixIcon={<img src="src/assets/icon.svg" width={20} />}
          title="PricetaggedTF"
        />
        <SettingsHeader title="Settings" />
        <div className="bg-tf2_settings-body h-32">
          <Form>
            <div className="px-4 space-y-2">
              <SelectSettingRow
                title="test"
                value={mode}
                availableValues={[
                  { label: 'normal', value: 'normal' } as const,
                  { label: 'budget', value: 'budget' } as const,
                ]}
                onSelectValue={handleModeSelect}
              />
              <SelectSettingRow
                title="test"
                value={'test2'}
                tooltip="test"
                availableValues={[
                  {
                    label: 'test',
                    value: 'test1',
                  } as const,
                  {
                    label: 'test2',
                    value: 'test2',
                  } as const,
                ]}
                onSelectValue={handleModeSelect}
              />
            </div>
            {/* SwitchSettingRow
            title="mode"
            value={mode === 'budget'}
            onPressedChange={handleModeToggle}
          / */}
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
