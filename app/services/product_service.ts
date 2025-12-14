import Product from '#models/product'

type CreateProductPayload = {
  title: string
  price: number
  description?: string
}

type UpdateProductPayload = Partial<CreateProductPayload>

export class ProductService {

  async listAll() {
    return Product.all()
  }

  async getById(id: number) {
    return Product.findOrFail(id)
  }

  async create(payload: CreateProductPayload) {
    return Product.create(payload)
  }

  async update(id: number, payload: UpdateProductPayload) {
    const product = await Product.findOrFail(id)
    product.merge(payload)
    await product.save()
    return product
  }

  async delete(id: number) {
    const product = await Product.findOrFail(id)
    await product.delete()
    return product
  }
}

export default new ProductService()
