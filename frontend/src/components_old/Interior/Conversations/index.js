//Alex Cassell
//http://alexcassell.com
//conversations index

import React from 'react';
import { Button } from 'semantic-ui-react';
import { v4 } from 'uuid'; //creates unique keys

import '../../../css/conversations.css';
import '../../../css/cards.css';
// import '../../../Semantic-UI-CSS/semantic.min.css';

// import New from './NewConversation/index';
let dataArray = [];
let conversationsArrayPosition = 0; //exported variable that keeps track of which conversation is to be opened for edit.

// dummy info//will fill in from server//all conversation data will be saved here more properties than shown
let conversationsArray = [
  //when data is imported it will be converted from bools to Days as shown here
  {
    name: 'Stand Up CS1',
    time: '12:20 AM',
    schedule: 'Mon, Tues, Fri',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '1some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS2',
    time: '12:21 AM',
    schedule: 'Mon, Wed, Fri',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '2some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'red',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS3',
    time: '12:22 AM',
    schedule: 'Mon, Fri',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '3some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'ded',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS4',
    time: '12:23 AM',
    schedule: 'Mon, Wed',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '4some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'bed',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS5',
    time: '12:24 AM',
    schedule: 'Tues, Fri',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '5some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'head',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS6',
    time: '12:25 AM',
    schedule: 'Tues',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '6some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS7',
    time: '12:26 AM',
    schedule: 'Fri',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '7some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS8',
    time: '12:27 AM',
    schedule: 'Mon',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '8some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS9',
    time: '12:28 AM',
    schedule: 'Mon, Thur',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '9some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS10',
    time: '12:29 AM',
    schedule: 'Thur',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '10some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS11',
    time: '12:30 AM',
    schedule: 'Wed',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '11some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS12',
    time: '12:31 AM',
    schedule: 'Mon',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '12some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS13',
    time: '12:32 AM',
    schedule: 'Tues, Fri',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '13some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
  {
    name: 'Stand Up CS14',
    time: '12:33 AM',
    schedule: 'Mon, Fri',
    created: '21st of January 2018',
    timeZone: 'loaded time zone',
    post: 'channel Zero',
    questions: [
      '14some silly question',
      'some sillier question',
      'a question that makes sense',
      'Another perfectly correct questions',
      'A question that might get you sued',
      'What is it about planes?',
    ],
    participants: [
      [
        {
          userName: 'fred',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Jorge',
          responseTime: '10:17:AM',
          responseDate: '04-12-2018',
          imageData: {},
          answers: [
            'Yup',
            'nope',
            'could be',
            'yea probably',
            'who knows',
            'I did not hear that',
          ],
        },
        {
          userName: 'Fran',
          responseTime: '09:37:AM',
          responseDate: '02-22-2018',
          imageData: {},
          answers: [
            'hotdog',
            'tacos then?',
            'pizza is almost certainly true',
            'with pineapples of course',
            'and mayonnaise',
            'No I am not sick',
          ],
        },
        {
          userName: 'Jules',
          responseTime: '12:27:PM',
          responseDate: '01-11-2017',
          imageData: {},
          answers: [
            'A river of denile',
            'Panda bears',
            'are true bears',
            'even though that is against the myth',
            'that mice',
            'mine cheese',
          ],
        },
        {
          userName: 'Bobby',
          responseTime: '1:07:PM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'windshield wipers slapping time',
            'for one single day with',
            'just another word for nothing left to lose',
            'Kris did it best',
            'rusty harpoon and red bandanas',
            'people',
          ],
        },
        {
          userName: 'Dan',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
        {
          userName: 'Cindy',
          responseTime: '10:07:AM',
          responseDate: '03-12-2018',
          imageData: {},
          answers: [
            'Yes, I loved',
            'That was the worst thing I have ever done',
            'I cam a dog person, cats scare me',
            'This is probably tree',
            'I want to press charges',
            'The sky is blue and so is the water',
          ],
        },
      ],
    ],
  },
];

let endCard;
let cardArray = [];
let editClicked = false; //dev only will be false

class ConversationsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { conversationsArrayEmpty: true };
    this.state = { displayArray: cardArray };
    this.state = {
      areYouSure: (
        <div>
          <div className="conversations__greyedOut" />
          <div className="conversations__areYouSure">
            <div className="conversations__areYouSureTitle">Are you sure?</div>
            <div className="conversations__areYouSureButtonWrapper">
              <Button color="green" onClick={e => this.handleEdit(e)}>
                No
              </Button>
              <Button color="red">Yes</Button>
            </div>
          </div>
        </div>
      ),
    };
  }

  componentWillMount() {
    // frontend
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search.slice(1));
    const id = params.get('doc_id');
    localStorage.setItem('doc_id', id);
    editClicked = false;
    console.log(editClicked);
    //load data from the server fill in conversationsArray with objects
    //full of the conversation's data
    if (conversationsArray[0] !== undefined) {
      this.setState({ conversationsArrayEmpty: false });
    } else {
      this.setState({ conversationsArrayEmpty: true });
    }
    // this.setState({conversationsArrayEmpty: true}); //this is dev only

    endCard = (
      <div key={v4()} className="cardWrap">
        <div
          className="ui card"
          onClick={() => this.handleNewConversationButton()}
        >
          <div className="converations__createNew">
            <div className="converations__createNew__header">
              Add New Conversation
            </div>
            <i className="converations__createNew__icon plus circle icon fa-5" />
          </div>
        </div>
      </div>
    );
    this.handleDisplayCards();
  }
  //saves conversation object data into an array
  handleDisplayCards() {
    cardArray = [];
    for (let i = 0; i < conversationsArray.length; i++) {
      this.setState({ displayArray: [] });
      cardArray[i] = (
        <div key={v4()} className="cardWrap">
          <div className="ui card">
            <div className="content">
              <button
                name={i}
                className="right floated"
                onClick={e => this.handleView(e)}
              >
                <i className="folder open icon" />
              </button>
              <button
                name={i}
                className="right floated"
                onClick={e => this.handleEdit(e)}
              >
                <i className="edit icon" />
              </button>
              <button
                name={i}
                className="right floated"
                onClick={e => this.handleDelete(e)}
              >
                <i className="trash icon" />
              </button>
              <div className="card__header">
                {(dataArray[[i[0]]] = conversationsArray[i].name)}
              </div>
              <div className="description">
                <div className="cards__time">
                  <span className="cards__titles">Time: </span>
                  {(dataArray[[i[1]]] = conversationsArray[i].time)}
                </div>
                <div className="cards__schedule">
                  <span className="cards__titles">Schedule: </span>
                  {(dataArray[[i[2]]] = conversationsArray[i].schedule)}
                </div>
                <div className="cards__created">
                  <span className="cards__titles">Created: </span>
                  {(dataArray[[i[3]]] = conversationsArray[i].created)}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      this.setState({ displayArray: cardArray });
    }
    cardArray.unshift(endCard);
  }

  handleNewConversationButton() {
    editClicked = false;
    this.props.history.push('/conversations/new');
  }

  handleEdit(e) {
    editClicked = true;
    conversationsArrayPosition = e.currentTarget.name;
    this.props.history.push('/conversations/edit');
    console.log('Edit');
  }

  handleView(e) {
    editClicked = true;
    conversationsArrayPosition = e.currentTarget.name;
    this.props.history.push('/conversations/view');
  }

  handleDelete(e) {
    conversationsArray.splice(e.currentTarget.name, 1);
    cardArray = [];
    this.handleDisplayCards();
  }

  handleDeleteYes(e) {}

  render() {
    const conversationsArrayEmpty = this.state.conversationsArrayEmpty;
    const button = conversationsArrayEmpty ? (
      <div className="conversation__add">
        Add a new Conversation <br />
        <button
          onClick={() => this.handleNewConversationButton()}
          className="conversation__addButton"
        >
          <i className="plus circle icon" />
        </button>
      </div>
    ) : (
      <div className="cards__flexWrapper">
        {this.state.displayArray}
        {/* {this.state.areYouSure} */}
      </div>
    );
    return (
      <div className="conversations__wrapper">
        <div className="conversations__scroll">{button}</div>
      </div>
    );
  }
}

export default ConversationsIndex;
export { conversationsArray };
export { conversationsArrayPosition };
export { editClicked };