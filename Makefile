.PHONY: build
github-pages: clean-repo
	git init
	git add .
	git commit -m "Deploy to GitHub Pages"
	git push --force --quiet "git@github.com:pseudonamed/game-of-life-site.git" master:gh-pages

.PHONY: clean-repo
clean-repo:
	rm -fr .git
