import '@/styles/rootcss.css'
import '@/styles/globals.css'
import Layout from '@/components/common/Layout'
import Head from '@/components/common/Head';
import toast, { Toaster } from 'react-hot-toast';

const App = ({ Component, pageProps }) => {






  return (
    // <BlogState>
    <>
      <Toaster />
      <Head />
          <Layout>
            <Component {...pageProps} />
          </Layout>
    </>
    // </BlogState>
  )

}

export default App