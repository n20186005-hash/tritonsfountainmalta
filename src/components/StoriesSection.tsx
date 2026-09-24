'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function StoriesSection() {
  const t = useTranslations('stories');
  const messages = useMessages() as any;
  const items = (messages?.stories?.items || []) as Array<{
    id: string;
    title: string;
    content: string;
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

        <div className="space-y-8">
          {items.map((item, i) => (
            <article
              key={i}
              className="rounded-2xl p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
