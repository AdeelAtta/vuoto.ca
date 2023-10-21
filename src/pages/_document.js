import { Html, Head, Main, NextScript } from 'next/document'
import Headd from '@/components/common/Head'

export default function Document() {
  return (
    <Html lang="en">
      <Headd />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
