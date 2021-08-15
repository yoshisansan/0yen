import { createContext } from 'react';

type MicroCMSType = {
  microCMSdata: any;
};

export const MicroCMS = createContext<MicroCMSType>({
  microCMSdata: null
});
