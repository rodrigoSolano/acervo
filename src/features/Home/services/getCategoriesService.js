// @ts-check
import categories from '../mocks/categories.json'

/**
 * @returns {Promise<import("../../../models/ApiResponse").ApiResponse>}
 */
export default function getCategoriesService() {
  return new Promise(resolve => {
    resolve({
      totalCount: categories.length,
      totalEdges: categories.length,
      hasMore: false,
      pag: 0,
      edges: categories
    })
  })
}
