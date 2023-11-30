import { Icon } from '@iconify/react'
import { FormControl, FormField, FormLabel } from '@radix-ui/react-form'
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { useState } from 'react'

export type StyledFormControlSettingRowProps = {
  title: string
  description?: string
  tooltip?: React.ReactNode
  children?: React.ReactNode
}

const StyledFormControlSettingRow: React.FC<
  StyledFormControlSettingRowProps
> = ({ tooltip, description, title, children }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)
  function handleTooltipOpenChange(newValue: boolean) {
    setTooltipOpen(newValue)
  }
  return (
    <FormField name={title} className="flex text-tf2_settings-label">
      <FormLabel className="pr-1">{title}</FormLabel>
      {tooltip && (
        <Tooltip onOpenChange={handleTooltipOpenChange}>
          <TooltipTrigger asChild>
            <button type="button" className="block px-1">
              <Icon icon={tooltipOpen ? 'ph:info-duotone' : 'ph:info'} />
            </button>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent
              side="top"
              className="text-tf2_settings-title data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-component-content px-[15px] py-[10px] text-[15px] leading-none shadow-lg will-change-[transform,opacity]"
              sideOffset={5}
            >
              {tooltip}
              <TooltipArrow className="fill-component-content" />
            </TooltipContent>
          </TooltipPortal>
        </Tooltip>
      )}
      <div className="text-black flex-1 flex justify-end">
        <FormControl asChild>{children}</FormControl>
      </div>
    </FormField>
  )
}

export default StyledFormControlSettingRow
