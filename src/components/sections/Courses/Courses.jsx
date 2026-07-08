import { motion } from 'framer-motion';
import { Button } from '../../ui';

const Courses = () => {
  const courses = [
    {
      title: 'MEZCLA DESDE CERO',
      tag: 'POPULAR',
      description: 'Aprende los fundamentos de mezcla profesional.',
      price: '$59.99',
      cta: 'VER CURSO',
    },
    {
      title: 'MÁSTER PROFESIONAL',
      tag: 'PRO',
      description: 'Consigue un sonido competitivo y listo para plataformas.',
      price: '$69.99',
      cta: 'VER CURSO',
    },
    {
      title: 'PACK COMPLETO',
      tag: 'MÁS VENDIDO',
      description: 'Mezcla + Máster + Proyecto final guiado.',
      price: '$99.99',
      cta: 'VER CURSO',
    },
  ];

  return (
    <section id="cursos" className="bg-[#0B0B0B] py-[120px] lg:py-[200px]">
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
            APRENDE CON EXPERTOS
          </span>
          <h2 className="font-display font-bold text-[42px] uppercase tracking-[0.005em] leading-[0.95] mb-4 font-extrabold">
            Cursos Destacados
          </h2>
          <p className="font-body text-[18px] text-[#A1A1AA] max-w-[650px] mx-auto leading-[1.65]">
            Domina la mezcla, el máster y la producción musical con nuestros cursos profesionales.
          </p>
        </motion.div>

        {/* 3 premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ translateY: -8 }}
              className="bg-[#111111] border border-[rgba(255,255,255,0.08)] p-10 flex flex-col hover:border-[#FACC15] hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300 rounded-[24px] relative"
            >
              {/* Floating badge */}
              <div className="absolute -top-3 right-6">
                <span className={`font-body font-semibold text-xs tracking-[0.1em] uppercase px-4 py-2 rounded-xl shadow-lg ${
                  course.tag === 'MÁS VENDIDO' 
                    ? 'bg-[#FACC15] text-[#070707]' 
                    : 'bg-[rgba(255,255,255,0.08)] text-[#A1A1AA]'
                }`}>
                  {course.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-[22px] uppercase text-[#FFFFFF] mb-4 mt-2">
                {course.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[16px] text-[#A1A1AA] leading-relaxed mb-6 flex-grow">
                {course.description}
              </p>

              {/* Price - Focal point */}
              <div className="font-display font-bold text-5xl text-[#FACC15] mb-8">
                {course.price}
              </div>

              {/* CTA */}
              <Button
                variant="primary"
                className="font-body font-semibold text-xs tracking-[0.04em] px-6 py-4 bg-[#FACC15] text-[#070707] hover:bg-[#EAB308] border-none uppercase mt-auto rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {course.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
