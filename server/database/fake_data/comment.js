const Comment = require('./../models/comment');
const Technology = require('./../models/technology');
const User = require('./../models/user');

const insertComments = async () => {
  // get 'express' and 'Mongo' Technology
  const technologies = await Technology.find({});
  const express = technologies[0];
  const mongodb = technologies[1];

  // get user
  const users = await User.find();
  const RamyAlshurafa = users[0];
  const FarahZaqout = users[2];
  const HemaSAli = users[6];
  const MohammedYehia = users[8];

  const comments = [
    {
      description: 'Express learning goals look good',
      user: MohammedYehia,
      technology: express,
    },
    {
      description: 'I suggest to add more goals for MongoDB, please comment below with some topics you feel we need to learn it',
      user: FarahZaqout,
      Technology: mongodb,
      subComments: [
        {
          description: 'I think we should add "aggregation" operator',
          user: RamyAlshurafa,
        },
        {
          description: 'I highly recommend to learn about "subdocument" manipulation',
          user: HemaSAli,
        },
        {
          description: 'I agree with both of you on these topics',
          user: MohammedYehia,
        },
      ],
    },
  ];

  return Comment.insertMany(comments);
};

module.exports = insertComments;
