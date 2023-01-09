import { Toaster } from 'react-hot-toast';

import Header from '../src/components/Header/Header';

export default function Home() {
  return (
    <>
      <Toaster position='top-center' />
      <Header />
    </>
  );
}
