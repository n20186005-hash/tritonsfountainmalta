'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function TransportGuideSection() {
  const t = useTranslations('transportGuide');
  const messages = useMessages() as any;
  const guide = (messages?.transportGuide || {}) as {
    airport?: { name: string; steps: string[] };
    public?: { name: string; steps: string[] };
    taxi?: { name: string; steps: string[] };
    parking?: { name: string; steps: string[] };
  };

  const blocks = [guide.airport, guide.public, guide.taxi, guide.parking].filter(Boolean) as Array<{
    name: string;
    steps: string[];
  }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blocks.map((b, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {b.name}
              </h3>
              <ol className="list-decimal list-inside text-sm space-y-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {b.steps.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
