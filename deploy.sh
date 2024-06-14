#!/bin/bash
set -e

cd public
git add .
git commit -m "déploiement `date`"
git push