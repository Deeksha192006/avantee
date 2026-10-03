import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  FaArrowLeft,
  FaCheckCircle,
  FaPaperPlane,
  FaSpinner,
  FaEnvelopeOpenText,
  FaDownload
} from 'react-icons/fa';
import { getProductBySlug } from '../data/productsData';
import { GridBackground } from '../components/Common/GridBackground';
import styles from './ProductDetailPage.module.css';

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const product = getProductBySlug(slug);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productName: '',
    blendDetails: '',
    customBlend: '',
    quantity: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData(prev => ({
        ...prev,
        productName: product.name,
        blendDetails: prev.blendDetails || product.specs?.BlendRatio || '80% Recycled Cotton / 20% Poly'
      }));
    }
  }, [product]);

  if (!product) {
    return (
      <div className={styles.pageWrapper}>
        <div className="container" style={{ textAlign: 'center', paddingTop: '80px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-deep-forest)', marginBottom: '16px' }}>
            Product Not Found
          </h2>
          <p style={{ marginBottom: '30px', color: 'var(--color-charcoal)' }}>
            The product you are looking for does not exist or has been moved.
          </p>
          <Link to="/products" className={styles.backBtn}>
            <FaArrowLeft /> Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your company name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Please enter your country.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <GridBackground variant="dots" dark={false} opacity={0.06} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Navigation Top Bar */}
        <div className={styles.topBar}>
          <Link to="/products" className={styles.backBtn}>
            <FaArrowLeft /> Back to Products
          </Link>
        </div>

        {/* Product Details Section */}
        <motion.div
          className={styles.detailCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.detailGrid}>
            <div className={styles.imgBox}>
              <img src={product.image} alt={product.name} className={styles.productImg} />
              <span className={styles.tagBadge}>{product.tag}</span>
            </div>

            <div>
              <span className={styles.catBadge}>{product.categoryName}</span>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <p className={styles.productDesc}>{product.desc}</p>

              {/* Features */}
              {product.bulletPoints && product.bulletPoints.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h4 className={styles.specSectionTitle}>Key Features & Specifications</h4>
                  <ul className={styles.featureGrid}>
                    {product.bulletPoints.map((bp, i) => (
                      <li key={i} className={styles.featureItem}>
                        <FaCheckCircle className={styles.featureIcon} />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applications */}
              {product.applications && product.applications.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <h4 className={styles.specSectionTitle}>Key Applications</h4>
                  <div className={styles.tagWrap}>
                    {product.applications.map((app, i) => (
                      <span key={i} className={styles.appChip}>{app}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs */}
              {product.specs && (
                <div style={{ marginBottom: '28px' }}>
                  <h4 className={styles.specSectionTitle}>Technical Data Sheet</h4>
                  <div className={styles.specGrid}>
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className={styles.specBox}>
                        <span className={styles.specKey}>{k}:</span>
                        <span className={styles.specVal}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <button className={styles.enquireCtaBtn} onClick={scrollToForm}>
                  <span>Enquire Now</span>
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Enquiry Form Section */}
        <div ref={formRef} className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Enquire About This Product</h2>
            <p className={styles.formSub}>
              Fill out the form below to request technical specifications, yarn samples, or bulk order pricing.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              className={styles.successBox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <FaEnvelopeOpenText className={styles.successIcon} />
              <h3 className={styles.successTitle}>Enquiry Submitted Successfully!</h3>
              <p className={styles.successText}>
                Thank you for your enquiry. Our team will contact you shortly.
              </p>

              <div className={styles.successDetails}>
                <p><strong>Product:</strong> {formData.productName}</p>
                <p><strong>Contact Name:</strong> {formData.fullName}</p>
                <p><strong>Company:</strong> {formData.companyName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                {formData.blendDetails && (
                  <p><strong>Blend Details:</strong> {formData.blendDetails === 'Custom Blend Specification' ? formData.customBlend : formData.blendDetails}</p>
                )}
              </div>

              <button
                className={styles.resetBtn}
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    companyName: '',
                    email: '',
                    phone: '',
                    country: '',
                    productName: product.name,
                    blendDetails: product.specs?.BlendRatio || '80% Recycled Cotton / 20% Poly',
                    customBlend: '',
                    quantity: '',
                    message: '',
                  });
                }}
              >
                Submit Another Enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.enquiryForm}>
              <div className={styles.formGrid}>
                {/* 1. Full Name */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    Full Name <span className={styles.reqStar}>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
                    className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                  />
                  {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                </div>

                {/* 2. Company Name */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    Company Name <span className={styles.reqStar}>*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Avantee Apparel Ltd."
                    className={`${styles.input} ${errors.companyName ? styles.inputError : ''}`}
                  />
                  {errors.companyName && <span className={styles.errorText}>{errors.companyName}</span>}
                </div>

                {/* 3. Email Address */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    Email Address <span className={styles.reqStar}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                {/* 4. Phone Number */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    Phone Number <span className={styles.reqStar}>*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  />
                  {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                </div>

                {/* 5. Country */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    Country <span className={styles.reqStar}>*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. United States, India, Germany"
                    className={`${styles.input} ${errors.country ? styles.inputError : ''}`}
                  />
                  {errors.country && <span className={styles.errorText}>{errors.country}</span>}
                </div>

                {/* 6. Product (Pre-filled, Auto-selected) */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    Product <span className={styles.reqStar}>*</span>
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    readOnly
                    className={`${styles.input} ${styles.disabledInput}`}
                  />
                </div>

                {/* 7. Blend Details Option (Need blend details option) */}
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>
                    Blend Details <span className={styles.reqStar}>*</span>
                  </label>
                  <select
                    name="blendDetails"
                    value={formData.blendDetails}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.select}`}
                  >
                    <option value="80% Recycled Cotton / 20% Poly">80% Recycled Cotton / 20% Poly</option>
                    <option value="60% Recycled Cotton / 40% Recycled Poly">60% Recycled Cotton / 40% Recycled Poly</option>
                    <option value="65% Recycled Poly / 35% Recycled Cotton">65% Recycled Poly / 35% Recycled Cotton</option>
                    <option value="100% Recycled Cotton">100% Recycled Cotton</option>
                    <option value="50% Recycled Cotton / 50% Recycled Poly">50% Recycled Cotton / 50% Recycled Poly</option>
                    <option value="85% Upcycled Denim Cotton / 15% Poly">85% Upcycled Denim Cotton / 15% Poly</option>
                    <option value="100% Recycled Polyester (rPET)">100% Recycled Polyester (rPET)</option>
                    <option value="Custom Blend Specification">Custom Blend Specification</option>
                  </select>
                  {formData.blendDetails === 'Custom Blend Specification' && (
                    <input
                      type="text"
                      name="customBlend"
                      value={formData.customBlend}
                      onChange={handleChange}
                      placeholder="e.g. 70% Recycled Cotton / 30% Bamboo"
                      className={styles.input}
                      style={{ marginTop: '8px' }}
                    />
                  )}
                </div>

                {/* 8. Quantity / Requirement */}
                <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
                  <label className={styles.label}>
                    Quantity / Requirement (Optional)
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g. 5,000 kg / 10 metric tons / Roll sample request"
                    className={styles.input}
                  />
                </div>

                {/* 8. Message */}
                <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
                  <label className={styles.label}>
                    Message <span className={styles.reqStar}>*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify your technical requirements, yarn count specifications, or target delivery dates..."
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  />
                  {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>
              </div>

              <div>
                <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                  {isSubmitting ? (
                    <>
                      <FaSpinner style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Submitting Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
