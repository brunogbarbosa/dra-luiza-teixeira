export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

// Dados conferidos no site oficial da profissional em 11/09/2026.
export const site = {
  name: 'Luiza Teixeira', monogram: 'LT',
  headline: 'Harmonização facial para valorizar a sua beleza e preservar a sua essência.',
  cro: 'CRO-RS 26012',
  bio: 'Formada em Odontologia pela Universidade Federal de Pelotas e especialista em Harmonização Orofacial pela São Leopoldo Mandic. Um olhar para o rosto como um todo, com planejamento individual e respeito aos seus traços.',
  education: ['Odontologia · Universidade Federal de Pelotas', 'Harmonização Orofacial · São Leopoldo Mandic'],
  specialties: ['Preenchimento Fullface', 'Toxina botulínica', 'Bioestimuladores de colágeno'],
  phone: '+55 (54) 99956-8188', whatsapp: '5554999568188', whatsappUrl: '',
  address: 'Rua Sinimbu, 2302 · Sala 1207 · Storia Offices · Caxias do Sul/RS',
  professionalPhilosophy: 'Valorizar seus traços. Preservar sua essência.',
  instagram: 'https://www.instagram.com/dra.luizateixeira/', instagramHandle: '@dra.luizateixeira',
  philosophy: ['NATURALIDADE', 'ANTES DE', 'EXCESSOS.'],
  colors: { paper: '#f7f4ed', ink: '#28251f', taupe: '#8d7548', champagne: '#d6c29b', dark: '#201e1a' },
  images: { hero: '/images/luiza-hero.webp', about: '/images/luiza-about.webp', beauty: '/images/luiza-experience.webp' },
  procedures: [] as Procedure[], office: [] as {src: string; alt: string}[], testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Harmonia dos traços', alt: 'Registro de antes e depois de harmonização facial enviado para o site da Dra. Luiza Teixeira, caso 1', orientation: 'horizontal', beforeShare: .497, comparisonRatio: 631/1600 },
    { image: '/images/resultado-02.webp', label: 'Beleza com identidade', alt: 'Registro de antes e depois enviado para o site da Dra. Luiza Teixeira, caso 2', orientation: 'horizontal', beforeShare: .493, comparisonRatio: 633/1584 },
    { image: '/images/resultado-03.webp', label: 'Equilíbrio em cada detalhe', alt: 'Registro de antes e depois enviado para o site da Dra. Luiza Teixeira, caso 3', orientation: 'horizontal', beforeShare: .494, comparisonRatio: 622/1600 },
    { image: '/images/resultado-04.webp', label: 'Uma expressão singular', alt: 'Registro de antes e depois enviado para o site da Dra. Luiza Teixeira, caso 4', orientation: 'horizontal', beforeShare: .499, comparisonRatio: 641/1548 },
    { image: '/images/resultado-05.webp', label: 'Cuidado com os contornos', alt: 'Registro de antes e depois enviado para o site da Dra. Luiza Teixeira, caso 5', orientation: 'horizontal', beforeShare: .495, comparisonRatio: 613/1600 },
    { image: '/images/resultado-06.webp', label: 'O olhar para o conjunto', alt: 'Registro de antes e depois enviado para o site da Dra. Luiza Teixeira, caso 6', orientation: 'horizontal', beforeShare: .502, comparisonRatio: 645/1572 },
    { image: '/images/resultado-07.webp', label: 'Sua beleza, sua história', alt: 'Registro de antes e depois enviado para o site da Dra. Luiza Teixeira, caso 7', orientation: 'horizontal', beforeShare: .492, comparisonRatio: 628/1600 },
  ] },
  seo: { title: 'Dra. Luiza Teixeira | Harmonização Facial em Caxias do Sul', description: 'Harmonização facial, preenchimento Fullface e cuidado individual em Caxias do Sul. Conheça a Dra. Luiza Teixeira, CRO-RS 26012, e agende sua avaliação.', url: '' },
};
export const appointmentUrl = site.whatsappUrl || (site.whatsapp ? 'https://wa.me/' + site.whatsapp.replace(/\D/g,'') + '?text=' + encodeURIComponent('Olá, gostaria de agendar uma avaliação com a Dra. Luiza Teixeira.') : site.instagram);
