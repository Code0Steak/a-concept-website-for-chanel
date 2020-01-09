const SHOP_DATA =  [
  {
    id: 1,
    title: 'Fine Jewellery',
    routeName: 'FineJewellery',
    items: [
      {
        id: 1,
        name: 'Coco Crush Ring',
        imageUrl: 'https://www.chanel.com/wfj/product/medias/coco-crush-ring/J10574-default-0-1540-grey-nocrop-1476739236193.jpg',
        price: 2500
      },
      {
        id: 2,
        name: 'Coco Crush Bracelet',
        imageUrl: 'https://www.chanel.com/wfj/product/medias/coco-crush-bracelet/J11162-default-0-1540-grey-nocrop-1490266141067.jpg',
        price: 2600
      },
      {
        id: 3,
        name: 'Ultra Ring',
        imageUrl: 'https://www.chanel.com/wfj/product/medias/ultra-ring/J3092-default-0-1540-grey-nocrop-1476739226803.jpg',
        price: 1370
      },
      {
        id: 4,
        name: 'Ultra Neclace',
        imageUrl: 'https://www.chanel.com/wfj/product/medias/ultra-necklace/J3171-alternative-0-1540-grey-nocrop-1476739237490.jpg',
        price: 25
      },

    ]
  },
  {
    id: 2,
    title: 'Watches',
    routeName: 'Watches',
    items: [
      {
        id: 1,
        name: 'J12 Black',
        imageUrl: 'https://www.chanel.com/wfj/product/medias/j12-watch/H5697-default-0-1540-grey-nocrop-1552544306527.jpg',
        price: 4675
      },
      {
        id: 2,
        name: 'J12 White',
        imageUrl: 'https://www.chanel.com/wfj/product/medias/j12-watch/H5705-default-0-1540-grey-nocrop-1562302941760.jpg',
        price: 280
      },
      {
        id: 3,
        name: 'J12 Jewellery',
        imageUrl: 'https://www.chanel.com/wfj/product/medias/j12-jewellery-watch/H3384-default-0-1540-grey-nocrop-1476739212803.jpg',
        price: 110
      },
      {
        id: 4,
        name: 'Code Coco',
        imageUrl: 'https://www.chanel.com/wfj/product/medias/code-coco-watch/H5145-default-0-1540-grey-nocrop-1517810682230.jpg',
        price: 160
      }
    ]
  },
  {
    id: 3,
    title: 'Skincare',
    routeName: 'Skincare',
    items: [
      {
        id: 1,
        name: 'Hand Cream',
        imageUrl: 'https://www.chanel.com/fnbv3/image/full/chanel__com_type1/skus_full/le-lift-the-smoothing-even-toning-and-replenishing-hand-cream-bottle-50ml.3145891416404.jpg',
        price: 125
      },
      {
        id: 2,
        name: 'CC Cream',
        imageUrl: 'https://www.chanel.com/fnbv3/image/full/chanel__com_type1/skus_full/cc-cream-super-active-complete-correction-spf-50-10-beige-tube-30ml.3145891405552.jpg',
        price: 90
      },
      {
        id: 3,
        name: 'Sublimage',
        imageUrl: 'https://www.chanel.com/fnbv3/image/512/chanel__com/skus_relative/sublimage-le-teint-ultimate-radiance-generating-cream-foundation-12-beige-rose-30g.3145891466102.jpg',
        price: 90
      },
      {
        id: 4,
        name: 'Special Edition',
        imageUrl: 'https://prd-v3-i.chanel.com/content/dam/fnb/core/onlyat/pushlanding/UK-without-CTA.adaptive.1600.jpg',
        price: 165
      }
    ]
  },
  {
    id: 4,
    title: 'Fragrance',
    routeName: 'Fragrance',
    items: [
      {
        id: 1,
        name: 'Coco Intense',
        imageUrl: 'https://www.chanel.com/fnbv3/image/full/chanel__com_type1/skus_full/coco-mademoiselle-eau-de-parfum-intense-spray-100ml.3145891166606.jpg',
        price: 118
      },
      {
        id: 2,
        name: 'Coco Mademoiselle',
        imageUrl: 'https://www.chanel.com/fnbv3/image/full/chanel__com_type1/skus_full/coco-mademoiselle-moisturising-body-lotion-200ml.3145891169454.jpg',
        price: 200
      },
      {
        id: 3,
        name: 'Bleu de Chanel',
        imageUrl: 'https://www.chanel.com/fnbv3/image/full/chanel__com_type1/skus_full/bleu-de-chanel-parfum-spray-100ml.3145891071801.jpg',
        price: 810
      },
      {
        id: 4,
        name: 'N deg5',
        imageUrl: 'https://www.chanel.com/fnbv3/image/512/chanel__com/skus_relative/n_5-n_5-fragments-dor-250ml.3145891058185.jpg',
        price: 180
      }
    ]
  },
  {
    id: 5,
    title: 'Sunglasses',
    routeName: 'Sunglasses',
    items: [
      {
        id: 1,
        name: 'Cat Eye',
        imageUrl: 'https://www.chanel.com/en_GB/fashion/sunglasses/pub/media/catalog/product/cache/small_image/700x560/799896e5c6c37e11608b9f8e1d047d15/f/a/fall19-a71326-x01060-l9514-4255-c395-s4-pdt_view_1.jpg',
        price: 325
      },
      {
        id: 2,
        name: 'Oval',
        imageUrl: 'https://www.chanel.com/en_GB/fashion/sunglasses/pub/media/catalog/product/cache/small_image/700x560/799896e5c6c37e11608b9f8e1d047d15/f/a/fall19-a71321-x02016-s7148-5411-c714-83-pdt_view_1.jpg',
        price: 200
      },
      {
        id: 3,
        name: 'Pilot',
        imageUrl: 'https://www.chanel.com/en_GB/fashion/sunglasses/pub/media/catalog/product/cache/image/700x560/af097278c5db4767b0fe9bb92fe21690/s/p/spring20-a71354-x02569-s6612-5423b-1661-b8-pdt_view_1.jpg',
        price: 25
      },
      {
        id: 4,
        name: 'Butterfly',
        imageUrl: 'https://www.chanel.com/en_GB/fashion/sunglasses/pub/media/catalog/product/cache/image/700x560/af097278c5db4767b0fe9bb92fe21690/s/p/spring20-a71351-x02569-s0116-5420b-c501-s6-pdt_view_1.jpg',
        price: 25
      }
    ]
  }
]
export default SHOP_DATA;
