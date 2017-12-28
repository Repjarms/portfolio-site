FROM node:carbon

RUN git clone https://github.com/Repjarms/portfolio-site.git /root/portfolio-site
RUN cd /root/portfolio-site; npm i; npm run build;
EXPOSE 8015
CMD cd /root/portfolio-site; npm run build && NODE_ENV=production node server.js
