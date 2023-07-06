export async function api(params: string) {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines${params}&apiKey=93fd5f5228654cdabd24534ee8f0ce4b`)
        return response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}