import { type FC, lazy } from 'react'

import { type OrderDetailsProps } from './OrderDetails'

export const OrderDetailsAsync = lazy<FC<OrderDetailsProps>>(
	async () => await import('./OrderDetails'),
)
