import pagination from "../pagination"

describe('Pagination Test', () => {
  const sampleData = new Array(100).fill('')

  it ('Should convert 100 item into 10 page of pagination as default', () => {
    const { totalPage } = pagination(sampleData)
    expect(totalPage).toEqual(10)
  })

  it ('Should convert 100 item into 10 page of pagination', () => {
    const { totalPage } = pagination(sampleData, 1, 10)
    expect(totalPage).toEqual(10)
  })

  it (`Should throw "page" must be greater than 0`, () => {
    try {
      pagination(sampleData, -1, 10)
    } catch (error) {
      expect(error.message).toEqual(`"page" must be greater than 0`)
    }
  })
})