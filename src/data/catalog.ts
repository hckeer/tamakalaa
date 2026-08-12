import hero from '../../photo/product-hero.png';
import product from '../../photo/product.png';
import detail from '../../photo/Extreme_macro_close-up_of_a_202606011701.jpeg';
import gallery from '../../photo/Luxury_product_photography_of_the_202606011701.jpeg';
import heritage from '../../photo/heritage-bg.png';
import journal from '../../photo/ethos-bg-2.png';
import heroStill from '../../photo/Gemini_Generated_Image_chyt5schyt5schyt.png';

export const productData = {
  name: 'The Monolith Vessel',
  slug: 'the-monolith-vessel',
  sku: 'TK-MV-001',
  price: { npr: 'NPR 3,500', usd: 'USD 100' },
  images: { hero, heroStill, product, detail, gallery, heritage, journal },
  description: 'A pure copper vessel, hand-finished to let every mark of making remain visible.',
};

export const faqs = [
  ['What is The Monolith Vessel made from?', 'The vessel is made from pure copper and individually hand-finished.'],
  ['How do I care for a copper water vessel?', 'Rinse with warm water after use and dry thoroughly. Use a soft cloth for routine polishing; avoid abrasive cleaners.'],
  ['Can I use a copper vessel every day?', 'Yes. Follow the care guidance supplied with your vessel and consult a qualified professional for personal wellness advice.'],
  ['Do you ship outside Nepal?', 'Yes. International checkout pricing is shown in USD; delivery options are confirmed at checkout.'],
  ['How can I track my order?', 'Use your order reference and email on the tracking page to see the current workshop and shipment stage.'],
];
