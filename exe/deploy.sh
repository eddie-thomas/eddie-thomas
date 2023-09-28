#!/bin/bash

git switch main
git branch -D gh-pages
git switch -c gh-pages

for dir in ./*; do
    [ "$dir" = "dist" ] && continue
    [ "$dir" = ".git" ] && continue
    # echo "$dir"
    rm -rf "$dir"
done
# git switch main