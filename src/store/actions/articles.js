import {getConfInfo, getArticle, getArticleMarkDown} from 'api'

export function getAgreem (id) {
	return async function () {
		const res = await getConfInfo()
		return res
	}
}

export const getArticles = () => {
	return async () => {
		const res = await getArticle()
		return res
	}
}

export const getArtMarkDown = (path) => {
	return async () => {
		const res = await getArticleMarkDown(path)
		return res
	}
}
