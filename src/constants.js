// @flow

declare var __DEV__: ?string

export const SC_ATTR = 'data-styled-components'
export const SC_STREAM_ATTR = 'data-styled-streamed'
export const CONTEXT_KEY = '__styled-components-stylesheet__'

export const IS_BROWSER = typeof window !== 'undefined'

export const DISABLE_SPEEDY =
  (typeof __DEV__ === 'boolean' && __DEV__) ||
  process.env.NODE_ENV !== 'production'
