export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  available: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  type: 'dine-in' | 'takeaway' | 'delivery';
  status: 'pending' | 'preparing' | 'ready' | 'completed';
  table?: number;
  total: number;
  tax: number;
  subtotal: number;
  discount: number;
  notes: string;
  createdAt: string;
  customerName?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes: string;
}

export interface TableInfo {
  id: number;
  name: string;
  seats: number;
  status: 'available' | 'occupied' | 'reserved';
  currentOrder?: string;
}

export const menuCategories = ['All', 'Biryani & Rice', 'BBQ & Tikka', 'Curries', 'Roti & Naan', 'Snacks', 'Drinks', 'Desserts'];

export const menuItems: MenuItem[] = [
  // Biryani & Rice
  { id: '1', name: 'Chicken Biryani', price: 350, category: 'Biryani & Rice', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', description: 'Aromatic basmati rice with tender chicken and spices', available: true },
  { id: '2', name: 'Mutton Biryani', price: 450, category: 'Biryani & Rice', image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400', description: 'Rich mutton biryani with saffron and signature spices', available: true },
  { id: '3', name: 'Chicken Pulao', price: 300, category: 'Biryani & Rice', image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400', description: 'Light and flavorful chicken pulao with whole spices', available: true },
  { id: '4', name: 'Daal Chawal', price: 200, category: 'Biryani & Rice', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', description: 'Classic lentils with steamed basmati rice and tempering', available: true },
  
  // BBQ & Tikka
  { id: '5', name: 'Chicken Tikka', price: 400, category: 'BBQ & Tikka', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400', description: 'Juicy charcoal grilled chicken tikka pieces', available: true },
  { id: '6', name: 'Seekh Kebab', price: 350, category: 'BBQ & Tikka', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400', description: 'Spiced minced meat kebabs grilled on skewers', available: true },
  { id: '7', name: 'Chapli Kebab', price: 300, category: 'BBQ & Tikka', image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', description: 'Peshawari style flat meat patties with herbs', available: true },
  { id: '8', name: 'BBQ Platter', price: 1200, category: 'BBQ & Tikka', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', description: 'Mixed BBQ platter with tikka, kebab, and chops', available: true },
  
  // Curries
  { id: '9', name: 'Chicken Karahi', price: 600, category: 'Curries', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', description: 'Spicy tomato-based chicken karahi with green chilies', available: true },
  { id: '10', name: 'Nihari', price: 500, category: 'Curries', image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400', description: 'Slow-cooked beef nihari served with naan', available: true },
  { id: '11', name: 'Haleem', price: 350, category: 'Curries', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', description: 'Rich lentil and meat stew garnished with fried onions', available: true },
  { id: '12', name: 'Mixed Sabzi', price: 180, category: 'Curries', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400', description: 'Seasonal mixed vegetable curry with masala', available: true },
  
  // Roti & Naan
  { id: '13', name: 'Tandoori Naan', price: 30, category: 'Roti & Naan', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', description: 'Fresh tandoor baked naan bread', available: true },
  { id: '14', name: 'Paratha', price: 50, category: 'Roti & Naan', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400', description: 'Layered flaky paratha with butter', available: true },
  
  // Snacks
  { id: '15', name: 'Egg Sandwich', price: 150, category: 'Snacks', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400', description: 'Crispy egg sandwich with fresh veggies', available: true },
  
  // Drinks
  { id: '16', name: 'Milk Tea', price: 80, category: 'Drinks', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400', description: 'Strong and creamy traditional milk tea', available: true },
  { id: '17', name: 'Mango Lassi', price: 120, category: 'Drinks', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400', description: 'Creamy mango yogurt drink', available: true },
  
  // Desserts
  { id: '18', name: 'Gulab Jamun', price: 100, category: 'Desserts', image: 'https://images.unsplash.com/photo-1666190094762-cb518995845d?w=400', description: 'Sweet fried dumplings in sugar syrup', available: true },
  { id: '19', name: 'Kheer', price: 150, category: 'Desserts', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400', description: 'Creamy rice pudding with cardamom and nuts', available: true },
];

export const tables: TableInfo[] = [
  { id: 1, name: 'Table 1', seats: 2, status: 'available' },
  { id: 2, name: 'Table 2', seats: 2, status: 'occupied', currentOrder: 'ORD-001' },
  { id: 3, name: 'Table 3', seats: 4, status: 'available' },
  { id: 4, name: 'Table 4', seats: 4, status: 'reserved' },
  { id: 5, name: 'Table 5', seats: 6, status: 'occupied', currentOrder: 'ORD-002' },
  { id: 6, name: 'Table 6', seats: 6, status: 'available' },
  { id: 7, name: 'Table 7', seats: 8, status: 'available' },
  { id: 8, name: 'Table 8', seats: 4, status: 'occupied', currentOrder: 'ORD-003' },
  { id: 9, name: 'VIP 1', seats: 10, status: 'reserved' },
  { id: 10, name: 'VIP 2', seats: 12, status: 'available' },
];

export const sampleOrders: Order[] = [
  {
    id: 'ORD-001', type: 'dine-in', status: 'preparing', table: 2,
    items: [
      { menuItem: menuItems[0], quantity: 1, notes: '' },
      { menuItem: menuItems[15], quantity: 2, notes: 'Extra strong' },
    ],
    subtotal: 510, tax: 51, discount: 0, total: 561, notes: '', createdAt: new Date().toISOString(),
  },
  {
    id: 'ORD-002', type: 'dine-in', status: 'pending', table: 5,
    items: [
      { menuItem: menuItems[8], quantity: 1, notes: '' },
      { menuItem: menuItems[12], quantity: 4, notes: '' },
    ],
    subtotal: 720, tax: 72, discount: 50, total: 742, notes: 'Family dinner', createdAt: new Date().toISOString(),
  },
  {
    id: 'ORD-003', type: 'takeaway', status: 'ready',
    items: [
      { menuItem: menuItems[0], quantity: 2, notes: 'Extra spicy' },
      { menuItem: menuItems[4], quantity: 1, notes: '' },
    ],
    subtotal: 1100, tax: 110, discount: 0, total: 1210, notes: '', createdAt: new Date().toISOString(), customerName: 'Ali Bhai',
  },
];

export const dailySalesData = [
  { hour: '9AM', sales: 1200 }, { hour: '10AM', sales: 2800 },
  { hour: '11AM', sales: 4500 }, { hour: '12PM', sales: 8900 },
  { hour: '1PM', sales: 10200 }, { hour: '2PM', sales: 6800 },
  { hour: '3PM', sales: 4200 }, { hour: '4PM', sales: 3500 },
  { hour: '5PM', sales: 5200 }, { hour: '6PM', sales: 7800 },
  { hour: '7PM', sales: 11500 }, { hour: '8PM', sales: 9800 },
];

export const weeklySalesData = [
  { day: 'Mon', revenue: 24000 }, { day: 'Tue', revenue: 18900 },
  { day: 'Wed', revenue: 32000 }, { day: 'Thu', revenue: 27800 },
  { day: 'Fri', revenue: 41000 }, { day: 'Sat', revenue: 52000 },
  { day: 'Sun', revenue: 48000 },
];

export const topSellingItems = [
  { name: 'Chicken Biryani', sold: 245, revenue: 85750 },
  { name: 'Chicken Karahi', sold: 198, revenue: 118800 },
  { name: 'Chicken Tikka', sold: 176, revenue: 70400 },
  { name: 'Nihari', sold: 134, revenue: 67000 },
  { name: 'Daal Chawal', sold: 210, revenue: 42000 },
];

export const testimonials = [
  { name: 'Ahmed Khan', rating: 5, text: 'SU Food handles our office lunches professionally. Food quality and consistency are excellent.', avatar: 'AK' },
  { name: 'Fatima Sheikh', rating: 5, text: 'Our call center has daily meal plans from SU Food. Delivery is always on time and well packed.', avatar: 'FS' },
  { name: 'Usman Ali', rating: 4, text: 'We booked SU Food for a company event and the BBQ setup was smooth and well managed.', avatar: 'UA' },
  { name: 'Zainab Malik', rating: 5, text: 'Great corporate catering partner in Islamabad with responsive support and flexible menu options.', avatar: 'ZM' },
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600',
  'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600',
  'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=600',
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=600',
  'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600',
  'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600',
  'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600',
  'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600',
];
