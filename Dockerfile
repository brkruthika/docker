from ubuntu:16.04

RUN apt-get update
RUN apt-get install curl -y 
RUN apt-get install gnupg2 -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install nodejs -y
RUN /usr/bin/npm install -g n
RUN /usr/bin/n 6.15.1

COPY docker /code

CMD rm -rf node_modules package-lock.json && \
	/usr/bin/npm install && \
    sleep 5 && \
    node app.js
