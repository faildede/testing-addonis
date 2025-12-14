import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('title')
      table.decimal('price', 10, 2)
      table.text('description')
      table.string('product_id').unique()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('title')
      table.dropColumn('price')
      table.dropColumn('description')
      table.dropColumn('product_id')
    })
  }
}
