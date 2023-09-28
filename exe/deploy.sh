#!/bin/bash

# Exit on any error
set -e

# Switch to main branch
git switch main
# Perform clean install and build
npm ci && npm run build

# Delete and re-create local branch
git branch -D gh-pages
git switch -c gh-pages

# Loop through source files and remove them
for dir in $(ls -a ./); do
    [ "$dir" = "." ] && continue
    [ "$dir" = ".." ] && continue
    [ "$dir" = "dist" ] && continue
    [ "$dir" = "node_modules" ] && continue
    [ "$dir" = ".git" ] && continue
    [ "$dir" = ".gitignore" ] && continue
    rm -rf "$dir"
done

# Move build files up
cd dist
for file in ./*; do
    mv "$file" ..
done

git add -A
# Don't let node_modules get through
git reset .gitignore
git commit -m "Deploying app..."
git push --force --set-upstream origin gh-pages

echo -e "\n\033[36mSuccessfully\033[0m deployed application to GitHub Pages!\n"

git switch main


# Maybe play around with some error handling

# if [ $? -ne 0 ]; then
#     printf "\n\n${RED}Failed to deploy application to GitHub Pages!${NO_COLOR}\n\n"
#     exit 0