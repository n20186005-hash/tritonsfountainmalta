'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const items = (messages?.faq?.items || []) as Array<{ question: string; answer: string }>;

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl p-5 sm:p-6"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                {item.question}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-open:rotate-180"
                  style={{ color: 'var(--accent)' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
