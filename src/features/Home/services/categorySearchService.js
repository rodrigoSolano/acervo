// @ts-check
import categories from '../mocks/categories.json'

/**
 * @typedef {Object} filter
 * @property {String} query
 */

/**
 * @typedef {Object} props
 * @property {filter} filter
 */

/**
 * @param {props} props
 * @returns {Promise<import("../../../models/ApiResponse").ApiResponse>}
 */
export default async function categorySearchService({ filter }) {
  const filteredCategories = categories.filter(category => {
    return category.name.toLowerCase().includes(filter.query.toLowerCase())
  })

  return {
    totalCount: filteredCategories.length,
    totalEdges: filteredCategories.length,
    hasMore: false,
    pag: 0,
    edges: filteredCategories
  }
}
