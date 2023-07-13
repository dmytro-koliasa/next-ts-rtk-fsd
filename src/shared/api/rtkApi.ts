import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { tokenService } from '@/shared/lib/services/token.service';
import { StoreSchema, ThunkExtraArg } from '@/shared/types/store';
import { getCookie } from 'cookies-next';
import { LANG_COOKIE_KEY, Language } from '@/shared/config/lang';

function getLang(extra?: ThunkExtraArg): Language {
  const getSsrLang = () => {
    const context = extra?.context;
    if (!context) return undefined;
    if ('req' in context) {
      if (context.req && 'cookies' in context.req) {
        return context.req.cookies.slang;
      }
    }
    return undefined;
  }

  const ssrLang = getSsrLang();
  const clientLang = getCookie(LANG_COOKIE_KEY);
  return (ssrLang || clientLang || Language.UKRAINIAN) as Language;
}

export const rtkApi = createApi({
  reducerPath: 'api',
  tagTypes: [],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.test.ua/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState, extra }) => {
      const token = (getState() as StoreSchema).session.accessToken || tokenService.getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      const lang = getLang(extra as ThunkExtraArg);
      headers.set('X-localization', lang as string);
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({})
});

export const { getRunningQueryThunk } = rtkApi.util;