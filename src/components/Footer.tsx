import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Footer() {
  const t = useTranslations('Footer');
  
  return (
    <div className="bg-purple-600">
      <footer className="text-white p-12 md:py-10 container mx-auto text-sm">
        <section className="flex flex-col md:flex-row gap-6 justify-between">
          <div>
            <h4 className="font-bold">{t('projects.title')}</h4>
            <div className="mt-4">
              <Link href="/#projets">{t('projects.crowdfunding')}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold">{t('investors.title')}</h4>
            <div className="mt-4 flex flex-col gap-4">
              <Link href="/blog/selection">{t('investors.howToInvest')}</Link>
              <Link href="/risques">{t('investors.investmentRisks')}</Link>
              <Link href="/blog/cles-crowdfunding">{t('investors.whyInvest')}</Link>
              <Link href="/">{t('investors.needHelp')}</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold">{t('raiseFunds.title')}</h4>
            <div className="mt-4 flex flex-col gap-4">
              <Link href="/">{t('raiseFunds.realEstate')}</Link>
              <Link href="/">{t('raiseFunds.sme')}</Link>
            </div>
          </div>
        </section>
        <hr className="my-5" />
        <h2 className="font-bold">{t('warning.title')}</h2>
        <p className="my-5" id="avertissement">
          {t('warning.message')}
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/conditions" className="underline hover:text-purple-800">
            {t('termsOfUse')}
          </Link>
          <Link href="/politiques" className="underline hover:text-purple-800">
            {t('privacyPolicy')}
          </Link>
        </div>
      </footer>
    </div>
  );
}
