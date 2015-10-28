# GitHub

## Branches

all repos automatically start in master branch

can create new branch off of current branch

`$ git branch <branch_name>` :: creates new branch, local at this stage

`$ git checkout <branch_name>` :: goes into branch

`$ git branch --set-upstream-to=origin/<github_name> <branch_name>` :: links to github branch

files exist separately in different branches

changes in one branch -> automatic pull request created for other branch

**create new branch locally**

`$ git push -u`  
`$ git push --set-upstream origin <new_branch>`  

**merge with master branch**  

`git merge master` 

### Workflow

one master branch  
individual branches for each team member  

`git checkout master`  
`git pull`  
`git checkout <my_branch>`  
`git pull`  
`git merge master`  
`git push`  
commit and push work  
issue pull request for master  
code reviewed by another team member  
automatically merged with master  

## Pull Requests

1. create new pull request with title and message 

2. merge pull request 

3. confirm merge

4. pull locally

## Forks
