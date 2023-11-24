import { useDispatch } from 'react-redux';

// eslint-disable-next-line boundaries/element-types
import { type AppDispatch } from '@/app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
