import { Frame, type VisualProps } from './frame'

const C = {
  ink: '#0b0b0c',
  panel: '#141416',
  line: '#26262a',
  fog: '#e7e7e4',
  muted: '#8a8a90',
  signal: '#2f6bff',
  paper: '#f4f4f2',
}

const bars = [22, 30, 26, 38, 34, 48, 44, 58, 52, 66, 61, 74, 70, 63, 80, 72, 68, 86, 78, 70, 62, 54, 46, 40]

const incidents = [
  { p: 'P1', title: 'Order sync failing — CPS warehouse', owner: 'MR', sla: '00:42', status: 'Investigating' },
  { p: 'P2', title: 'Carrier API latency above threshold', owner: 'JL', sla: '02:15', status: 'Assigned' },
  { p: 'P2', title: 'Pick list mismatch on route 14', owner: 'AT', sla: '03:30', status: 'Assigned' },
  { p: 'P3', title: 'Label printer offline — dock 3', owner: 'RS', sla: '06:00', status: 'Queued' },
  { p: 'P3', title: 'Inventory recount requested', owner: 'DK', sla: '11:20', status: 'Queued' },
]

function FluxLogo({ className, color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <span className={`font-display inline-flex items-center gap-[0.35em] font-bold lowercase tracking-[-0.04em] ${className ?? ''}`} style={{ color }}>
      <span className="inline-block size-[0.62em] rounded-[0.14em]" style={{ background: C.signal }} />
      flux
    </span>
  )
}

function Priority({ p }: { p: string }) {
  const style =
    p === 'P1'
      ? { background: C.signal, color: '#fff', borderColor: C.signal }
      : p === 'P2'
        ? { color: C.fog, borderColor: C.fog }
        : { color: C.muted, borderColor: C.line }
  return (
    <span className="inline-flex justify-center rounded-[0.3em] border px-[0.5em] py-[0.1em] font-mono" style={style}>
      {p}
    </span>
  )
}

