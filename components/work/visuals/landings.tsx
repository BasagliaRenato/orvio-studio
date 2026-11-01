import { SiteImage as Image } from '@/components/site/site-image'
import { Frame, type VisualProps } from './frame'

const themes = {
  auren: { paper: '#eee8dc', ink: '#29251f', accent: '#74705a' },
  sable: { paper: '#f8e9c8', ink: '#48251c', accent: '#b7492c' },
  atlas: { paper: '#151515', ink: '#f5f5ed', accent: '#d3f45b' },
}
type Brand = keyof typeof themes

function Surface({ brand, children, ratio = '16/10', ...props }: VisualProps & { brand: Brand; children: React.ReactNode; ratio?: string }) {
  const c = themes[brand]
  return <Frame {...props} ratio={ratio} style={{ background: c.paper, color: c.ink }}>
    <div className="absolute inset-0 flex flex-col overflow-hidden">{children}</div>
  </Frame>
}

function SiteHeader({ brand }: { brand: Brand }) {
  const links = brand === 'auren' ? ['Escritório', 'Projetos', 'Contato'] : brand === 'sable' ? ['Origem', 'A casa', 'Visite'] : ['Experiência', 'Serviços', 'Agendar']
  if (brand === 'sable') return <div className="mx-[3cqw] mt-[2cqw] flex shrink-0 items-center justify-between rounded-full border-[0.15cqw] border-[#48251c] px-[3cqw] py-[1.4cqw]">
    <span className="font-serif text-[3cqw] font-black leading-none">SABLE</span>
    <span className="flex items-center gap-[3cqw] text-[1.25cqw] font-semibold"><span>Nosso café</span><span>A casa</span><span className="rounded-full bg-[#48251c] px-[2cqw] py-[0.7cqw] text-[#f8e9c8]">Vem visitar ↗</span></span>
  </div>
  if (brand === 'atlas') return <div className="flex shrink-0 items-center justify-between border-b-[0.2cqw] border-[#f5f5ed] px-[3cqw] py-[1.7cqw] font-bold uppercase">
    <span className="bg-[#f5f5ed] px-[1cqw] py-[0.5cqw] text-[2.5cqw] font-black leading-none tracking-[-0.06em] text-[#151515]">ATLAS</span>
    <span className="flex items-center gap-[3cqw] text-[1.2cqw]"><span>A barbearia</span><span>Serviços</span><span className="bg-[#d3f45b] px-[1.6cqw] py-[0.8cqw] text-[#151515]">Marcar horário ↗</span></span>
  </div>
  return <div className="flex shrink-0 items-center justify-between border-b border-current/15 px-[4cqw] py-[2.2cqw]">
    <span className="font-display text-[2.3cqw] font-semibold tracking-[0.1em]">{brand.toUpperCase()}</span>
    <span className="flex gap-[2.2cqw] font-mono text-[1.1cqw] uppercase tracking-wider">{links.map(x => <span key={x}>{x}</span>)}</span>
  </div>
}

function Photo({ src, className = '', priority = false }: { src: string; className?: string; priority?: boolean }) {
  return <div className={`relative min-h-0 overflow-hidden ${className}`}><Image src={src} alt="" fill priority={priority} sizes="(min-width: 768px) 55vw, 90vw" className="object-cover" /></div>
}

