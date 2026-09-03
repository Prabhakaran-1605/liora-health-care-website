import images from './images.js';

const services = [
  {
    slug: 'tcm-acupuncture',
    name: 'TCM Acupuncture',
    icon: 'Sparkle',
    short:
      'A traditional practice using fine, sterile needles at specific points on the body to support balance and overall wellbeing.',
    image: images.tcmAcupuncture,
    intro:
      'TCM Acupuncture is the foundation of our practice \u2014 a traditional therapy rooted in Chinese medicine that has been refined and passed down over centuries.',
    involves:
      'A conversation about your current wellbeing, followed by the careful placement of fine, single-use needles at specific points on the body. Sessions are calm and unhurried, typically lasting 45\u201360 minutes, with time to rest once the needles are in place.',
    suitableFor:
      'Individuals interested in a traditional, whole-person approach to wellbeing, and those looking to incorporate acupuncture into a broader self-care routine.',
  },
  {
    slug: 'cupping-therapy',
    name: 'Cupping Therapy',
    icon: 'CircleDot',
    short:
      'A complementary therapy using gentle suction to help the body relax, often used alongside acupuncture.',
    image: images.cupping,
    intro:
      'Cupping Therapy is a complementary technique that has long been used within Traditional Chinese Medicine, often paired with acupuncture for a more complete session.',
    involves:
      'Smooth cups are placed on the skin and gentle suction is created, encouraging the underlying tissue to soften and release. Cups may be left in place briefly or moved slowly across the area, depending on your practitioner\u2019s approach.',
    suitableFor:
      'Those curious about complementary bodywork, and clients who feel they carry tension in particular areas of the body.',
  },
  {
    slug: 'cosmetic-acupuncture',
    name: 'Cosmetic Acupuncture',
    icon: 'Flower2',
    short:
      'A specialized, beauty-focused technique using very fine facial needling as part of a broader wellness routine.',
    image: images.cosmeticAcupuncture,
    intro:
      'Cosmetic Acupuncture brings the principles of traditional acupuncture to a beauty-focused setting, using very fine needles across the face as part of a broader approach to wellbeing.',
    involves:
      'A short consultation about your goals, followed by careful, precise needling across the face and sometimes the neck and shoulders. Many clients find the sessions themselves calming and restful.',
    suitableFor:
      'Individuals interested in a holistic, natural addition to their self-care routine, approached without guarantees or promises of specific cosmetic outcomes.',
  },
  {
    slug: 'electro-acupuncture',
    name: 'Electro Acupuncture',
    icon: 'Zap',
    short:
      'A modern variation of acupuncture that incorporates gentle, controlled electrical stimulation.',
    image: images.electroAcupuncture,
    intro:
      'Electro Acupuncture builds on traditional needling by connecting select needles to a device that delivers a gentle, controlled pulse \u2014 a modern refinement incorporated into our acupuncture care.',
    involves:
      'Needles are placed as in a standard acupuncture session, and a small number are then connected to a device set at a low, comfortable intensity. Your practitioner will check in with you throughout to make sure the sensation feels right.',
    suitableFor:
      'Clients already familiar with acupuncture who are interested in exploring this modern variation, always guided by your practitioner\u2019s recommendation.',
  },
  {
    slug: 'nutrition-suggestions',
    name: 'Nutrition Suggestions',
    icon: 'Leaf',
    short:
      'Personalized, food-based guidance that can complement your overall wellness journey.',
    image: images.nutrition,
    intro:
      'Nutrition Suggestions offer thoughtful, food-based guidance that can be incorporated alongside your other treatments to support your broader wellness journey.',
    involves:
      'A conversation about your current habits, preferences and goals, followed by practical, individualized suggestions you can bring into everyday life at your own pace.',
    suitableFor:
      'Anyone looking for simple, sustainable guidance around food as one part of a wider, personalized approach to wellbeing.',
  },
];

export default services;
