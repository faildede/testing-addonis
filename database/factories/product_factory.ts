import factory from '@adonisjs/lucid/factories'
import Product from '#models/product'

export const ProductFactory = factory
  .define(Product, async ({ faker }) => {
    return {
      title: faker.commerce.productName(),
      price: Number(faker.commerce.price({ min: 10, max: 5000, dec: 2 })),
      description: faker.commerce.productDescription(),
    }
  })
  .build()