const mongoose = require('mongoose');
const buildFakeData = require('../../database/fake_data');
const Comment = require('../../database/models/comment');
const User = require('../../database/models/user');


describe('testing for Comment schema', () => {
  beforeEach(async () => {
    await buildFakeData();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('test for Comment collection', async () => {
    // Comment and User schema must be defined
    expect(Comment).toBeDefined();
    expect(User).toBeDefined();

    // get FarahZaqout and MohammedYehia
    const users = await User.find({ $or: [{ githubHandler: 'FarahZaqout' }, { githubHandler: 'MohammedYehia' }] });
    const FarahZaqout = users[0];
    const MohammedYehia = users[1];

    // find all comments
    const allComments = await Comment.find({});
    const firstComment = allComments[0];
    const secondComment = allComments[1];


    // we have 2 comments
    expect(allComments.length).toBe(2);


    // test for first comment
    expect(firstComment).toBeDefined();
    expect(firstComment.user.toString()).toBe(MohammedYehia.id);
    expect(firstComment.subComments.length).toBe(0);


    // test for second comment
    expect(secondComment).toBeDefined();
    expect(secondComment.user.toString()).toBe(FarahZaqout.id);
    expect(secondComment.subComments.length).toBe(3);
  });
});
