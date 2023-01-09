import '../styles/globals.css';

import { Provider } from 'react-redux';

import store from '../src/store/store';
import 'rsuite/dist/rsuite.min.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
