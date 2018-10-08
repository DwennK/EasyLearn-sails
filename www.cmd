echo 'This script assumes a dead-simple, opinionated setup on Heroku.'  
 echo 'But, of course, you can deploy your app anywhere you like.'  
 echo '(Node.js/Sails.js apps are supported on all modern hosting platforms.)'  
 echo 'Warning: Specifically, this script assumes you are on the master branch, and that your app can be deployed simply by force-pushing on top of the *deploy* branch.  It will also temporarily use a local *predeploy* branch for preparing assets, that it will delete after it finishes.  Please make sure there is nothing you care about on either of these two branches!!!' 
 echo 'Preparing to deploy...'  
 echo '--'  
 git status  
 echo '--'  
 echo 'I hope you are on the master branch and have everything committed/pulled/pushed and are completely up to date and stuff.'  
 echo '********************************************'   
 echo '** IF NOT THEN PLEASE PRESS <CTRL+C> NOW! **'  
 echo '********************************************'  
 echo 'Press CTRL+C to cancel.'  
 echo '(you have five seconds)'  
 sleep 1  
 echo '...4'  
 sleep 1  
 echo '...3'  
 sleep 1  
 echo '...2'  
 sleep 1  
 echo '...1'  
 sleep 1   
 echo 'Alright, here we go.  No turning back now!'  
 echo 'Trying to switch to master branch...'  
 git checkout master  
 echo 'OK.  Now wiping node_modules/ and running npm install...'  
 rm -rf node_modules  
 rm -rf package-lock.json  
 npm install  
 git add package-lock.json  
 git commit -am 'AUTOMATED COMMIT: Did fresh npm install before deploying, and it caused something relevant (probably the package-lock.json file) to change!  This commit tracks that change.'
 echo 'Deploying as version:'  
 npm version patch  
 git push origin master  
 git push --tags  
 git branch -D predeploy
 git checkout -b predeploy  
 echo 'Now building+minifying assets for production...'  
 echo '(Hang tight, this could take a while.)'  
 node node_modules/grunt/bin/grunt buildProd 
 git add www  
 node -e 'sailsrc = JSON.parse(require(\"fs\").readFileSync(\"./.sailsrc\", \"utf8\"))
 git commit -am 'AUTOMATED COMMIT: Automatically bundling compiled assets as part of deploy, updating the EJS layout and .sailsrc file accordingly.'  
 git push origin predeploy  
 git checkout master  
 git push origin +predeploy:deploy  
 git push --tags  
 git branch -D predeploy  
 git push origin :predeploy  
 echo ''  
 echo '--'  
 echo 'OK, done.  It should be live momentarily on your staging environment.'  
 echo '(if you get impatient, check the Heroku dashboard for status)'  
 echo  
 echo 'Staging environment:'  
 echo ' ->  https://staging.example.com'  
 echo '       (hold ⌘ and click to open links in the terminal)'  
 echo  
 echo 'Please review that to make sure it looks good.'  
 echo 'When you are ready to go to production, visit your pipeline on Heroku and press the PROMOTE TO PRODUCTION button.'