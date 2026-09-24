'use client';

import { useTranslations, useMessages } from 'next-intl';
import SectionIcon from './icons';

export default function ResponsibilitySection() {
  const t = useTranslations('responsibility');
  const messages = useMessages() as any;
  const items = (messages?.responsibility?.items || []) as Array<{
    key: string;
    name: string;
    desc: string;
  }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5" style={{ color: 'var(--accent)' }}>
                  <SectionIcon name={item.key} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
