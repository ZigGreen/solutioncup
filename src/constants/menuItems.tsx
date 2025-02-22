import { endpoints } from './endpoints';
import { PERMISSIONS } from './permissions';
import { IMenu } from 'types/global/IMenu';

export const menuItems: IMenu[] = [
  {
    title: endpoints.expenses.title,
    to: endpoints.expenses.url,
    permissions: [PERMISSIONS.EXPENSE.READ],
    sort: 1,
  },
  {
    title: endpoints.categories.title,
    to: endpoints.categories.url,
    permissions: [PERMISSIONS.CATEGORIES.READ],
    sort: 2,
  },
  {
    title: endpoints.history.title,
    to: endpoints.history.url,
    permissions: [PERMISSIONS.EXPENSE.READ],
    sort: 3,
  },
];
