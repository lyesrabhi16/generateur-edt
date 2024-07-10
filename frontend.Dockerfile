FROM node:22.4

RUN mkdir -p /home/AGEMP

COPY ./frontend /home/AGEMP/frontend
COPY ./constants.js /home/AGEMP/constants.js
COPY ./package.json /home/AGEMP/package.json
COPY ./package-lock.json /home/AGEMP/package-lock.json
COPY ./node_modules /home/AGEMP/node_modules

WORKDIR /home/AGEMP

CMD ["npm", "run", "frontend"]