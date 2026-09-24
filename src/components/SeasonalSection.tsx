'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function SeasonalSection() {
  const t = useTranslations('seasonal');
  const messages = useMessages() as any;
  const cols = (messages?.seasonal?.cols || {}) as Record<string, string>;
  const rows = (messages?.seasonal?.rows || []) as Array<{
    season: string;
    weather: string;
    wear: string;
    tip: string;
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

        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border-color)' }}>
          <table className="w-full text-left border-collapse" style={{ background: 'var(--bg-tertiary)' }}>
            <thead>
              <tr style={{ color: 'var(--text-muted)' }}>
                <th className="p-4 text-sm font-semibold">{cols.season}</th>
                <th className="p-4 text-sm font-semibold">{cols.weather}</th>
                <th className="p-4 text-sm font-semibold">{cols.wear}</th>
                <th className="p-4 text-sm font-semibold">{cols.tip}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--border-color)' }}>
                  <td className="p-4 align-top font-medium" style={{ color: 'var(--text-primary)' }}>{r.season}</td>
                  <td className="p-4 align-top text-sm" style={{ color: 'var(--text-secondary)' }}>{r.weather}</td>
                  <td className="p-4 align-top text-sm" style={{ color: 'var(--text-secondary)' }}>{r.wear}</td>
                  <td className="p-4 align-top text-sm" style={{ color: 'var(--text-secondary)' }}>{r.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs" style={{ color: 'var(--text-muted)' }}>{t('note')}</p>
      </div>
    </section>
  );
}
