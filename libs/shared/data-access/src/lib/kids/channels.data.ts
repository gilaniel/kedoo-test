import { KidsChannel } from '@kedoo/shared/utils-interfaces';

export const channels: KidsChannel[] = [
  {
    name: 'Super Toons TV',
    img: '/kids/channels/channel-1.png',
    preview: 'https://drive.google.com/file/d/1WmmtvoumoiKlazJ9svIvzH8W0n0tAT0n/view?usp=sharing',
    isReady: true,
    description: 'Watch, smile and giggle! We bring you the best animation shows!',
    video: '/kids/channels/st.mp4',
  },
  // {
  //   name: 'Toon Mania',
  //   img: '/kids/channels/channel-2.png',
  //   preview: '',
  //   isReady: true,
  //   description: 'Home of Masha and the Bear',
  // },
  {
    name: 'Super Toons App',
    img: '',
    preview: '',
    isReady: false,
    description: '',
    video: '',
  },
];
