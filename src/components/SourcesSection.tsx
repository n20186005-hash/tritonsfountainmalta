'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function SourcesSection() {
  const t = useTranslations('sources');
  const messages = useMessages() as any;
  const items = (messages?.sources?.items || []) as Array<{ label: string; url: string; desc: string }>;

  return (
    <section id="sources" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl p-5 sm:p-6 transition-shadow hover:shadow-md"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span className="font-display text-lg font-semibold block mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.label}
              </span>
              <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
