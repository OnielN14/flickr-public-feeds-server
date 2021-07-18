export default function pagination (data: any[], page: number = 1, perPage: number = 10) {
  if (page < 1 || isNaN(page)) throw new Error(`"page" must be greater than 0`);
  if (perPage < 1 || isNaN(perPage)) throw new Error(`"perPage" must be greater than 0`);
  
  const dataPerPage = data.slice((page - 1) * perPage, page * perPage)
  const totalPage = Math.ceil(data.length / perPage)

  return {
    data: dataPerPage,
    page,
    perPage,
    total: data.length,
    totalPage
  }
}