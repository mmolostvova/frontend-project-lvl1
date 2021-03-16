install:
	npm install

brain-games:
	node bin/brain-games.js

brain-even: 
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

rain-gcd:
	node brain-gcd.js

brain-progression:
	node brain-progression.js

brain-prime:
	node brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
