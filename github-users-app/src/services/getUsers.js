export const getUsers = async ({ keyword = 'cesar' } = {}) => {
  const apiURL = `https://api.github.com/search/users?q=${keyword}`

  try {
    const response = await fetch(apiURL)
    const { items = [] } = await response.json()

    if (Array.isArray(items)) {
      return items.map(user => {
        const { id, login, avatar_url } = user

        return { id, login, avatar_url }
      })
    }
  } catch (err) {
    console.error(err.message)
  }
}
