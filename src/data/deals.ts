export interface DealItem {
  id: string;
  title: string;
  persons: number;
  price: number;
  description: string;
  includes: string;
  image: string;
  active: boolean;
}

export const DEALS_STORAGE_KEY = 'sf_deals_items';

export const defaultDeals: DealItem[] = [
  {
    id: 'deal-2-person',
    title: '2 Person Deal',
    persons: 2,
    price: 1499,
    description: 'Perfect combo for couples or friends.',
    includes: '1 Biryani + 1 BBQ Platter + 2 Drinks',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700',
    active: true,
  },
  {
    id: 'deal-4-person',
    title: '4 Person Deal',
    persons: 4,
    price: 2899,
    description: 'Family style deal with full taste variety.',
    includes: '2 Curries + 1 Rice + 4 Naan + 4 Drinks',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700',
    active: true,
  },
  {
    id: 'deal-6-person',
    title: '6 Person Deal',
    persons: 6,
    price: 4199,
    description: 'Best value for teams and gatherings.',
    includes: '2 Biryani + 1 BBQ Mix + 2 Curries + 6 Drinks',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700',
    active: true,
  },
];

export const getStoredDeals = () => {
  const stored = localStorage.getItem(DEALS_STORAGE_KEY);
  if (!stored) return defaultDeals;
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : defaultDeals;
  } catch {
    return defaultDeals;
  }
};
