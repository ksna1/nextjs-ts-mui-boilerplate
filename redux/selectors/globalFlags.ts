import { RootState } from '@base-app/redux/store';

export const getGlobalFlagsSelector = (state: RootState) => state.globalFlags;
