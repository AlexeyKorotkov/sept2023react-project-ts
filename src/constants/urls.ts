const baseURL='https://api.themoviedb.org/3'

const search=/'search'
const discover=/'discover'
const movie=/'movie'
const genre=/'genre'

const urls:{
    movies:{
        base: `${discover}/${movie}`,
        byId:(id:number)=>`${movie}/${id}`

    }
}


export {
    baseURL,
    urls
}