import type { ChangeEvent } from 'react'

import { locales } from 'i18n'
import setLanguage from 'next-translate/setLanguage'
import useTranslation from 'next-translate/useTranslation'

const languageFlags: { locale: string; flag: string }[] = [
  { locale: 'en', flag: 'GB' },
  { locale: 'es', flag: 'ES' },
  { locale: 'pt', flag: 'PT' }
]

export function LanguageSelector() {
  const { lang } = useTranslation()

  function languageHandler({ target }: ChangeEvent<HTMLSelectElement>) {
    setLanguage(target.value)
  }

  return (
    <select
      name='currentLanguage'
      value={lang}
      onChange={languageHandler}>
      {locales.map((locale) => (
        <option
          value={locale}
          key={locale}>
          {languageFlags?.find((l) => l.locale === locale)?.flag}
        </option>
      ))}
    </select>
  )
}