function Meta({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[1.1cqw] uppercase leading-relaxed tracking-[0.12em]">{children}</p>
}

function Action({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center justify-between gap-[3cqw] self-start border-b border-current/50 pb-[0.7cqw] font-mono text-[1.2cqw] uppercase tracking-wider">{children}<span>↗</span></span>
}

export function AurenHome(props: VisualProps) {
  return <Surface {...props} brand="auren" ratio="4/3">
    <SiteHeader brand="auren" />
    <div className="grid min-h-0 flex-1 grid-cols-[1fr_1fr] gap-[4cqw] p-[4cqw]">
      <div className="flex flex-col justify-between gap-[2cqw] py-[1cqw]">
        <Meta>Arquitetura · São Paulo</Meta>
        <div><p className="font-serif text-[6.8cqw] font-light leading-[1.02]">Espaços que<br /><em className="text-[#74705a]">permanecem.</em></p><p className="mt-[2cqw] max-w-[30ch] text-[1.35cqw] leading-relaxed">Arquitetura que nasce da escuta, encontra o lugar e atravessa o tempo.</p></div>
        <Action>Conheça o escritório</Action>
      </div>
      <Photo src="/work/auren-facade.png" priority={props.priority} />
    </div>
    <div className="flex shrink-0 justify-between border-t border-current/15 px-[4cqw] py-[1.6cqw]"><Meta>Residencial · Comercial · Interiores</Meta><Meta>Projetos selecionados ↓</Meta></div>
  </Surface>
}

export function AurenStory(props: VisualProps) {
  return <Surface {...props} brand="auren">
    <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_1fr] gap-[5cqw] p-[5cqw]">
      <Photo src="/work/auren-interior.png" />
      <div className="flex flex-col justify-between py-[2cqw]"><Meta>01 / O escritório</Meta><div><p className="font-serif text-[5.2cqw] font-light leading-[1.05]">Antes do traço,<br /><em>a escuta.</em></p><p className="mt-[2cqw] text-[1.4cqw] leading-relaxed">Cada projeto começa com pessoas. Entendemos os hábitos, o entorno e a luz antes de desenhar o primeiro espaço.</p></div><div className="grid grid-cols-3 gap-[2cqw] border-t border-current/20 pt-[2cqw]">{['Lugar', 'Matéria', 'Tempo'].map(x => <Meta key={x}>{x}</Meta>)}</div></div>
    </div>
  </Surface>
}

export function AurenProjects(props: VisualProps) {
  return <Surface {...props} brand="auren" ratio="16/11">
    <div className="flex items-end justify-between px-[5cqw] pb-[3cqw] pt-[4cqw]"><p className="font-serif text-[4.6cqw]">Arquitetura em <em>contexto.</em></p><Meta>02 / Projetos selecionados</Meta></div>
    <div className="grid min-h-0 flex-1 grid-cols-[1.2fr_1fr] gap-[3cqw] px-[5cqw] pb-[4cqw]">
      {['/work/auren-facade.png', '/work/auren-interior.png'].map((src, i) => <div key={src} className="flex min-h-0 flex-col gap-[1cqw]"><Photo src={src} className="flex-1" /><div className="flex justify-between"><Meta>{i ? 'Casa Luz' : 'Residência Pedra'}</Meta><Meta>{i ? 'Interiores' : 'Residencial'}</Meta></div></div>)}
    </div>
    <div className="flex justify-between bg-[#29251f] px-[5cqw] py-[3cqw] text-[#eee8dc]"><p className="font-serif text-[3cqw]">Vamos imaginar seu próximo espaço?</p><Action>Inicie uma conversa</Action></div>
  </Surface>
}

/** A warm café page: rounded lettering, arched photographs and café-menu details. */
function CoffeeBean({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 60 80" fill="none" aria-hidden="true" className={className}><ellipse cx="30" cy="40" rx="23" ry="33" transform="rotate(24 30 40)" stroke="currentColor" strokeWidth="3" /><path d="M42 13C13 29 46 48 19 69" stroke="currentColor" strokeWidth="3" /></svg>
}

function CafeButton({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-[2.5cqw] self-start rounded-full border-[0.15cqw] border-[#48251c] bg-[#48251c] px-[2.5cqw] py-[1.3cqw] text-[1.3cqw] font-bold text-[#f8e9c8] shadow-[0.35cqw_0.35cqw_0_#d39a60]">{children}<span>↗</span></span>
}

export function SableHome(props: VisualProps) {
  return <Surface {...props} brand="sable" ratio="4/3">
    <SiteHeader brand="sable" />
    <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-[3cqw] px-[5cqw] py-[3cqw]">
      <div className="relative flex flex-col justify-center gap-[2.3cqw]">
        <span className="self-start rounded-full border border-current px-[1.4cqw] py-[0.6cqw] text-[1.1cqw] font-bold">Café de verdade. Gente também.</span>
        <p className="font-serif text-[7.3cqw] font-black leading-[1.03] tracking-[-0.055em]">Café bom.<br /><span className="text-[#b7492c]">Prosa longa.</span></p>
        <p className="max-w-[30ch] text-[1.5cqw] leading-relaxed">Da primeira xícara à última conversa, tem sempre lugar para mais um.</p>
        <CafeButton>Conheça nossa casa</CafeButton>
      </div>
      <div className="relative min-h-0 py-[3cqw]">
        <Photo src="/work/sable-pour.png" priority={props.priority} className="h-full rotate-[-4deg] rounded-t-[20cqw] rounded-b-[2cqw] border-[0.6cqw] border-[#b7492c]" />
        <div className="absolute bottom-[3cqw] left-[-2cqw] flex size-[12cqw] rotate-[9deg] flex-col items-center justify-center rounded-full border-[0.25cqw] border-dashed border-[#48251c] bg-[#f4cf77] text-center font-serif text-[2cqw] font-bold leading-tight">feito com<br />calma <span className="mt-[0.5cqw] text-[1.5cqw]">✳</span></div>
        <CoffeeBean className="absolute right-[-1cqw] top-0 h-[7cqw] w-[5cqw] rotate-[20deg] text-[#b7492c]" />
      </div>
    </div>
    <div className="flex shrink-0 items-center justify-around border-y-[0.2cqw] border-[#48251c] bg-[#b7492c] py-[1.5cqw] font-serif text-[2cqw] font-bold text-[#fff0d1]"><span>Bom café</span><span>✳</span><span>Boas histórias</span><span>✳</span><span>Portas abertas</span><span>✳</span></div>
  </Surface>
}

export function SableStory(props: VisualProps) {
  return <Surface {...props} brand="sable">
    <div className="flex min-h-0 flex-1 flex-col gap-[3cqw] bg-[#f4cf77] p-[5cqw]">
      <div className="flex items-center justify-between gap-[4cqw]"><div><span className="text-[1.2cqw] font-bold uppercase tracking-wider">De onde vem o que a gente ama</span><p className="mt-[1cqw] font-serif text-[5.6cqw] font-black leading-[1.04] tracking-[-0.04em]">Do grão ao <span className="text-[#b7492c]">encontro.</span></p></div><Photo src="/work/sable-beans.png" className="size-[13cqw] shrink-0 rounded-full border-[0.5cqw] border-[#48251c]" /></div>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-[2cqw]">
        {[
          ['01', 'Começa na terra.', 'Pequenos produtores e origens que a gente faz questão de conhecer.'],
          ['02', 'Ganha seu ponto.', 'Torra em pequenos lotes para cada café mostrar quem é.'],
          ['03', 'Vira conversa.', 'Preparo cuidadoso, xícara cheia e uma mesa esperando por você.'],
        ].map(([n, title, text], i) => <div key={n} className={`flex flex-col justify-between rounded-[2cqw] border-[0.18cqw] border-[#48251c] bg-[#f8e9c8] p-[2.5cqw] shadow-[0.4cqw_0.4cqw_0_#48251c] ${i === 1 ? 'rotate-[2deg]' : ''}`}><span className="font-serif text-[4cqw] font-black text-[#b7492c]">{n}<span className="float-right text-[3cqw]">✳</span></span><p className="font-serif text-[2.7cqw] font-extrabold leading-tight">{title}</p><p className="text-[1.4cqw] leading-relaxed">{text}</p></div>)}
      </div>
    </div>
  </Surface>
}

export function SableVisit(props: VisualProps) {
  return <Surface {...props} brand="sable">
    <div className="grid min-h-0 flex-1 grid-cols-[0.85fr_1.15fr] gap-[5cqw] bg-[#b7492c] p-[5cqw] text-[#fff0d1]">
      <div className="relative min-h-0"><Photo src="/work/sable-pour.png" className="h-full rounded-t-[18cqw] rounded-b-[2cqw] border-[0.5cqw] border-[#f4cf77]" /><span className="absolute inset-x-[2cqw] bottom-[2cqw] rotate-[-4deg] rounded-[0.6cqw] bg-[#f4cf77] p-[1.2cqw] text-center font-serif text-[2.1cqw] font-bold text-[#48251c]">Seu cantinho de todo dia.</span></div>
      <div className="flex flex-col justify-center gap-[2.5cqw]"><span className="text-[1.3cqw] font-semibold">A CASA ESTÁ ABERTA ☀</span><p className="font-serif text-[6.5cqw] font-black leading-[1.02] tracking-[-0.04em]">Puxe uma<br /><span className="text-[#f4cf77]">cadeira.</span></p><p className="max-w-[32ch] text-[1.5cqw] leading-relaxed">Tem café passado na hora, um bolo para acompanhar e tempo para ficar mais um pouco.</p><div className="flex gap-[3cqw] border-y border-dashed border-[#fff0d1]/60 py-[1.7cqw] text-[1.3cqw]"><span>Endereço e horários</span><span>Visite a Sable ↗</span></div><CafeButton>Veja como chegar</CafeButton></div>
    </div>
  </Surface>
}

/** The barbershop uses a dense, poster-like typographic language. */
const condensed = { fontVariationSettings: '"wdth" 75' }

function AtlasStripe() {
  return <div aria-hidden="true" className="h-[1.2cqw] shrink-0" style={{ background: 'repeating-linear-gradient(130deg,#d3f45b 0 1.2cqw,#151515 1.2cqw 2.4cqw)' }} />
}

export function AtlasHome(props: VisualProps) {
  return <Surface {...props} brand="atlas" ratio="4/3">
    <SiteHeader brand="atlas" />
    <div className="grid min-h-0 flex-1 grid-cols-[1.45fr_0.55fr] gap-[3cqw] p-[4cqw]">
      <div className="flex flex-col justify-between gap-[1.5cqw]"><Meta>São Paulo / Corte & atitude</Meta><p className="text-[8.4cqw] font-black uppercase leading-[1.04] tracking-[-0.055em]" style={condensed}>Na régua.<br /><span className="text-[#d3f45b]">No seu</span><br />estilo.</p><p className="max-w-[42ch] text-[1.35cqw] leading-relaxed">Técnica no corte. Personalidade no resultado.<br />Chega junto e encontra o seu.</p></div>
      <div className="my-[3cqw] flex rotate-[3deg] flex-col justify-between border-[0.2cqw] border-[#d3f45b] bg-[#d3f45b] p-[2cqw] text-[#151515] shadow-[0.8cqw_0.8cqw_0_#f5f5ed]"><span className="text-[1.1cqw] font-bold uppercase">Atlas / Barber shop</span><div className="text-[3cqw] font-black uppercase leading-[1.1]" style={condensed}>Corte.<br />Barba.<br />Seu<br />momento.</div><div className="border-t-[0.2cqw] border-dashed border-[#151515] pt-[2cqw]"><span className="block text-[1.25cqw] font-black uppercase">Agende aqui</span><span className="mt-[1cqw] block text-[5cqw] leading-none">↗</span></div></div>
    </div>
    <div className="flex shrink-0 justify-between border-t border-[#f5f5ed]/30 px-[4cqw] py-[1.3cqw] text-[1.15cqw] font-bold uppercase"><span>Estilo próprio. Sempre.</span><span>Conheça a barbearia ↓</span></div><AtlasStripe />
  </Surface>
}

export function AtlasStory(props: VisualProps) {
  return <Surface {...props} brand="atlas">
    <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_0.95fr] gap-[4cqw] bg-[#f5f5ed] p-[5cqw] text-[#151515]">
      <div className="flex flex-col justify-between"><span className="self-start bg-[#151515] px-[1.2cqw] py-[0.6cqw] text-[1.2cqw] font-bold uppercase text-[#f5f5ed]">01 / Quem senta na cadeira</span><p className="text-[7.7cqw] font-black uppercase leading-[1.02] tracking-[-0.06em]" style={condensed}>Seu corte<br />tem<br /><span className="bg-[#d3f45b] px-[0.5cqw]">história.</span></p><p className="max-w-[30ch] text-[1.5cqw] leading-relaxed">A gente escuta, entende seu estilo e faz acontecer. Sem pressa para acertar cada detalhe.</p></div>
      <div className="flex flex-col justify-center gap-[1.5cqw]">{[['Troca a ideia', 'Sua rotina, suas referências e o jeito de usar o cabelo.'], ['Ajusta o traço', 'Técnica e proporção para encontrar o corte certo.'], ['Fecha no detalhe', 'Acabamento e orientação para manter o visual.']].map(([title, text], i) => <div key={title} className="relative border-l-[0.7cqw] border-[#d3f45b] bg-[#151515] p-[2.5cqw] text-[#f5f5ed]"><span className="text-[1.1cqw] font-bold text-[#d3f45b]">0{i + 1} /</span><p className="mt-[0.8cqw] text-[2.5cqw] font-black uppercase tracking-tight" style={condensed}>{title}</p><p className="mt-[1cqw] text-[1.35cqw] leading-relaxed">{text}</p></div>)}</div>
    </div><AtlasStripe />
  </Surface>
}

export function AtlasServices(props: VisualProps) {
  return <Surface {...props} brand="atlas">
    <div className="flex items-end justify-between px-[4cqw] pb-[2cqw] pt-[3cqw]"><p className="text-[5cqw] font-black uppercase leading-none tracking-[-0.04em]" style={condensed}>Escolha o <span className="text-[#d3f45b]">seu.</span></p><Meta>02 / Na cadeira</Meta></div>
    <div className="grid min-h-0 flex-1 grid-cols-3 gap-[1.5cqw] px-[4cqw] pb-[3cqw]">{[['Corte', 'Do clássico ao fade. Do seu jeito.'], ['Barba', 'Desenho e acabamento, fio por fio.'], ['Combo', 'Corte + barba. O trato completo.']].map(([title, text], i) => <div key={title} className="flex flex-col justify-between bg-[#f5f5ed] p-[2.3cqw] text-[#151515]"><div className="flex items-start justify-between border-b-[0.2cqw] border-[#151515] pb-[1.5cqw]"><span className="text-[5cqw] font-black leading-none" style={condensed}>0{i + 1}</span><span className="text-[2.2cqw]">✳</span></div><div><p className="text-[3.5cqw] font-black uppercase tracking-tight" style={condensed}>{title}</p><p className="mt-[1cqw] text-[1.3cqw] leading-relaxed">{text}</p></div><span className="border-t-[0.15cqw] border-dashed border-[#151515] pt-[1.5cqw] text-[1.2cqw] font-bold uppercase">Esse é o meu ↗</span></div>)}</div>
    <div className="flex shrink-0 items-center justify-between bg-[#d3f45b] px-[4cqw] py-[2.6cqw] text-[#151515]"><p className="text-[3.8cqw] font-black uppercase leading-none tracking-tight" style={condensed}>Bora marcar?</p><span className="bg-[#151515] px-[2cqw] py-[1.3cqw] text-[1.2cqw] font-bold uppercase text-[#f5f5ed]">Chama no WhatsApp ↗</span></div>
  </Surface>
}
