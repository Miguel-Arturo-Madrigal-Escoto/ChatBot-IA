
import { ImageChatBot } from '../components/ImageChatBot';
import { JokeChatBot } from '../components/JokeChatBot';
import { QuoteChatBot } from '../components/QuoteChatBot';

import '../styles/img-chat.css';


export let steps = [
      {
          id: '1',
          message: 'What is your name?',
          trigger: '2',
      },
      {
          id: '2',
          user: true,
          trigger: '3',
      },
      {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you, what would you like to do?',
          trigger: '4',
      },
      {
        id: '4',
        options: [
          { value: 8, label: 'Disconnect', trigger: '8' },
          { value: 7, label: 'Quote', trigger: '7' },
          { value: 6, label: 'Joke', trigger: '6' },
          { value: 5, label: 'Image', trigger: '5' },
   
        ],
      },
      {
        id: '5',
        component: <ImageChatBot  img={ `https://picsum.photos/200/300?`} />,
        trigger: '4',
      },
      {
        id: '6',
        component: <JokeChatBot  img={ `https://picsum.photos/200/300?a`} />,
        trigger: '4',
      },
      {
        id: '7',
        component: <QuoteChatBot  />,
        trigger: '4',
      },
      {
        id: '8',
        message: 'Good bye. Greetings from Vostok1Apolo11, Sarahx3 and 2KMiguel64',
        end: true,
      },
  ]


