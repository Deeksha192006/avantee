import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './TestimonialsSection.module.css';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Avantee Industries' recycled yarns have transformed our luxury sustainable knitwear line. The tensile strength and color consistency are indistinguishable from virgin cotton, but with zero environmental guilt.",
      author: "Marcus Vance",
      role: "VP of Sustainability & Supply Chain",
      company: "Nordic Eco Couture (Sweden)",
      rating: 5,
    },
    {
      id: 2,
      quote: "Switching to Avantee's GRS-certified PET staple fibre enabled our automotive division to meet stringent European carbon reduction mandates 2 years ahead of schedule. Exceptional quality.",
      author: "Elena Rostova",
      role: "Lead Materials Engineer",
      company: "Bavarian Industrial Textiles (Germany)",
      rating: 5,
    },
    {
      id: 3,
      quote: "As a global sportswear brand, waterless dyeing technology was non-negotiable for us. Avantee delivers high-performance recycled filament yarns with zero batch-to-batch shade variation.",
      author: "David Chen",
      role: "Global Sourcing Director",
      company: "Pacific Performance Apparel (Hong Kong)",
      rating: 5,
    }
  ];

  return (
    <section className={`section-padding ${styles.testimonialsWrapper}`}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Client Testimonials</span>
          <h2 className={styles.title}>Trusted by Global Textile Visionaries</h2>
          <p className={styles.subtitle}>
            Hear how our closed-loop recycled yarns and eco-fibres empower leading international brands.
          </p>
        </motion.div>

        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.testimonialCard}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                  <p className={styles.quoteText}>{item.quote}</p>
                  <div className={styles.ratingStars}>
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.starIcon} />
                    ))}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{item.author}</h4>
                    <span className={styles.authorRole}>{item.role}</span>
                    <span className={styles.authorCompany}>{item.company}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
