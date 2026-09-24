'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function ItinerariesSection() {
  const t = useTranslations('itineraries');
  const messages = useMessages() as any;
  const audiences = (messages?.itineraries?.audiences || []) as Array<{
    key: string;
    name: string;
    desc: string;
    steps: string[];
  }>;
  const generic = (messages?.itineraries?.generic || []) as Array<{
    key: string;
    name: string;
    desc: string;
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

        <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('audienceTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h4 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {a.name}
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                {a.desc}
              </p>
              <ol className="list-decimal list-inside text-sm space-y-1" style={{ color: 'var(--text-muted)' }}>
                {a.steps.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <h3 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('genericTitle')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {generic.map((g, i) => (
            <div
              key={i}
              className="rounded-xl p-5"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <h4 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {g.name}
              </h4>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                {g.desc}
              </p>
              <ol className="list-decimal list-inside text-sm space-y-1" style={{ color: 'var(--text-muted)' }}>
                {g.steps.map((s, j) => (
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
