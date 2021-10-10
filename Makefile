all: Paste

.PHONY:
Paste: Paste/index.ts
	cd Paste && tsc
	echo '#! /usr/bin/env node' > /usr/local/bin/paste
	cat Paste/index.js >> /usr/local/bin/paste
	chmod a+x /usr/local/bin/paste