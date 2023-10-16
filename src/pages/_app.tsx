import { AppProps } from "next/app";
import { Provider } from 'react-redux';
import '@/styles/global.scss';
import { wrapper } from '@/shared/config/store/makeStore';
import { FloatingProvider } from '@/shared/lib/components/FloatingProvider';
import { appWithTranslation } from 'next-i18next';

function App({
  Component,
  ...rest
}: AppProps){
  const {
    store, props
  } = wrapper.useWrappedStore(rest);

  return (
    <FloatingProvider>
      <Provider store={store}>
        <div>
          <Component {...props.pageProps} />
          <div id="portal" />
        </div>
      </Provider>
    </FloatingProvider>
  );
}

export default appWithTranslation(App);