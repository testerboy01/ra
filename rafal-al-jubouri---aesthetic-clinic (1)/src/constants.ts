export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#treatments', label: 'Treatments' },
  { href: '#contact', label: 'Contact' },
];

export const trustPoints = [
  { title: 'Board-Certified Expertise', description: 'Dr. Al-Jubouri is a board-certified dermatologist with over 15 years of experience in aesthetic medicine.' },
  { title: 'Personalized Care', description: 'Every treatment plan is tailored to your unique skin type, goals, and needs.' },
  { title: 'Natural-Looking Results', description: 'Our philosophy is to enhance your natural beauty, not to alter it. We believe in subtle, yet significant results.' },
];

export const treatments = [
  { title: 'Anti-Wrinkle Injections', description: 'Smooth fine lines and wrinkles for a refreshed, youthful appearance.' },
  { title: 'Dermal Fillers', description: 'Restore volume and contour to the face, lips, and cheeks.' },
  { title: 'Microneedling', description: 'Stimulate collagen production to improve skin texture, reduce scars, and minimize pores.' },
  { title: 'Chemical Peels', description: 'Exfoliate and resurface the skin to treat acne, pigmentation, and sun damage.' },
  { title: 'Laser Hair Removal', description: 'Permanently reduce unwanted hair on the face and body.' },
  { title: 'HydraFacial', description: 'A multi-step treatment that cleanses, exfoliates, and hydrates the skin for an instant glow.' },
];

export const testimonials = [
  { quote: 'Dr. Al-Jubouri is a true artist. I have never felt more confident in my own skin.', author: 'A.K.' },
  { quote: 'The results are so natural, nobody can tell I had anything done. They just say I look well-rested!', author: 'S.L.' },
  { quote: 'From the moment I walked in, I felt at ease. The clinic is beautiful and the staff are so welcoming.', author: 'M.P.' },
];

import { imageUrls } from './images';

// This is where you can easily update all the images for the website.
// The comments specify which component and section each image is used in.
export const images = {
  // Used in: src/components/Hero.tsx (as the main background)
  hero: imageUrls.heroBackground,

  // Used in: src/components/BeforeAfter.tsx (in the 'Real Results' gallery)
  beforeAfter: [
    imageUrls.beforeAfter1,
    imageUrls.beforeAfter2,
  ],

  // Used in: src/components/ClinicExperience.tsx (in 'The Clinic Experience' gallery)
  clinicExperience: [
    imageUrls.clinic1,
    imageUrls.clinic2,
    imageUrls.clinic3,
  ],
};

export const faqs = [
  {
    question: 'What is the downtime for anti-wrinkle injections?',
    answer: 'There is typically no downtime. You may experience some mild redness or swelling at the injection site, which usually subsides within a few hours.',
  },
  {
    question: 'How long do dermal fillers last?',
    answer: 'The longevity of dermal fillers varies depending on the type of filler used and the area treated, but results typically last from 6 to 18 months.',
  },
  {
    question: 'Is laser hair removal painful?',
    answer: 'Most patients describe the sensation as a quick snap, similar to a rubber band. We use a cooling system to ensure your comfort throughout the treatment.',
  },
  {
    question: 'How many sessions of microneedling will I need?',
    answer: 'We typically recommend a series of 3-6 treatments, spaced 4-6 weeks apart, to achieve optimal results. Your specific treatment plan will be discussed during your consultation.',
  },
];
