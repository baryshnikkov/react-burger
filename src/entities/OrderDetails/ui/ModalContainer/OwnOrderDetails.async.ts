import { type FC, lazy } from 'react'

import { type OwnOrderDetailsProps } from './OwnOrderDetails'

export const OwnOrderDetailsAsync = lazy<FC<OwnOrderDetailsProps>>(
	async () => await import('./OwnOrderDetails'),
)
