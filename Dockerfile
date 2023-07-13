
FROM nginx:1.15-apline
COPY ./dist /etc/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /etc/nginx/html
