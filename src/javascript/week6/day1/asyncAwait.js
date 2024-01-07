const requestUrl = `https://jsonplaceholder.typicode.com/posts`

try {
    const dummyData = async () => {
        const response = await axios.get(requestUrl)
        console.log(response.data)
    }
} catch (error) {
    console.log(error)
}
dummyData()