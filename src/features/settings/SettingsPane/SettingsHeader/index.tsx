import classNames from 'classnames'

export type SettingsHeaderProps = {
  title: string
  prefixIcon?: React.ReactNode
  large?: boolean
}

const SettingsHeader: React.FC<SettingsHeaderProps> = ({
  large,
  title,
  prefixIcon,
}) => {
  return (
    <div
      className={classNames(
        'flex-col flex w-full bg-tf2_settings-body p-2',
        !large ? 'py-1 items-start' : 'items-center'
      )}
    >
      <div className="flex items-center">
        {prefixIcon && <div className="pr-4">{prefixIcon}</div>}
        <h1
          className={classNames(
            'w-fit',
            large
              ? 'text-tf2_settings-header text-center text-2xl'
              : 'text-tf2_settings-title'
          )}
        >
          {title}
        </h1>
      </div>

      {!large ? (
        <div className="border-b pb-1  h-2 w-full border-tf2_settings-title" />
      ) : null}
    </div>
  )
}

export default SettingsHeader
