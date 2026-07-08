import { motion } from 'framer-motion';
import { Button } from '../../ui';

const Pricing = () => {
  const plans = [
    {
      name: 'BÁSICO',
      price: 19.99,
      unit: '/año',
      features: ['1 lanzamiento', 'Spotify y Apple Music', 'Reporte básico'],
      featured: false,
      cta: 'ELEGIR PLAN',
    },
    {
      name: 'PRO',
      price: 39.99,
      unit: '/año',
      features: ['3 lanzamientos', '+150 plataformas', 'Soporte prioritario'],
      featured: true,
      cta: 'ELEGIR PLAN',
    },
    {
      name: 'ILIMITADO',
      price: 79.99,
      unit: '/año',
      features: ['Lanzamientos ilimitados', 'Reportes avanzados', 'Soporte VIP'],
      featured: false,
      cta: 'ELEGIR PLAN',
    },
  ];

  return (
    <section id="precios" className="bg-[#070707] py-[120px] lg:py-[200px]">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(250, 204, 21, 0.02) 0%, transparent 50%)',
        }}
      />
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-40"
        >
          <span className="font-body text-sm tracking-[0.2em] uppercase text-[#A1A1AA] mb-3 block">
            ELIGE TU PLAN
          </span>
          <h2 className="font-display font-bold text-[42px] uppercase tracking-[0.005em] leading-[0.95] mb-4 font-extrabold">
            Planes de Distribución
          </h2>
          <p className="font-body text-[18px] text-[#A1A1AA] max-w-[650px] mx-auto leading-[1.65]">
            Publica tu música en +150 plataformas con metadata e ISRC en regla.
          </p>
        </motion.div>

        {/* 3-tier comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ translateY: -8 }}
              className={`bg-[#111111] border p-8 flex flex-col ${
                plan.featured 
                  ? 'border-[#FACC15] relative scale-106 shadow-[0_0_40px_rgba(250,204,21,0.25)] z-10' 
                  : 'border-[rgba(255,255,255,0.08)]'
              } hover:border-[#FACC15] hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300 rounded-[24px]`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="font-body font-semibold text-xs tracking-[0.1em] uppercase px-6 py-2 bg-[#FACC15] text-[#070707] rounded-xl shadow-lg">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {/* Name */}
              <h3 className="font-display font-bold text-[22px] uppercase text-[#FFFFFF] mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-8">
                <span className="font-display font-bold text-5xl text-[#FACC15]">
                  ${plan.price}
                </span>
                <span className="font-body text-[16px] text-[#A1A1AA] ml-2">
                  {plan.unit}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="font-body text-[16px] text-[#A1A1AA] flex items-start gap-3">
                    <span className="text-[#FACC15] text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.featured ? 'primary' : 'ghost'}
                className="font-body font-semibold text-xs tracking-[0.04em] px-6 py-4 uppercase mt-auto rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{
                  backgroundColor: plan.featured ? '#FACC15' : 'transparent',
                  color: plan.featured ? '#070707' : '#FFFFFF',
                  border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
