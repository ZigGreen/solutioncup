const buildPathInGroup = (groupPath: string, endpoint: string) => {
  return groupPath + '/' + endpoint;
};

export const endpoints = {
  base: {
    url: '/',
    title: 'Главная',
  },
  login: {
    url: '/login',
    title: 'Авторизация',
  },
  expenses: {
    url: '/expenses',
    title: 'Расходы',
  },
  categories: {
    url: '/categories',
    title: 'Категории расходов',
  },
  history: {
    url: '/history',
    title: 'История расходов',
  },
};
