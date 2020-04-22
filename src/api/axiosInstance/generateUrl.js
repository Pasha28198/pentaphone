let backendHost
const apiVersion = 'v1'

const hostname = window && window.location && window.location.hostname

if (hostname === 'resell.com.ua') {
	backendHost = 'https://resell.com.ua'
} else if (hostname === 'dev.resell.com.ua') {
	backendHost = 'https://dev.resell.com.ua'
} else if (hostname === 'https://dev.resell.com.ua') {
	backendHost = 'https://dev.resell.com.ua'
} else if (hostname === 'https://resell.com.ua') {
	backendHost = 'https://resell.com.ua'
} else if (hostname === 'stage.resell.com.ua') {
	backendHost = 'https://stage.resell.com.ua'
} else if (/^qa/.test(hostname)) {
	backendHost = `https://${hostname}`
} else {
	backendHost = 'https://dev.resell.com.ua' || 'http://localhost:8000'
}

export const API_ROOT = `${backendHost}/api/${apiVersion}`
