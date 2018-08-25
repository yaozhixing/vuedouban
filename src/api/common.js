import mhttp from './http'

/*热门影院*/
export const getHotList = (params) => {
    return mhttp.get("/api/movie/in_theaters",params)
}

/*即将上线*/
export const getSoonList = (params) => {
    return mhttp.get("/api/movie/coming_soon",params)
}

/*最新电影*/
export const getNewList = (params) => {
    return mhttp.get("/api/movie/new_movies",params)
}

/*电影推荐*/
export const getRecomList = (id,params) => {
    return mhttp.get("/api/movie/top250", params)
}

/*电影内容信息*/
export const getMovieSubject = (id,params) => {
    return mhttp.get("/api/movie/subject/"+id, params)
}