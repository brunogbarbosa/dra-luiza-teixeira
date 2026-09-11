'use client';

import Image from 'next/image';
import { useId } from 'react';
import { ArrowRight } from 'lucide-react';
import { site, appointmentUrl } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

const metrics = [
  { value: 'Fullface', label: 'UM OLHAR POR INTEIRO' },
  { value: 'Essência', label: 'RESPEITO AOS SEUS TRAÇOS' },
  { value: 'Cuidado', label: 'PLANEJAMENTO INDIVIDUAL' },
];

function SmileSeal() {
  const id = useId().replace(/:/g, '');
  return <div className="campaign-seal" role="img" aria-label="Sua beleza, sua essência">
    <svg viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <defs>
        <path id={`${id}-top`} d="M18 90a72 72 0 0 1 144 0"/>
        <path id={`${id}-bottom`} d="M12 90a78 78 0 0 0 156 0"/>
      </defs>
      <circle pathLength="1" cx="90" cy="90" r="54" stroke="currentColor" strokeWidth=".7"/>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">SUA BELEZA</textPath>
      </text>
      <text fill="currentColor" textAnchor="middle">
        <textPath href={`#${id}-bottom`} startOffset="50%">SUA ESSÊNCIA</textPath>
      </text>
      <text x="90" y="105" textAnchor="middle" className="seal-monogram" fill="currentColor">lt.</text>
    </svg>
  </div>;
}

export function CampaignHero() {
  const motionRef = useCampaignMotion();
  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-inner">
      <div className="campaign-copy">
        <p className="campaign-kicker">HARMONIZAÇÃO FACIAL · CAXIAS DO SUL</p>
        <h1 id="campaign-title" aria-label="Sua beleza. Sua essência.">
          <span className="campaign-title-line"><span>Sua beleza.</span></span>
          <span className="campaign-title-line"><span>Sua essência.</span></span>
        </h1>
        <p className="campaign-subtitle">Um olhar para o rosto inteiro.<br/>Um cuidado só seu.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR AVALIAÇÃO</span><ArrowRight size={22} strokeWidth={1.2}/></a></div>
      </div>
      <figure className="campaign-portrait">
        <div className="campaign-silhouette"><Image className="campaign-original" src={site.images.hero} alt="Dra. Luiza Teixeira" fill preload sizes="(max-width:700px) 100vw, 58vw"/></div>
      </figure>
      <SmileSeal/>
      <p className="campaign-editorial">Seus traços.<br/>Sua história.<br/>Seu tempo.<span aria-hidden="true"/></p>
    </div>
    <div className="campaign-footer">
      <div className="campaign-metrics" aria-label="Princípios do atendimento">
        {metrics.map(metric=><div className="campaign-metric" key={metric.value}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
      <div className="campaign-signature"><span aria-hidden="true"/><div><p>DRA. LUIZA TEIXEIRA</p><em>Harmonização Facial · CRO-RS 26012</em></div></div>
    </div>
  </section>;
}
