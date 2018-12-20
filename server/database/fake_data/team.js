const Team = require('../models/team');
const Technology = require('../models/technology');

module.exports = () => new Promise((resolve, reject) => {
  Technology.find({ $or: [{ name: 'express.js' }, { name: 'mongoDB' }, { name: 'react.js' }, { name: 'node.js' }, { name: 'devOps' }] })
    .then((technologies) => {
      const technologiesIds = technologies.map(tech => tech.id);
      resolve(Team.insertMany([
        { name: 'G4-AFAR', technologies: technologiesIds },
        { name: 'ILA', echnologies: technologiesIds },
        { name: 'KMA', echnologies: technologiesIds },
      ]));
    }).catch(reject);
});
