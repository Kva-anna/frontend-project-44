PHONY: install brain-games brain-even brain-calc brain-gcd brain-progression brain-prime publish 

npm:	npm install

install:	npm ci

brain-games:	node bin/brain-games.js

brain-even:	node bin/brain-even.js

brain-calc:	node bin/brain-calc.js

brain-gcd:	node bin/brain-gcd.js

brain-progression:	node bin/brain-progression.js
    
brain-prime:	node bin/brain-prime.js

publish:	npm publish --dry-run