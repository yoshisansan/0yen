import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '0yen',
  apiKey: process.env.MICROCMS_API_KEY,
});