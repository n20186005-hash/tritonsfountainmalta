'use client';

import { useTranslations } from 'next-intl';
import { SITE } from '@/lib/site';

export default function EntityOverview() {
  const t = useTranslations('entity');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('aboutHeading')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {t('aboutText')}
        </p>

        {/* Geographic breadcrumb / hierarchy */}
        <nav
          aria-label="breadcrumb"
          className="inline-flex flex-wrap items-center gap-2 mb-12 text-sm font-medium px-4 py-2 rounded-full"
          style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}
        >
          <span style={{ color: 'var(--accent)' }}>{t('breadcrumbRoot')}</span>
          <span aria-hidden="true">→</span>
          <span>{SITE.city}</span>
          <span aria-hidden="true">→</span>
          <span>{SITE.country}</span>
        </nav>

        <h2
          className="font-display text-2xl sm:text-3xl font-semibold mb-4 mt-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('locationHeading')}
        </h2>
        <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          {t('locationText')}
        </p>

        <h2
          className="font-display text-2xl sm:text-3xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('landmarksHeading')}
        </h2>
        <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
          {t('landmarksText')}
        </p>

        <h2
          className="font-display text-2xl sm:text-3xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('historyHeading')}
        </h2>
        <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t('historyText')}
        </p>

        {/* Official tourism portal reference (E-E-A-T) */}
        <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('officialPortalPrefix')}{' '}
          <a
            href={SITE.govtTourismUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            {t('officialPortalLabel')}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
