import { AppProps } from "next/app";
import { Provider } from 'react-redux';
import '@/styles/global.scss';
import { wrapper } from '@/shared/config/store/makeStore';

function App({
  Component,
  ...rest
}: AppProps){
  const {
    store, props
  } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <div>
        <Component {...props.pageProps} />
      </div>
    </Provider>
  );
}

export default App;