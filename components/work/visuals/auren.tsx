import { SiteImage as Image } from '@/components/site/site-image'
import { Frame, type VisualProps } from './frame'

const C = {
  stone: '#e6dccb',
  lime: '#f1ebe0',
  travertine: '#d3c2a5',
  umber: '#8c6a48',
  shadow: '#2b2620',
}

function AurenSymbol({ className, color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" fill="none" stroke={color} strokeWidth="2" />
      <path d="M1 31h20M33 31h14" stroke={color} strokeWidth="2" />
      <rect x="25" y="1" width="4" height="46" fill={color} />
    </svg>
  )
}

function Wordmark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <span className={`font-serif font-light uppercase ${className ?? ''}`} style={{ letterSpacing: '0.32em', ...style }}>
      Auren
    </span>
  )
}

export function AurenCover({ label, fill, priority }: VisualProps) {
  return (
    <Frame label={label} fill={fill} ratio="4/5" style={{ background: C.shadow }}>
      <Image
        src="/work/auren-facade.png"
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover object-[62%_50%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b2620]/80 via-[#2b2620]/10 to-transparent" />
      <div className="absolute inset-0 grid grid-cols-4" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className="border-r border-[#f1ebe0]/20" />
        ))}
      </div>
      <div className="absolute inset-x-[6cqw] bottom-[6cqw] flex items-end justify-between text-[#f1ebe0]">
        <div className="flex flex-col gap-[2cqw]">
          <AurenSymbol className="size-[9cqw]" />
          <Wordmark className="text-[9cqw] leading-none" />
        </div>
        <span className="pb-[1cqw] font-mono text-[max(9px,1.8cqw)] uppercase tracking-widest opacity-80">
          Arq. / 01
        </span>
      </div>
    </Frame>
  )
}

