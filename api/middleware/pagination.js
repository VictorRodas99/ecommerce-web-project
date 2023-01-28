// http://api/products?page=1

/**
 * @param {Array<{}>} data
 */
export const paginate = (data) => {
    return (ctx, next) => {

    if (ctx.req.removeLimit) {
        ctx.res.paginated = data
        return next()
    }

    const result = {}
    const page = Number(ctx.req.query('page')) ?? NaN
    const limit = 9

    if (isNaN(page)) {
      result.data = data.slice(0, limit)
      ctx.res.paginated = result

      return next()
    }

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    if (endIndex < data.length) {
      result.nextPage = page + 1
    }

    if (startIndex > 0) {
      result.previousPage = page - 1
    }

    result.data = data.slice(startIndex, endIndex)
    ctx.res.paginated = result

    return next()
  }
}

// Allows to get all the data with query ?all=true
export const queryAll = (ctx, next) => {
    const requestedAll = ctx.req.query('all') === 'true'
    
    if(requestedAll) {
        ctx.req.removeLimit = true 
    }

    return next()
}