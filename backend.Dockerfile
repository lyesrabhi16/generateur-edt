FROM node:22.4

RUN mkdir -p /home/AGEMP

COPY ./backend /home/AGEMP/backend
COPY ./constants.js /home/AGEMP/constants.js
COPY ./package.json /home/AGEMP/package.json
COPY ./package-lock.json /home/AGEMP/package-lock.json

WORKDIR /home/AGEMP

CMD ["npm", "run", "backend"]