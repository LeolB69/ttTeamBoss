#!/bin/bash
set -e

hugo
cd public
git add .
git commit -m "déploiement `date`"
git push