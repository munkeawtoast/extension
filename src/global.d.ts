declare const __DEV__: boolean
/** Extension name, defined in packageJson.name */
declare const __NAME__: string

declare type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

// HACK: storybook has global variables as artifacts, this is a variable so that we can know if we are in storybook or not
declare const __STORYBOOK_CLIENT_API__: {} | undefined

declare type ObjectValues<T> = T[keyof T]
