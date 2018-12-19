const Technology = require('./../models/technology');

const insertTechnologies = () => {
  const technologies = [
    {
      name: 'express',
      image: 'https://png2.kisspng.com/sh/7f82f64ea4ecb805fca9096ee82be9f9/L0KzQYm3VsA1N5DnjpH0aYP2gLBuTgdmal5pfehubHBzfbb1lL1mgKF3feV8LXr2PbvolvF0a6NuiOY2c3BphMjokvUubqNmRdh7YX3oPcj2kvsuPZM2TaMAM3S1RLW6hsYvQWI4S6M8M0C0RYOBUcA5O2UASac5OT7zfri=/kisspng-web-development-express-js-javascript-software-fra-frame-work-5b15153d24d3f6.9133133015281083491509.png',
      resources: [{
        text: 'express documentation',
        url: 'https://expressjs.com/',
      },
      {
        text: 'express in action book',
        url: 'https://cdn.discordapp.com/attachments/491502812090466304/521288671358353408/Evan_M._Hahn-Express_in_Action__Writing_building_and_testing_Node.js_applications-Manning_2016.pdf',
      },
      {
        text: 'web development with node & express',
        url: 'http://www.vanmeegern.de/fileadmin/user_upload/PDF/Web_Development_with_Node_Express.pdf',
      }],
    },
    {
      name: 'mongodb',
      image: 'http://pluspng.com/img-png/mongodb-png--400.png',
      resources: [
        {
          text: 'mongodb documentation',
          url: 'https://www.mongodb.com/',
        },
        {
          text: 'mongoose documentation',
          url: 'https://mongoosejs.com/',
        },
        {
          text: 'mongodb tutorial book',
          url: 'https://www.tutorialspoint.com/mongodb/mongodb_tutorial.pdf',
        },
        {
          text: 'the little mongodb book',
          url: 'https://openmymind.net/mongodb.pdf',
        },
      ],
    },
    {
      name: 'react',
      image: 'https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png',
      resources: [
        {
          text: 'react documentation',
          url: 'https://reactjs.org/',
        },
        {
          text: '30 days of react book',
          url: 'https://www.fullstackreact.com/assets/media/sGEMe/MNzue/30-days-of-react-ebook-fullstackio.pdf',
        },
      ],
    },
    {
      name: 'node',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png',
      resources: [
        {
          text: 'node documentation',
          url: 'https://nodejs.org/en/docs/',
        },
        {
          text: 'node in action book',
          url: 'http://sd.blackball.lv/library/Node.js_in_Action_(2014).pdf',
        },
      ],
    },
    {
      name: 'devops',
      image: 'https://cdn-images-1.medium.com/max/2000/1*EBXc9eJ1YRFLtkNI_djaAw.png',
    },
  ];
  return Technology.insertMany(technologies);
};

module.exports = insertTechnologies;
