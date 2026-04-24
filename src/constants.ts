import { MenuItem, Review, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'Classic Cappuccino',
    price: '$4.50',
    description: 'Double shot of espresso, steamed milk, and a layer of velvety foam.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPV6SzZtIM7_WMFqYuIupQAmF7g0ZodN_Iqny9SYigXH01QWHL9vL5i7RXFsJf6ZYlmKmIDOPMY88TbVAMBT-mdtoFBkJCzgjJbQpITicR2ryClLIHfFR6dAQcRk3osLC6_sVm6sSaF47u13-WvkEI23lPV4sx0V5eCD4CIux1pQSae0Q_Zry7hvam42FK8oDKBSLGWheqACqkOEJWz0BzT8vJFpOOnHhJK41TzAlyqAjfbqg1h_TjxKLYCyUAVfHb9BWiLAxAeDQ',
    category: 'Espresso'
  },
  {
    id: 'm2',
    name: 'Vanilla Cold Brew',
    price: '$5.75',
    description: '12-hour steeped cold brew with a hint of Madagascar vanilla bean.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwHqiUAGmRqZpAAP8pka8wpeNtT50c2GFYEs9iIjoW39DPKai0EG18HcZT372jhoYpY2STqqM0jPeK_i7g9Wm1a8AY5c6jbYQ2g7MI5pV0wpb32frDkmOD6u765pJsv9a0vQfsr6no_4NOke_-DcE2EyIq86ezK7i2jzCEgrGY8twGjKNN3OQ1uPaAppblYcab7jHzC0HA8SrM6fKBDsFF6VoQED2qq-N6qMZzNLLy4c48-Gh3--hqqqMwyyL8IYQXwXKdnxJvQog',
    category: 'Cold Coffee'
  },
  {
    id: 'm3',
    name: 'Butter Croissant',
    price: '$3.25',
    description: 'Hand-laminated, flaky French pastry baked fresh every morning.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD24Xw3migYqS-DPZc_CeeJKRDym3K3R-ayrknLzTMy2EH0RvpyQkxjYAnBwSjQU02zf7wBEvEp6eSXdIQSiMcWfMeWL7cigEflHEVcIqTSlFr_p_XtHRSpeJ8ALyDXxJqZzFvtEEoNExV4D3BQnWXYiaC9FYMowlukzeLeG85hIrRVc6ctetSuJ00pZ_Sgvvlz-4AsQGxVPGQwSgjnhbQa1-O-Kcq7sGpobjj0mfai1ANZjeZ9nhUBejuLa9-zv52JiU8SEWxACYY',
    category: 'Snacks'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Erik Sorenson',
    role: 'Architect',
    content: '"The ambiance alone is worth the visit. It’s like stepping into a peaceful cabin in Copenhagen. The espresso is the best in the city."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGfRrkZTJ5IX32CfHeoyRkqL9WDizRwrfpjiwi1U_eduNFV5XMUriYXp0qgkq_XkMeWHyzCw0fpIy_tiQ_iy5Tnhl4NFAqIXiWllYwccp6wKHlCX9H7Li78NsusiZKsRkEjpHirOzRe3lxVYg4QkWHOQbgU2A8oKuEjCASudjAUvzJCem4ewqvaCK8BUEpX9s0-g8-Yx9DibPttw_H-vTK8dw8hl09nuvcc71oHjn-qiPC3uhOf72xMva3u489fzIXmUeC5hrmrqI',
    rating: 5
  },
  {
    id: 'r2',
    name: 'Lena Lindholm',
    role: 'Film Director',
    content: '"Their attention to detail is remarkable. Every cup is served with such care. Truly a cinematic experience for coffee lovers."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJNlHWeHRvQ9FpG555AP302c3Hdv-KTJEAm62rKXXzNBYz20tOGmjWp-FkeNRLeFzjBwn_Aaxqh8hzp0C-IwplOcfHUJXxhDOM-bO79zRuyETOf2dIsc_37Uw89bbdOI5sTc8LBJTWWx0Z2JPrbzoJhbm3bH_ZJ3mFkRNpvNCnTDDZSujfpfZxhCEp6UV2j4_MpoKrqzS6sk6ZD1qrUchN3RZOGbA4Z_Q-Cwb4gzjUtoGwJuczhjLLRG44N1i-4nplk24kFlYgtLs',
    rating: 5
  },
  {
    id: 'r3',
    name: 'Marcus Berg',
    role: 'Designer',
    content: '"Finally a place that understands the quiet ritual of coffee. No loud music, just the aroma and great beans."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_5sTPm7fkzovlE5BRyPSho-wNlxLYMrD-YT-70iyJXATEORz2HDO8Wru_zZL2cs9kJZ0tuQ0axID_IXZVuV3e7bIm5_d0802luscKj51idXWr30lYkh-i7o5igxy8QKyCTFo3R5E54DEdOxcqKeXDXJlLf0rqMjfXQf5zB6dK_RvrF6JJJFb27qpzWYdY-7-9PD8EM-eX9mOyukhYPz-QxSXV0z_NvwpiwXdniXuN1DWSZnJ4Bdz06xHyQvWSVtsU1Y0laMmFIF0',
    rating: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbA02OOWbelPwiCizGsNQMM-huYdhmJCCPmBGahlR0KzY3ZtEOuPWwLIG4EFCQEG2VpXbyyoDgltb7y_QAS2BATfMuSKBEArGPR7kRRAqkXoRvcT_obhX4p7pBgGFq_Lf-aEr4TwnAFegdC1V0LkLluEqYmLtC3xRcSmZaVkNpx3Q-28COjY4DB56wh7p1cQFLCOwsAerlEMVF2RMInoQICmK4HeElmRIMYOsKWOA3jQnDW2c-nvSvB3iziuwB72mGTSYppyn9zwM', alt: 'Minimalist cafe seating' },
  { id: 'g2', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCozEUrBTaovzt6xc51SLrU7v7ROxVLT-GPw7jQZ5QpzUvsB3h68OyLg1y-ifRs9xFat2GndIxM1LLbPdRGGo3Bg4ceEIBRgzP1Y-gOQ5Ey8mu1WccBM3W2KvfY_N1DfrHbzTJDkfvWpBsyLzxPv5NruudIOomLWM3E9tV-SydMBcRtSxbkoaqe0iZ5Z4v1FxpHXdWJcMa3DaoHD1cNqbOEAxOqyFn-cV2FA7wJ_l6Tt6ozg6hObYtBahngEDx134LMyhEj2lNwKiU', alt: 'Latte art overhead' },
  { id: 'g3', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQHIX_O125MI5G1vhY6_q8eJXjcZy9ooir6xBkjYNmYtlEp5unpzur-ZQp4SZ0mEhWuCb2wvX3GCAJtVpe3xnrbfm0PJxl26jxk8RX6tXc6R3Wp0rWjR_Cvc7IFE9sqvTOCvLMguN5Jbur7V3AkzRrZRODOmRYx8G8GcYCrKb0FPrtCUTd5QzdwwlBR-jTAOMP1aXOH34KKqrrEXp7Jn9RLlqF46hu1d6GXFviSVGRdcoLh9N1zUrKqYmWnDhypiXHSGRdLLxGC8k', alt: 'Pour over blooming' },
  { id: 'g4', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFuSGG9JOLwGWPwPvfWiuLhMysndYzLXTfr5gBJ__7--9ShL-JkLuLAEN6ihr-Up2SgjC7ngfAHkmmBh9h3-dDQaYCUuZeOGALL4EY0AtQQGKFcpjDphCCmkuzNLhBGUWt7ygSacUKp3ZPmcpxjakY1pBTbt-rljaucMtS8Fld1UHO3m7HggaXTJTae5ZJe-qD4j6RlpMpiTyj4XKt-SCBfxGlppuzfdnU4v6iPh8AeImXtJnuRuyMHTzCUz0nodZ_wOBisvsr4Lo', alt: 'Person reading with coffee' }
];
