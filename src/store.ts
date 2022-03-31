import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      isAdmin: true,
      reg: false,
      log: true,
      st: false,
      nikLog: 'Vasia',
      nikpass: '12345',
      userlog: '',
      userpass: '',
      creatSt: false,
      treeData: {
        name: 'Меню',
        children:[
       {name: 'Блоки', children:[
          {name: 'Камень'},
          {name: 'Дерево'},
        ]},
        {name: 'Броня', children:[
          {name: 'Железный нагрудник'},
          {name: 'Кожанный шлем'},
        ]},
        {name: 'Еда', children:[
          {name: 'Хлеб'},
          {name: 'Яблоко'},
        ]},
        {name: 'Оружие', children:[
          {name: 'Меч'},
        ]},
         {name: 'Инструменты', children:[
          {name: 'Факел'},
          {name: 'Ножницы'},
          {name: 'Кирка'},
        ]},
         {name: 'Зелья', children:[
          {name: 'Зелье ночного зрения'},
          {name: 'Зелья лечения'},
        ]},
        {name: 'Материалы', children:[
          {name: 'Железо'},
          {name: 'Золото'},
          {name: 'Алмазы'},
          {name: 'Красная пыль'},
          {name: 'Лазурит'},
          {name: 'Доски'},
          {name: 'Кожа'},
        ]},
         {name: 'Мобы', children:[
          {name: 'Лошадь'},
          {name: 'Зомби'},
        ]}
      ]
      }




        }
  }
})
