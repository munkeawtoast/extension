import { Toggle } from '@radix-ui/react-toggle'
import { Icon } from '@iconify/react'
import StyledFormControlSettingRow from '../StyledFormControlSettingRow'

// TODO: implement settings row, should wait for ontoggle to return boolean to update boolean
export type SwitchSettingRowProps = {
  title: string
  description?: string
  tooltip?: React.ReactNode
  value: boolean
  onPressedChange: (value: boolean) => void
}

const SwitchSettingRow: React.FC<SwitchSettingRowProps> = ({
  onPressedChange,
  ...drillProps
}) => {
  return (
    <StyledFormControlSettingRow {...drillProps}>
      <Toggle
        onPressedChange={onPressedChange}
        className="group h-5 cursor-pointer w-5 bg-neutral-800 border-2 rounded-sm border-component-border data-[state=on]:bg-red-300"
      >
        <Icon
          icon="ph:check-bold"
          className="text-white scale-[1.75] translate-x-1 -translate-y-1.5 group-data-[state=off]/item:opacity-0"
        />
      </Toggle>
    </StyledFormControlSettingRow>
  )
}

export default SwitchSettingRow
