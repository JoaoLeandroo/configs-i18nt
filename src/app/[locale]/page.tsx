import SwitchButton from '../components/SwitchButton';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('index');

  return (
    <main className="bg-zinc-200 text-center h-screen">
        <h1 className='text-7xl font-bold'>{t('title')}</h1>
        <p className='font-medium text-lg'>{t("sub")}</p>

        <SwitchButton/>
    </main>
  );
}
