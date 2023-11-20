import { useDispatch } from 'react-redux';

// eslint-disable-next-line no-restricted-imports
import { type AppDispatch } from '@/app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
