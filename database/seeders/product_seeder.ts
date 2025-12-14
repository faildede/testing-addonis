import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { ProductFactory }from '#database/factories/product_factory'

export default class ProductSeeder extends BaseSeeder {
  async run() {
    await ProductFactory.createMany(10)
  }
}
