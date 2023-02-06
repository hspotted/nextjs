import Head from 'next/head'

import { LanguageSelector } from '@/components/common/LanguageSelector'
import DefaultLayout from '@/components/layouts/Default'
import useTranslation from 'next-translate/useTranslation'

// const Layout = dynamic(() => import('../components/layouts/Default'), { loading: () => <Loading /> })

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>NEXTJS</title>
      </Head>
      <DefaultLayout>
        <div>
          <LanguageSelector />
        </div>
        <h1 className='text-2xl'>{t('title')}</h1>
      </DefaultLayout>
    </>
  )
}
