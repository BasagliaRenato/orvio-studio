import type { Locale } from './content'

type Localized<T = string> = Record<Locale, T>

export type VisualKey =
  | 'auren-cover' | 'auren-story' | 'auren-projects'
  | 'sable-cover' | 'sable-story' | 'sable-visit'
  | 'atlas-cover' | 'atlas-story' | 'atlas-services'

export type GalleryItem = {
  visual: VisualKey
  span: 'full' | 'wide' | 'narrow' | 'half'
  caption: Localized
  description: Localized
  alt: Localized
}

export type Project = {
  slug: string
  name: string
  sector: Localized
  services: Localized<string[]>
  tagline: Localized
  description: Localized
  challenge: Localized
  approach: Localized<string[]>
  cover: { visual: VisualKey; alt: Localized }
  gallery: GalleryItem[]
  theme: { bg: string; fg: string; accent: string }
}

export const projects: Project[] = [
  {
    slug: 'auren',
    name: 'AUREN',
    sector: { pt: 'Escritório de arquitetura', en: 'Architectural practice' },
    services: { pt: ['Estratégia de página', 'Design de landing page', 'Desenvolvimento front-end'], en: ['Page strategy', 'Landing page design', 'Front-end development'] },
    tagline: { pt: 'Uma presença digital à altura dos espaços que projeta.', en: 'A digital presence worthy of the spaces it designs.' },
    description: { pt: 'Landing page premium para um escritório de arquitetura, construída a partir de uma marca já estabelecida.', en: 'A premium landing page for an architecture practice, built around an established brand.' },
    challenge: { pt: 'Apresentar o olhar e o trabalho de um escritório de arquitetura em uma única página clara, sem transformar o site em um catálogo genérico.', en: 'Present the perspective and work of an architecture practice on one clear page, without turning the site into a generic catalog.' },
    approach: {
      pt: ['A página parte da identidade existente e usa tipografia editorial, imagens amplas e uma paleta mineral para criar uma apresentação digital coerente com o trabalho do escritório.', 'A narrativa conduz da proposta do estúdio aos projetos selecionados e termina em um contato direto. O foco é mostrar valor e facilitar a próxima conversa.'],
      en: ['The page starts from the existing identity, using editorial typography, large imagery, and a mineral palette to create a digital presence that fits the practice.', 'The story moves from the studio’s point of view to selected projects and ends with a direct contact. The focus is to show value and make the next conversation easy.'],
    },
    cover: { visual: 'auren-cover', alt: { pt: 'Landing page de arquitetura AUREN com fotografia de fachada, manchete editorial e chamada para conhecer o escritório', en: 'AUREN architecture landing page with facade photography, editorial headline, and a link to the practice' } },
    gallery: [
      { visual: 'auren-story', description: {"pt":"A apresentação do escritório combina uma fotografia ampla e uma mensagem curta sobre o método de trabalho. A hierarquia editorial aproxima o visitante da proposta do estúdio antes de apresentar os projetos.","en":"The studio introduction pairs a large photograph with a concise description of its approach. Editorial hierarchy introduces the practice before moving into selected projects."}, span: 'full', caption: { pt: 'Apresentação do posicionamento e do olhar do escritório', en: 'Studio perspective and positioning' }, alt: { pt: 'Seção editorial da landing page AUREN combinando texto e fotografia de interiores', en: 'Editorial section of the AUREN landing page combining copy and interior photography' } },
      { visual: 'auren-projects', description: {"pt":"A seleção de obras usa imagens de diferentes proporções, nomes e categorias para facilitar a leitura. No fim, uma faixa de contato transforma o interesse pelo portfólio em um convite para conversar.","en":"Selected work uses different image proportions, names, and categories for easy browsing. A contact strip then turns interest in the portfolio into an invitation to talk."}, span: 'full', caption: { pt: 'Projetos em destaque e chamada de contato', en: 'Featured projects and contact call to action' }, alt: { pt: 'Seção da landing page AUREN com seleção de projetos de arquitetura', en: 'AUREN landing page section featuring selected architecture projects' } },
    ],
    theme: { bg: '#e6dccb', fg: '#2b2620', accent: '#8c6a48' },
  },
  {
    slug: 'sable',
    name: 'SABLE',
    sector: { pt: 'Torrefação de cafés especiais', en: 'Specialty coffee roaster' },
    services: { pt: ['Estratégia de página', 'Design de landing page', 'Desenvolvimento front-end'], en: ['Page strategy', 'Landing page design', 'Front-end development'] },
    tagline: { pt: 'Uma boa história merece ser saboreada sem pressa.', en: 'A good story deserves to be savored slowly.' },
    description: { pt: 'Landing page premium para uma torrefação independente, sem loja virtual ou fluxo de compra.', en: 'A premium landing page for an independent roaster, without an online shop or purchase flow.' },
    challenge: { pt: 'Dar contexto à origem do café e à torrefação, apresentando a marca de forma acolhedora e convidando as pessoas a conhecer o espaço.', en: 'Give context to the coffee’s origin and roasting, presenting the brand warmly and inviting people to visit.' },
    approach: {
      pt: ['A direção retrô combina letras arredondadas e encorpadas, fotografias em arco e detalhes inspirados em cardápios de café. A composição traduz a personalidade acolhedora da casa para o site.', 'Em vez de catálogo ou carrinho, a página leva a pessoa até as informações essenciais e a um contato ou visita presencial.'],
      en: ['A retro direction combines bold rounded lettering, arched photographs, and café-menu details. The composition brings the welcoming character of the coffee house into the website.', 'Instead of a catalog or cart, the page guides visitors to the essential details and a direct contact or in-person visit.'],
    },
    cover: { visual: 'sable-cover', alt: { pt: 'Landing page SABLE em estilo retrô, com letras encorpadas, fotografia em arco e detalhes em tons quentes', en: 'Retro SABLE landing page with bold lettering, an arched photograph, and warm-colored details' } },
    gallery: [
      { visual: 'sable-story', description: {"pt":"Três cartões com cantos arredondados contam a origem, a torra e o preparo. A composição lembra um pequeno cardápio ilustrado, com números grandes, leve inclinação e cores de café, creme e mostarda.","en":"Three rounded cards tell the story of origin, roasting, and brewing. Large numbers, a slight tilt, and coffee, cream, and mustard tones recall an illustrated café menu."}, span: 'full', caption: { pt: 'A história em cartões de cardápio', en: 'The story told through café-menu cards' }, alt: { pt: 'Seção da landing page SABLE com fotografia de grãos e texto sobre origem', en: 'SABLE landing page section with coffee bean photography and origin story' } },
      { visual: 'sable-visit', description: {"pt":"O fundo terracota e a foto em arco criam um convite caloroso para sentar e ficar. O botão arredondado e os detalhes de cardápio mantêm a linguagem da abertura, conduzindo às informações para visitar a casa.","en":"A terracotta background and arched photograph make a warm invitation to stay. The rounded button and menu details carry the opening’s visual language into practical visitor information."}, span: 'full', caption: { pt: 'Convite para conhecer a casa de café', en: 'Invitation to visit the coffee house' }, alt: { pt: 'Seção da landing page SABLE com fotografia, endereço e chamada para visita', en: 'SABLE landing page section with photography, address, and invitation to visit' } },
    ],
    theme: { bg: '#48251c', fg: '#f8e9c8', accent: '#b7492c' },
  },
  {
    slug: 'atlas',
    name: 'ATLAS',
    sector: { pt: 'Barbearia independente', en: 'Independent barbershop' },
    services: { pt: ['Estratégia de página', 'Design de landing page', 'Desenvolvimento front-end'], en: ['Page strategy', 'Landing page design', 'Front-end development'] },
    tagline: { pt: 'Uma página à altura do seu próximo ritual.', en: 'A page worthy of your next ritual.' },
    description: { pt: 'Landing page premium para uma barbearia, preservando a personalidade de uma marca já existente.', en: 'A premium landing page for a barbershop, preserving the character of an existing brand.' },
    challenge: { pt: 'Apresentar serviços, espaço e personalidade em uma página objetiva que leve direto ao agendamento.', en: 'Present services, space, and character on a focused page that leads straight to booking.' },
    approach: {
      pt: ['A direção urbana usa tipografia condensada e pesada, contraste entre preto e branco e acentos em verde ácido. Blocos densos, faixas diagonais e cartões de agendamento dão ao site uma linguagem próxima de cartazes de rua.', 'A estrutura prioriza o que ajuda a decidir: proposta, serviços, localização e um convite claro para agendar. Sem aplicativo ou sistema próprio de reservas.'],
      en: ['The urban direction uses heavy condensed typography, black-and-white contrast, and acid-green accents. Dense blocks, diagonal strips, and booking cards give the site the character of street posters.', 'The structure prioritizes what helps visitors decide: point of view, services, location, and a clear invitation to book. No app or custom booking system.'],
    },
    cover: { visual: 'atlas-cover', alt: { pt: 'Landing page urbana da ATLAS com título pesado, preto e branco, detalhes verde ácido e cartão de agendamento', en: 'Urban ATLAS landing page with heavy typography, black-and-white contrast, acid-green accents, and a booking card' } },
    gallery: [
      { visual: 'atlas-story', description: {"pt":"Um título de cartaz apresenta a proposta da barbearia. Ao lado, três blocos pretos com faixas verdes organizam o atendimento em etapas e mantêm a linguagem direta da página.","en":"A poster-style headline introduces the barbershop’s approach. Three black blocks with green stripes organize the experience into stages using the same direct visual language."}, span: 'full', caption: { pt: 'O atendimento, passo a passo', en: 'The service experience, step by step' }, alt: { pt: 'Seção da landing page ATLAS com mensagem editorial e apresentação do espaço', en: 'ATLAS landing page section with editorial message and introduction to the space' } },
      { visual: 'atlas-services', description: {"pt":"Os serviços viram cartões de atendimento, com números grandes e divisórias tracejadas. A faixa verde final concentra a chamada para o WhatsApp, conectando a escolha do serviço ao agendamento.","en":"Services become appointment cards with large numbers and dashed dividers. A final green strip highlights the WhatsApp call to action, connecting the service choice to booking."}, span: 'full', caption: { pt: 'Serviços apresentados com chamada direta para agendar', en: 'Services presented with a direct booking call to action' }, alt: { pt: 'Seção da landing page ATLAS com serviços de corte, barba e cuidado', en: 'ATLAS landing page section featuring haircut, beard, and grooming services' } },
    ],
    theme: { bg: '#151515', fg: '#f5f5ed', accent: '#d3f45b' },
  },
]

export function getProject(slug: string) { return projects.find((p) => p.slug === slug) }
export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug)
  return projects[(i + 1) % projects.length]
}
export function projectIndex(slug: string) { return projects.findIndex((p) => p.slug === slug) + 1 }
export const pad = (n: number) => String(n).padStart(2, '0')