export function AurenIdentity({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="16/9" style={{ background: C.stone, color: C.shadow }}>
      <div className="absolute inset-0 grid grid-cols-[1.25fr_1fr]">
        <div className="relative flex flex-col items-center justify-center gap-[4cqw] border-r" style={{ borderColor: `${C.shadow}22` }}>
          <div className="relative">
            <svg viewBox="0 0 100 100" className="absolute -inset-[5cqw] h-[calc(100%+10cqw)] w-[calc(100%+10cqw)]" aria-hidden="true">
              <circle cx="50" cy="50" r="49" fill="none" stroke={C.umber} strokeWidth="0.25" strokeDasharray="1 1.5" />
              <path d="M0 50h100M50 0v100M0 0l100 100M100 0L0 100" stroke={C.umber} strokeWidth="0.2" opacity="0.6" />
            </svg>
            <AurenSymbol className="relative size-[18cqw]" />
          </div>
          <Wordmark className="text-[4.4cqw] leading-none" />
          <span className="absolute left-[3cqw] top-[3cqw] font-mono text-[max(8px,1.1cqw)] uppercase tracking-widest" style={{ color: C.umber }}>
            Módulo 1:1 — 48 u
          </span>
        </div>
        <div className="flex flex-col justify-between p-[3.5cqw]">
          <div>
            <p className="font-serif text-[13cqw] font-light leading-[0.8]">Aa</p>
            <div className="mt-[2cqw] flex flex-col gap-[0.6cqw] font-mono text-[max(8px,1.15cqw)] uppercase tracking-wider">
              <span>Fraunces Light — Títulos</span>
              <span style={{ color: C.umber }}>Archivo — Texto corrido</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[1cqw]">
            {[
              { name: 'Cal', hex: C.lime },
              { name: 'Travertino', hex: C.travertine },
              { name: 'Sombra', hex: C.shadow },
            ].map((s) => (
              <div key={s.name} className="flex flex-col gap-[0.8cqw]">
                <span className="block aspect-[3/4] w-full" style={{ background: s.hex, outline: `1px solid ${C.shadow}22` }} />
                <span className="font-mono text-[max(8px,1cqw)] uppercase leading-tight tracking-wider">
                  {s.name}
                  <br />
                  <span style={{ color: C.umber }}>{s.hex}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}

export function AurenWebsite({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="16/10" style={{ background: C.travertine }}>
      <div className="absolute inset-[3.5cqw] flex flex-col overflow-hidden shadow-[0_2cqw_5cqw_-2cqw_rgba(43,38,32,0.45)]" style={{ background: C.lime, color: C.shadow }}>
        <div className="flex items-center justify-between border-b px-[3cqw] py-[1.6cqw]" style={{ borderColor: `${C.shadow}1f` }}>
          <span className="flex items-center gap-[1cqw]">
            <AurenSymbol className="size-[2.2cqw]" />
            <Wordmark className="text-[1.6cqw]" />
          </span>
          <span className="flex gap-[2.4cqw] text-[max(7px,1.2cqw)]">
            <span>Obras</span>
            <span>Método</span>
            <span>Escritório</span>
            <span style={{ color: C.umber }}>Contato</span>
          </span>
        </div>
        <div className="grid flex-1 grid-cols-[1fr_1.05fr] gap-[2.5cqw] p-[3cqw]">
          <div className="flex flex-col justify-between">
            <span className="font-mono text-[max(7px,1cqw)] uppercase tracking-widest" style={{ color: C.umber }}>
              Arquitetura — São Paulo
            </span>
            <p className="font-serif text-[5.4cqw] font-light leading-[0.98] tracking-[-0.02em]">
              Pedra, luz
              <br />e tempo como
              <br />
              <em className="italic" style={{ color: C.umber }}>
                matéria-prima.
              </em>
            </p>
            <div className="flex flex-col text-[max(7px,1.15cqw)]">
              {[
                ['Casa Pedra Alta', 'Residencial'],
                ['Pavilhão Norte', 'Cultural'],
                ['Edifício Travessa', 'Uso misto'],
              ].map(([n, k]) => (
                <span key={n} className="flex justify-between border-t py-[0.9cqw]" style={{ borderColor: `${C.shadow}1f` }}>
                  <span>{n}</span>
                  <span style={{ color: C.umber }}>{k}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <Image src="/work/auren-interior.png" alt="" fill sizes="40vw" className="object-cover" />
          </div>
        </div>
      </div>
    </Frame>
  )
}

export function AurenInterior({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="4/5" style={{ background: C.shadow }}>
      <Image src="/work/auren-interior.png" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      <span className="absolute bottom-[5cqw] left-[5cqw] font-mono text-[max(9px,2.6cqw)] uppercase tracking-widest text-[#f1ebe0]">
        Luz / Matéria
      </span>
    </Frame>
  )
}

export function AurenStationery({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="21/9" style={{ background: C.shadow }}>
      <div className="absolute inset-0 flex items-center justify-center gap-[5cqw]">
        <div
          className="relative flex aspect-[1/1.414] h-[78%] flex-col justify-between p-[2.4cqw] shadow-[0_3cqw_4cqw_-2cqw_rgba(0,0,0,0.6)]"
          style={{ background: C.lime, color: C.shadow }}
        >
          <div className="flex items-start justify-between">
            <AurenSymbol className="size-[2.6cqw]" />
            <span className="text-right font-mono text-[max(6px,0.7cqw)] uppercase leading-relaxed tracking-wider" style={{ color: C.umber }}>
              Auren Arquitetura
              <br />
              São Paulo — Lisboa
            </span>
          </div>
          <div className="flex flex-col gap-[0.7cqw]">
            {[92, 100, 96, 100, 64].map((w, i) => (
              <span key={i} className="block h-[0.35cqw]" style={{ width: `${w}%`, background: `${C.shadow}33` }} />
            ))}
          </div>
          <div className="flex items-end justify-between">
            <Wordmark className="text-[1.3cqw]" />
            <span className="block h-[4cqw] w-[0.5cqw]" style={{ background: C.travertine }} />
          </div>
        </div>
        <div className="flex h-[78%] flex-col justify-center gap-[2.5cqw]">
          <div
            className="flex aspect-[85/55] w-[24cqw] flex-col justify-between p-[1.8cqw] shadow-[0_2cqw_3cqw_-1.5cqw_rgba(0,0,0,0.6)]"
            style={{ background: C.lime, color: C.shadow }}
          >
            <Wordmark className="text-[1.5cqw]" />
            <span className="flex flex-col font-mono text-[max(6px,0.75cqw)] uppercase leading-relaxed tracking-wider">
              <span>Helena Duarte</span>
              <span style={{ color: C.umber }}>Arquiteta sócia</span>
            </span>
          </div>
          <div
            className="flex aspect-[85/55] w-[24cqw] items-center justify-center shadow-[0_2cqw_3cqw_-1.5cqw_rgba(0,0,0,0.6)]"
            style={{ background: C.travertine, color: C.shadow }}
          >
            <AurenSymbol className="size-[6cqw]" />
          </div>
        </div>
      </div>
    </Frame>
  )
}
