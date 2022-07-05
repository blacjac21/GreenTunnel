const config = {
	ip: '192.168.1.101',
	port: 8000,
	httpsOnly: false,
	clientHelloMTU: 100,
	dns: {
		type: 'https', // 'tls' or 'https' or 'unencrypted'
		server: 'https://cloudflare-dns.com/dns-query',
		ip: '192.168.1.101',
		port: 53,
		cacheSize: 1000,
	}
};

export default config;
