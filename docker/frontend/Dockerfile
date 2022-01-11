FROM nginx:1.20

WORKDIR /www/frontend

RUN apt-get update && apt-get install -y curl gnupg
RUN ls

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN npm install gulp-cli -g
RUN npm install gulp -D
