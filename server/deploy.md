First of All make prod.env file
prisma deploy -e prod.env prod.ev --> path to file

Create heroku project and push yoga server to that
1 heroku login 2 commit the changes 3 create app heroku apps:create ebazar-yoga-prod-server 4 add git remote git remote add heroku-backend https://git.heroku.com/ebazar-yoga-prod-server.git 5 push git subtree push --prefix backend heroku-backend master 6 logs any errors heroku logs --tail --app ebazar-yoga-prod-server

Front End
1 set up prod endpoint in wthData do whole song and dance again but in frontend folder add "heroku-postbuild": "next build" in package and modify "start": "next start -p $PORT",