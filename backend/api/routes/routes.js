const passport = require('passport');
const cors = require('cors');

const bot = require('../controllers/accountBotController');
const message = require('../controllers/messageController');
const account = require('../controllers/accountController');
const conversation = require('../controllers/conversationController');

const test = require('../controllers/testController');
// const teamInfo = require('../controllers/getTeamInfo');

const passportConfig = require('../../app/passport');
// const middleware = require('../common/middleware');

const corsOptions = {
  // origin: 'http://localhost:3000',
  // origin: 'http://www.mynutricard.com',
  // methods: 'GET, POST, HEAD, PUT, PATCH, DELETE',
  // preflightContinue: false,
  credentials: true,
};

module.exports = app => {
  app.use(cors(corsOptions));
  app.use(passport.initialize());
  // app.route('/sendMessage').post(messageController.sendMessage);
  app.route('/auth/bot').get(bot.botAccount);
  app.route('/auth/login').get(account.login);
  app.route('/receiveMessage').get(message.receiveMessage);
  app.route('/auth/account').get(account.createUserAccount);
  // conversations
  app.route('/conversation/create').post(conversation.createConversation);
  app.route('/conversation/delete').post(conversation.deleteConversation);
  app.route('/conversation/all').post(conversation.allConversations);
  app.route('/conversation/edit').post(conversation.editConversation);
  app.route('/conversation/respond').post(conversation.respondToConversation);
};
