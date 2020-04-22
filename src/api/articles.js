import {axiosInstance} from './axiosInstance'

export function getConfInfo () {
	return axiosInstance.get(`document/user-agreement/`)
}

export function getArticle () {
	return fetch('https://resell.com.ua/blog/ghost/api/v0.1/posts/?client_id=ghost-frontend&client_secret=46d3838aca37')
		.then((res) => res.json())
		.then((res) => res)
}
export function getArticleMarkDown (path) {
	return axiosInstance.get(`document/${path}`)
}
