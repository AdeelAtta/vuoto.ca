import Head from 'next/head'
import {URL} from '@/utils/constants'


export default function MetaData(metaData){

    const DOMAIN_URL = URL

    const {title,description,path,imageSrc,keywords,author="Vuoto , Copywriter: Marco Cianci, Developers & Testers: (Adeel Atta & Hammad shamir & Tahir Ali & Shabbir Khozema) ,"} = metaData;
    const url = `${DOMAIN_URL+path}`;
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {imageSrc.length > 0 && <meta property="og:image" content={imageSrc?.startsWith(`http`) ? imageSrc : `${DOMAIN_URL+imageSrc}` } />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageSrc.startsWith(`http`) ? imageSrc : `${DOMAIN_URL+imageSrc}` } />
        </Head>
    )
}