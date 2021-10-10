import * as https from 'https'

const req = https.request({
	host: 'hastebin.com',
	port: 443,
	path: '/documents',
	method: 'POST'
}, res => {
	let body = ''

	res.on('data', chunk => body += chunk)

	res.on('end', () => {
		const key = JSON.parse(body).key as string
		console.log(`https://hastebin.com/${ key }`)
	})
})

process.stdin.pipe(req)