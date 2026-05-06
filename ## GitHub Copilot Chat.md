## GitHub Copilot Chat

- Extension: 0.45.0 (prod)
- VS Code: 1.117.0 (10c8e557c8b9f9ed0a87f61f1c9a44bde731c409)
- OS: linux 5.15.0-176-generic x64
- GitHub Account: ajai2025

## Network

User Settings:
```json
  "http.systemCertificatesNode": false,
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: timed out after 10 seconds
- DNS ipv6 Lookup: timed out after 10 seconds
- Proxy URL: None (2 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: Error (6272 ms): Error: getaddrinfo EAI_AGAIN api.github.com
	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)
- Node.js fetch: Error (128 ms): TypeError: fetch failed
	at node:internal/deps/undici/undici:14902:13
	at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
	at async t._fetch (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5307:5229)
	at async t.fetch (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5307:4541)
	at async u (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5339:186)
	at async Eg._executeContributedCommand (file:///snap/code/235/usr/share/code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:501:48675)
  Error: getaddrinfo EAI_AGAIN api.github.com
  	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: Error (4 ms): getaddrinfo EAI_AGAIN api.githubcopilot.com
- DNS ipv6 Lookup: Error (1 ms): getaddrinfo EAI_AGAIN api.githubcopilot.com
- Proxy URL: None (2 ms)
- Electron fetch (configured): Error (4 ms): Error: net::ERR_INTERNET_DISCONNECTED
	at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10684)
	at SimpleURLLoaderWrapper.emit (node:events:519:28)
  {"is_request_error":true,"network_process_crashed":false}
- Node.js https: Error (18 ms): Error: getaddrinfo EAI_AGAIN api.githubcopilot.com
	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)
- Node.js fetch: Error (20 ms): TypeError: fetch failed
	at node:internal/deps/undici/undici:14902:13
	at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
	at async t._fetch (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5307:5229)
	at async t.fetch (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5307:4541)
	at async u (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5339:186)
	at async Eg._executeContributedCommand (file:///snap/code/235/usr/share/code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:501:48675)
  Error: getaddrinfo EAI_AGAIN api.githubcopilot.com
  	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)

Connecting to https://copilot-proxy.githubusercontent.com/_ping:
- DNS ipv4 Lookup: Error (0 ms): getaddrinfo EAI_AGAIN copilot-proxy.githubusercontent.com
- DNS ipv6 Lookup: Error (0 ms): getaddrinfo EAI_AGAIN copilot-proxy.githubusercontent.com
- Proxy URL: None (3 ms)
- Electron fetch (configured): Error (3 ms): Error: net::ERR_INTERNET_DISCONNECTED
	at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10684)
	at SimpleURLLoaderWrapper.emit (node:events:519:28)
  {"is_request_error":true,"network_process_crashed":false}
- Node.js https: Error (14 ms): Error: getaddrinfo EAI_AGAIN copilot-proxy.githubusercontent.com
	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)
- Node.js fetch: Error (21 ms): TypeError: fetch failed
	at node:internal/deps/undici/undici:14902:13
	at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
	at async t._fetch (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5307:5229)
	at async t.fetch (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5307:4541)
	at async u (/snap/code/235/usr/share/code/resources/app/extensions/copilot/dist/extension.js:5339:186)
	at async Eg._executeContributedCommand (file:///snap/code/235/usr/share/code/resources/app/out/vs/workbench/api/node/extensionHostProcess.js:501:48675)
  Error: getaddrinfo EAI_AGAIN copilot-proxy.githubusercontent.com
  	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)

Connecting to https://mobile.events.data.microsoft.com: Error (3 ms): Error: net::ERR_INTERNET_DISCONNECTED
	at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10684)
	at SimpleURLLoaderWrapper.emit (node:events:519:28)
  {"is_request_error":true,"network_process_crashed":false}
Connecting to https://dc.services.visualstudio.com: Error (3 ms): Error: net::ERR_INTERNET_DISCONNECTED
	at SimpleURLLoaderWrapper.<anonymous> (node:electron/js2c/utility_init:2:10684)
	at SimpleURLLoaderWrapper.emit (node:events:519:28)
  {"is_request_error":true,"network_process_crashed":false}
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: Error (14 ms): Error: getaddrinfo EAI_AGAIN copilot-telemetry.githubusercontent.com
	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: Error (13 ms): Error: getaddrinfo EAI_AGAIN copilot-telemetry.githubusercontent.com
	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)
Connecting to https://default.exp-tas.com: Error (22 ms): Error: getaddrinfo EAI_AGAIN default.exp-tas.com
	at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26)

Number of system certificates: 144

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).