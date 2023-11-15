import { lazy } from 'react'

export const FeedPageAsync = lazy(async () => await import('./FeedPage'))