/** The dashboard; a container of its own so it can be cropped and reused at any size. */
function Dashboard({ className }: { className?: string }) {
  return (
    <div className={`@container aspect-[16/10] ${className ?? ''}`}>
      <div className="grid h-full grid-cols-[17%_1fr] text-[1.15cqw]" style={{ background: C.ink, color: C.fog }}>
        <aside className="flex flex-col gap-[2.4cqw] border-r p-[2cqw]" style={{ borderColor: C.line }}>
          <FluxLogo className="text-[2.2cqw]" color={C.fog} />
          <nav className="flex flex-col gap-[0.4cqw]">
            {['Overview', 'Incidents', 'Shifts', 'Routing', 'Reports'].map((item, i) => (
              <span
                key={item}
                className="rounded-[0.5cqw] px-[1cqw] py-[0.7cqw]"
                style={i === 1 ? { background: C.panel, color: '#fff' } : { color: C.muted }}
              >
                {item}
              </span>
            ))}
          </nav>
          <span className="mt-auto font-mono text-[0.95cqw]" style={{ color: C.muted }}>
            Shift B · 14:00–22:00
          </span>
        </aside>
        <main className="flex flex-col gap-[1.6cqw] p-[2cqw]">
          <div className="flex items-center justify-between">
            <span>
              <span style={{ color: C.muted }}>Operations / </span>Incidents
            </span>
            <span className="flex">
              {['MR', 'JL', 'AT'].map((a, i) => (
                <span
                  key={a}
                  className="-ml-[0.6cqw] flex size-[2.4cqw] items-center justify-center rounded-full border-2 font-mono text-[0.8cqw]"
                  style={{ borderColor: C.ink, background: i === 0 ? C.signal : '#3a3a40' }}
                >
                  {a}
                </span>
              ))}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-[1cqw]">
            {[
              ['Open', '12'],
              ['P1 active', '1'],
              ['Median ack', '2m 40s'],
              ['SLA at risk', '3'],
            ].map(([k, v], i) => (
              <div key={k} className="rounded-[0.8cqw] border p-[1.2cqw]" style={{ borderColor: C.line, background: C.panel }}>
                <span className="block text-[0.95cqw]" style={{ color: C.muted }}>
                  {k}
                </span>
                <span className="font-display mt-[0.4cqw] block text-[2.4cqw] font-semibold" style={i === 1 ? { color: C.signal } : undefined}>
                  {v}
                </span>
              </div>
            ))}
          </div>
          <div className="flex h-[22%] items-end gap-[0.45cqw] rounded-[0.8cqw] border p-[1.2cqw]" style={{ borderColor: C.line, background: C.panel }}>
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-[0.2cqw]"
                style={{ height: `${h}%`, background: i === 17 ? C.signal : '#34343a' }}
              />
            ))}
          </div>
          <div className="flex flex-1 flex-col overflow-hidden rounded-[0.8cqw] border" style={{ borderColor: C.line }}>
            {incidents.map((row, i) => (
              <div
                key={row.title}
                className="grid flex-1 grid-cols-[6%_1fr_14%_7%_9%] items-center gap-[1cqw] px-[1.2cqw]"
                style={{ borderTop: i ? `1px solid ${C.line}` : undefined, background: i === 0 ? '#2f6bff14' : undefined }}
              >
                <Priority p={row.p} />
                <span className="truncate">{row.title}</span>
                <span style={{ color: C.muted }}>{row.status}</span>
                <span className="font-mono" style={{ color: C.muted }}>
                  {row.owner}
                </span>
                <span className="text-right font-mono" style={{ color: i === 0 ? C.signal : C.fog }}>
                  {row.sla}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export function FluxCover({ label, fill }: VisualProps) {
  return (
    <Frame label={label} fill={fill} ratio="4/5" style={{ background: C.signal }}>
      <div className="absolute left-[12%] top-[12%] w-[150%] overflow-hidden rounded-[1.5cqw] shadow-[0_4cqw_8cqw_-3cqw_rgba(0,0,0,0.55)]">
        <Dashboard />
      </div>
      <span className="font-display absolute bottom-[3cqw] left-[5cqw] text-[34cqw] font-bold lowercase leading-[0.75] tracking-[-0.06em]" style={{ color: C.paper }}>
        flux
      </span>
    </Frame>
  )
}

export function FluxInterface({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="16/9" style={{ background: '#1c1c20' }}>
      <div className="absolute inset-x-[6%] top-[7%] overflow-hidden rounded-t-[1cqw] shadow-[0_3cqw_6cqw_-2cqw_rgba(0,0,0,0.6)]" style={{ outline: `1px solid ${C.line}` }}>
        <Dashboard />
      </div>
    </Frame>
  )
}

export function FluxSite({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="16/10" style={{ background: C.paper, color: C.ink }}>
      <div className="flex items-center justify-between px-[4cqw] py-[2.4cqw] text-[max(7px,1.2cqw)]">
        <FluxLogo className="text-[2.4cqw]" />
        <span className="flex items-center gap-[2.4cqw]">
          <span>Product</span>
          <span>Customers</span>
          <span>Pricing</span>
          <span className="rounded-full px-[1.4cqw] py-[0.6cqw]" style={{ background: C.ink, color: C.paper }}>
            Sign in
          </span>
        </span>
      </div>
      <div className="px-[4cqw] pt-[3cqw]">
        <p className="font-display text-[6.4cqw] font-semibold leading-[0.92] tracking-[-0.045em]">
          Operations,
          <br />
          <span style={{ color: C.signal }}>without the noise.</span>
        </p>
        <div className="mt-[2.4cqw] flex items-center gap-[1.2cqw] text-[max(7px,1.2cqw)]">
          <span className="rounded-full px-[1.8cqw] py-[0.8cqw] font-medium text-white" style={{ background: C.signal }}>
            Start free trial
          </span>
          <span className="rounded-full border px-[1.8cqw] py-[0.8cqw]" style={{ borderColor: `${C.ink}33` }}>
            Book a demo
          </span>
        </div>
      </div>
      <div className="absolute left-[28%] top-[44%] w-[80%] overflow-hidden rounded-[1cqw] shadow-[0_3cqw_6cqw_-2cqw_rgba(11,11,12,0.4)]">
        <Dashboard />
      </div>
    </Frame>
  )
}

export function FluxMobile({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="4/5" style={{ background: '#1c1c20' }}>
      <div
        className="@container absolute left-1/2 top-[8%] flex aspect-[9/19] w-[50%] -translate-x-1/2 flex-col gap-[4cqw] overflow-hidden rounded-[12cqw] border-[2.5cqw] p-[6cqw]"
        style={{ background: C.ink, borderColor: '#2c2c31', color: C.fog }}
      >
        <div className="flex justify-between font-mono text-[5cqw]" style={{ color: C.muted }}>
          <span>14:32</span>
          <span>Shift B</span>
        </div>
        <span className="text-[6cqw]" style={{ color: C.muted }}>
          Active incident
        </span>
        <div className="flex flex-col gap-[4cqw] rounded-[6cqw] p-[6cqw]" style={{ background: C.signal, color: '#fff' }}>
          <span className="font-mono text-[5cqw]">P1 · Order sync</span>
          <span className="font-display text-[9cqw] font-semibold leading-[1.02] tracking-[-0.03em]">CPS warehouse not syncing for 12 min</span>
          <span className="font-mono text-[14cqw] font-medium leading-none">00:42</span>
          <span className="text-[5cqw] opacity-80">left on SLA</span>
        </div>
        <div className="grid grid-cols-2 gap-[3cqw] text-[5.5cqw]">
          <span className="rounded-full py-[3.5cqw] text-center font-medium" style={{ background: '#fff', color: C.ink }}>
            Acknowledge
          </span>
          <span className="rounded-full border py-[3.5cqw] text-center" style={{ borderColor: C.line }}>
            Reassign
          </span>
        </div>
        {incidents.slice(1, 3).map((row) => (
          <div key={row.title} className="flex items-center gap-[3cqw] border-t pt-[4cqw] text-[5.5cqw]" style={{ borderColor: C.line }}>
            <span className="text-[5cqw]">
              <Priority p={row.p} />
            </span>
            <span className="flex-1 truncate">{row.title}</span>
            <span className="font-mono" style={{ color: C.muted }}>
              {row.sla}
            </span>
          </div>
        ))}
      </div>
    </Frame>
  )
}

export function FluxSystem({ label }: VisualProps) {
  return (
    <Frame label={label} ratio="21/9" style={{ background: C.paper, color: C.ink }}>
      <div className="absolute inset-0 grid grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex flex-col justify-center gap-[1.4cqw] border-r px-[3cqw]" style={{ borderColor: `${C.ink}1a` }}>
          {[
            ['Display', '4.6cqw', 600],
            ['Title', '2.6cqw', 600],
            ['Body', '1.4cqw', 400],
          ].map(([name, size, weight]) => (
            <div key={name as string} className="flex items-baseline justify-between gap-[2cqw] border-b pb-[1cqw]" style={{ borderColor: `${C.ink}14` }}>
              <span className="font-display leading-none tracking-[-0.03em]" style={{ fontSize: size as string, fontWeight: weight as number }}>
                {name}
              </span>
              <span className="font-mono text-[max(7px,0.95cqw)]" style={{ color: C.muted }}>
                {size === '4.6cqw' ? '48 / 52' : size === '2.6cqw' ? '24 / 30' : '14 / 20'}
              </span>
            </div>
          ))}
          <span className="font-mono text-[1.4cqw]">Mono 12 — 00:42:17</span>
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          {[
            ['Ink 950', C.ink, C.fog],
            ['Graphite 700', '#3a3a40', C.fog],
            ['Fog 200', C.fog, C.ink],
            ['Signal', C.signal, '#fff'],
          ].map(([n, bg, fg]) => (
            <div key={n} className="flex flex-col justify-end p-[1.4cqw] font-mono text-[max(7px,0.95cqw)]" style={{ background: bg, color: fg }}>
              <span>{n}</span>
              <span className="opacity-70">{bg}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-[2cqw] px-[3cqw]" style={{ background: C.ink, color: C.fog }}>
          <div className="flex gap-[0.8cqw] text-[1.3cqw]">
            <Priority p="P1" />
            <Priority p="P2" />
            <Priority p="P3" />
          </div>
          <span className="rounded-full py-[1cqw] text-center text-[max(7px,1.2cqw)] font-medium text-white" style={{ background: C.signal }}>
            Acknowledge incident
          </span>
          <span className="rounded-full border py-[1cqw] text-center text-[max(7px,1.2cqw)]" style={{ borderColor: '#3a3a40' }}>
            Reassign
          </span>
          <span className="flex items-center justify-between rounded-[0.6cqw] border px-[1.2cqw] py-[1cqw] text-[max(7px,1.15cqw)]" style={{ borderColor: '#3a3a40', color: C.muted }}>
            Filter by owner
            <span className="font-mono">⌘K</span>
          </span>
        </div>
      </div>
    </Frame>
  )
}
