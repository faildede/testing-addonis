import type { HttpContext } from '@adonisjs/core/http'
import productService from '#services/product_service'

export default class ProductsController {
  async index({}: HttpContext) {
    return productService.listAll()
  }

  async show({ params }: HttpContext) {
    return productService.getById(Number(params.id))
  }

  async store({ request }: HttpContext) {
    const payload = request.only(['title', 'price', 'description'])
    return productService.create(payload)
  }

  async update({ params, request }: HttpContext) {
    const payload = request.only(['title', 'price', 'description'])
    return productService.update(Number(params.id), payload)
  }

  async destroy({ params }: HttpContext) {
    await productService.delete(Number(params.id))
    return { success: true }
  }
}
