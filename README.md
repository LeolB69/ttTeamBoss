# ttTeamBoss
Étapes pour lancer le site :
- Installer Hugo https://gohugo.io/installation/
- Lancer le build : `hugo serve`
- Déployer le dossier public en utilisant terminal bash : `./deploy.sh`

## Configurer sur un nouvel ordinateur

- Ouvrir Git Bash et se mettre dans un dossier de travail
- Télécharger le site depuis Github : `git clone git@github.com:LeolB69/ttteamboss.git`
- Se déplacer dans le dossier ttTeamBoss : `cd ttteamboss`
- Configurer le déploiement : `git worktree add -B gh-pages public origin/gh-pages`
