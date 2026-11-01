import { SiteImage as Image } from '@/components/site/site-image'
import { Frame, type VisualProps } from './frame'

const C = {
  espresso: '#3a2218',
  roast: '#1f130d',
  cream: '#f1e6d2',
  ember: '#c8551e',
  clay: '#e0a17a',
}

type Lot = {
  n: string
  origin: string
  notes: string
  roast: number
  bg: string
  fg: string
  accent: string
}

const lots: Lot[] = [
  { n: '01', origin: 'Sul de Minas', notes: 'mel, pera, amêndoa', roast: 2, bg: C.cream, fg: C.espresso, accent: C.ember },
  { n: '04', origin: 'Mantiqueira', notes: 'caramelo, laranja, cacau', roast: 3, bg: C.ember, fg: C.cream, accent: C.roast },
  { n: '07', origin: 'Cerrado Mineiro', notes: 'chocolate, nozes, melaço', roast: 4, bg: C.espresso, fg: C.cream, accent: C.ember },
  { n: '09', origin: 'Alta Mogiana', notes: 'cacau amargo, especiarias', roast: 5, bg: C.roast, fg: C.clay, accent: C.cream },
]

function SableLogo({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={`font-display block font-extrabold uppercase leading-[0.82] [font-stretch:125%] ${className ?? ''}`}
      style={{ letterSpacing: '-0.04em', ...style }}
    >
      Sable
    </span>
  )
}

function RoastScale({ level, color }: { level: number; color: string }) {
  return (
    <span className="flex gap-[3cqw]" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="block size-[5cqw] rounded-full"
          style={{ background: i <= level ? color : 'transparent', border: `0.6cqw solid ${color}` }}
        />
      ))}
    </span>
  )
}

/** A single bag; its own container so label type scales with the bag. */
function Bag({ lot, className, style }: { lot: Lot; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`@container relative flex aspect-[3/4.3] flex-col overflow-hidden rounded-t-[4%] rounded-b-[2%] ${className ?? ''}`}
      style={{ background: lot.bg, color: lot.fg, boxShadow: '0 3cqw 6cqw -2cqw rgba(0,0,0,0.45)', ...style }}
    >
      <div
        className="h-[9%] w-full opacity-30"
        style={{ backgroundImage: `repeating-linear-gradient(90deg, ${lot.fg} 0 1px, transparent 1px 3.2cqw)` }}
      />
      <div className="flex flex-1 flex-col justify-between p-[8cqw]">
        <div className="flex items-start justify-between font-mono text-[6cqw] uppercase tracking-wider">
          <span>Nº {lot.n}</span>
          <span style={{ color: lot.accent }}>Lote</span>
        </div>
        <div>
          <SableLogo className="text-[25cqw]" />
          <p className="mt-[5cqw] font-display text-[9cqw] font-semibold uppercase leading-none [font-stretch:80%]">
            {lot.origin}
          </p>
          <p className="mt-[3cqw] font-serif text-[8cqw] italic leading-tight opacity-90">{lot.notes}</p>
        </div>
        <div className="flex items-end justify-between">
          <RoastScale level={lot.roast} color={lot.fg} />
          <span className="font-mono text-[6cqw] uppercase">250 g</span>
        </div>
      </div>
    </div>
  )
}

export function SableCover({ label, fill }: VisualProps) {
  return (
    <Frame label={label} fill={fill} ratio="4/5" style={{ background: C.ember }}>
      <div className="absolute inset-x-0 bottom-0 h-[22%]" style={{ background: C.espresso }} />
      <div className="absolute inset-x-[6cqw] bottom-[16%] flex items-end justify-center">
        <Bag lot={lots[0]} className="w-[30%] -mr-[4%]" />
        <Bag lot={lots[2]} className="relative z-10 w-[38%]" />
        <Bag lot={lots[3]} className="w-[30%] -ml-[4%]" />
      </div>
      <span className="absolute left-[6cqw] top-[6cqw] font-mono text-[max(9px,1.8cqw)] uppercase tracking-widest" style={{ color: C.espresso }}>
        Torrefação de microlotes
      </span>
    </Frame>
  )
}

