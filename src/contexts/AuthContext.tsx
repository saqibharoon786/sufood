import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Role = 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export type PageKey = 'dashboard' | 'terminal' | 'orders' | 'tables' | 'kitchen' | 'billing' | 'menu' | 'deals' | 'reports' | 'users';
export type ActionKey = 'apply_discount' | 'void_order' | 'edit_menu' | 'print_bill' | 'hold_order' | 'change_table_status';
export type DataKey = 'view_revenue' | 'view_all_orders' | 'view_reports' | 'view_staff';

export interface RolePermissions {
  pageAccess: PageKey[];
  actionPermissions: ActionKey[];
  dataVisibility: DataKey[];
}

export type PermissionsConfig = Record<Role, RolePermissions>;

const DEFAULT_PERMISSIONS: PermissionsConfig = {
  admin: {
    pageAccess: ['dashboard', 'menu', 'deals'],
    actionPermissions: ['edit_menu'],
    dataVisibility: ['view_reports'],
  },
};

const DEFAULT_USERS: User[] = [
  { id: '1', name: 'Super Admin', email: 'food@gmail.com', role: 'admin', avatar: '' },
];

const CREDENTIALS: Record<string, { password: string; userId: string }> = {
  'food@gmail.com': { password: '1234', userId: '1' },
};

interface AuthContextType {
  user: User | null;
  users: User[];
  permissions: PermissionsConfig;
  login: (email: string, password: string) => string | null;
  logout: () => void;
  hasPageAccess: (page: PageKey) => boolean;
  hasAction: (action: ActionKey) => boolean;
  hasDataAccess: (data: DataKey) => boolean;
  updatePermissions: (config: PermissionsConfig) => void;
  addUser: (user: Omit<User, 'id'>, password: string) => void;
  removeUser: (id: string) => void;
  currentPermissions: RolePermissions | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('sf_user');
    if (!saved) return null;
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.id && parsed.email && parsed.role) return parsed;
      localStorage.removeItem('sf_user');
      return null;
    } catch {
      localStorage.removeItem('sf_user');
      return null;
    }
  });

  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('sf_users');
    return saved ? JSON.parse(saved) : DEFAULT_USERS;
  });

  const [permissions, setPermissions] = useState<PermissionsConfig>(() => {
    const saved = localStorage.getItem('sf_permissions');
    return saved ? JSON.parse(saved) : DEFAULT_PERMISSIONS;
  });

  const [creds, setCreds] = useState<Record<string, { password: string; userId: string }>>(() => {
    const saved = localStorage.getItem('sf_creds');
    return saved ? JSON.parse(saved) : CREDENTIALS;
  });

  useEffect(() => {
    if (user) localStorage.setItem('sf_user', JSON.stringify(user));
    else localStorage.removeItem('sf_user');
  }, [user]);

  useEffect(() => { localStorage.setItem('sf_users', JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem('sf_permissions', JSON.stringify(permissions)); }, [permissions]);
  useEffect(() => { localStorage.setItem('sf_creds', JSON.stringify(creds)); }, [creds]);

  const login = (email: string, password: string): string | null => {
    const cred = creds[email.toLowerCase()];
    if (!cred || cred.password !== password) return 'Invalid email or password';
    const foundUser = users.find(u => u.id === cred.userId);
    if (!foundUser) return 'User not found';
    setUser(foundUser);
    return null;
  };

  const logout = () => setUser(null);

  const currentPermissions = user ? permissions[user.role] : null;

  const hasPageAccess = (page: PageKey) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return permissions[user.role].pageAccess.includes(page);
  };

  const hasAction = (action: ActionKey) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return permissions[user.role].actionPermissions.includes(action);
  };

  const hasDataAccess = (data: DataKey) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return permissions[user.role].dataVisibility.includes(data);
  };

  const updatePermissions = (config: PermissionsConfig) => setPermissions(config);

  const addUser = (newUser: Omit<User, 'id'>, password: string) => {
    // Admin-only build keeps API shape for compatibility.
    const id = Date.now().toString();
    const u = { ...newUser, id };
    setUsers(prev => [...prev, u]);
    setCreds(prev => ({ ...prev, [newUser.email.toLowerCase()]: { password, userId: id } }));
  };

  const removeUser = (id: string) => {
    const u = users.find(usr => usr.id === id);
    if (u) {
      setUsers(prev => prev.filter(usr => usr.id !== id));
      setCreds(prev => {
        const next = { ...prev };
        delete next[u.email.toLowerCase()];
        return next;
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, users, permissions, login, logout, hasPageAccess, hasAction, hasDataAccess, updatePermissions, addUser, removeUser, currentPermissions }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
}
