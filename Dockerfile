FROM nginx
RUN mkdir /app
COPY ../vql /app
COPY nginx.conf /etc/nginx/nginx.conf
