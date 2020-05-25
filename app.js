const media = [
  {
    title: 'Winds of Winter',
    description: 'Poetry Book',
    type: 'book',
    contributor: 'Dr. Abdi',
    showDetail: false,
  },
  {
    title: 'Golden Shrimp',
    description: 'just a simple film',
    type: 'DVD',
    contributor: '',
    showDetail: false,
  },
  {
    title: 'Saadi',
    description: 'a short documentary',
    type: 'short clip',
    contributor: 'Lebron',
    showDetail: false,
  },
  {
    title: 'I am okay with it!',
    description: 'a novel for teenagers',
    type: 'book',
    contributor: 'James Foley',
    showDetail: false,
  },
  {
    title: 'Never trust a stone!',
    description: 'irrational speech',
    type: 'DVD',
    contributor: 'Yas',
    showDetail: false,
  },
  {
    title: 'River of the Gold!',
    description: 'advertisement clip',
    type: 'short clip',
    contributor: '',
    showDetail: false,
  },
  {
    title: 'Nebraska!',
    description: 'try it!',
    type: 'DVD',
    contributor: 'Natasha',
    showDetail: false,
  },
  {
    title: 'John Strong!',
    description: 'a short story about turtles',
    type: 'book',
    contributor: 'Dmitri',
    showDetail: false,
  },
];

new Vue({
  el: '#media-list',
  data: {
    title: 'My media collection',
    mediaList: media,
  },

  computed: {
    uniqueItemsList: function () {
      const types = [];
      this.mediaList.forEach((item) => {
        if (!types.includes(item.type)) {
          types.push(item.type);
        }
      });
      return types;
    },
  },
});
