#!/bin/bash
set -e

rm -rf public
hugo
cd public
git add .
git commit -m "déploiement `date`"
git push