export function SablePackaging({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="16/9" style={{ background: C.cream }}>
      <div className="absolute inset-x-[5cqw] top-[10%] bottom-[16%] flex items-end justify-between gap-[3cqw]">
        {lots.map((lot) => (
          <div key={lot.n} className="flex h-full flex-1 flex-col justify-end">
            <Bag lot={lot} className="w-full" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[11%]" style={{ background: C.espresso }} />
      <div className="absolute inset-x-[5cqw] bottom-[3.2%] flex justify-between font-mono text-[max(7px,1cqw)] uppercase tracking-widest" style={{ color: C.cream }}>
        <span>Torra clara</span>
        <span>Torra média</span>
        <span>Torra média-escura</span>
        <span>Torra escura</span>
      </div>
    </Frame>
  )
}

export function SablePour({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="4/5" style={{ background: C.espresso }}>
      <Image src="/work/sable-pour.png" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover object-[46%_50%]" />
    </Frame>
  )
}

export function SableShop({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="16/10" style={{ background: C.clay }}>
      <div className="absolute inset-[3.5cqw] flex flex-col overflow-hidden shadow-[0_2cqw_5cqw_-2cqw_rgba(31,19,13,0.5)]" style={{ background: '#faf4ea', color: C.espresso }}>
        <div className="flex items-center justify-between border-b px-[2.6cqw] py-[1.4cqw]" style={{ borderColor: `${C.espresso}1f` }}>
          <SableLogo className="text-[2.2cqw]" />
          <span className="flex gap-[2.2cqw] text-[max(7px,1.15cqw)]">
            <span>Cafés</span>
            <span>Assinatura</span>
            <span>Métodos</span>
            <span className="font-semibold">Sacola (1)</span>
          </span>
        </div>
        <div className="grid flex-1 grid-cols-[1fr_1fr]">
          <div className="relative flex items-center justify-center" style={{ background: C.ember }}>
            <Bag lot={lots[1]} className="w-[46%]" />
          </div>
          <div className="flex flex-col justify-center gap-[1.8cqw] px-[3.5cqw]">
            <span className="self-start rounded-full px-[1.2cqw] py-[0.4cqw] font-mono text-[max(6px,0.9cqw)] uppercase tracking-widest" style={{ background: C.espresso, color: C.cream }}>
              Lote da estação
            </span>
            <div>
              <p className="font-display text-[4.4cqw] font-extrabold uppercase leading-[0.88] [font-stretch:110%]">
                Nº 04
                <br />
                Mantiqueira
              </p>
              <p className="mt-[1cqw] font-serif text-[1.8cqw] italic">caramelo, laranja, cacau</p>
            </div>
            <div className="grid grid-cols-3 border-y py-[1cqw] font-mono text-[max(6px,0.9cqw)] uppercase tracking-wider" style={{ borderColor: `${C.espresso}1f` }}>
              <span>1.250 m</span>
              <span>Natural</span>
              <span>Bourbon</span>
            </div>
            <div className="flex gap-[0.8cqw] text-[max(7px,1.05cqw)]">
              {['Grão', 'Espresso', 'Filtro', 'Prensa'].map((g) => (
                <span
                  key={g}
                  className="rounded-full border px-[1.2cqw] py-[0.5cqw]"
                  style={
                    g === 'Filtro'
                      ? { background: C.espresso, color: C.cream, borderColor: C.espresso }
                      : { borderColor: `${C.espresso}40` }
                  }
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between gap-[1.5cqw]">
              <span className="font-display text-[2.6cqw] font-semibold">R$ 68</span>
              <span className="flex-1 rounded-full py-[1.1cqw] text-center text-[max(7px,1.2cqw)] font-medium" style={{ background: C.ember, color: '#fff' }}>
                Adicionar à sacola
              </span>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  )
}

export function SableSystem({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="21/9" style={{ background: C.espresso, color: C.cream }}>
      <div className="absolute inset-0 grid grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col justify-between border-r p-[3cqw]" style={{ borderColor: `${C.cream}26` }}>
          <SableLogo className="text-[11cqw]" />
          <div className="flex items-end gap-[3cqw]">
            <SableLogo className="text-[3.4cqw]" style={{ color: C.ember }} />
            <span className="font-serif text-[1.8cqw] italic leading-tight">
              torrefação de
              <br />
              microlotes
            </span>
          </div>
        </div>
        <div className="grid grid-rows-4">
          {[
            ['Espresso', C.espresso, C.cream],
            ['Brasa', C.ember, C.cream],
            ['Creme', C.cream, C.espresso],
            ['Argila', C.clay, C.espresso],
          ].map(([n, bg, fg]) => (
            <div key={n} className="flex items-end justify-between px-[2cqw] pb-[1cqw] font-mono text-[max(7px,1cqw)] uppercase tracking-widest" style={{ background: bg, color: fg, borderBottom: `1px solid ${C.cream}26` }}>
              <span>{n}</span>
              <span>{bg}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-[2.2cqw] p-[3cqw]">
          <span className="font-mono text-[max(7px,1cqw)] uppercase tracking-widest opacity-70">Escala de torra</span>
          {lots.map((lot) => (
            <div key={lot.n} className="flex items-center justify-between">
              <span className="font-display text-[2cqw] font-bold [font-stretch:110%]">Nº {lot.n}</span>
              <span className="@container w-[55%]">
                <RoastScale level={lot.roast} color={C.cream} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}
