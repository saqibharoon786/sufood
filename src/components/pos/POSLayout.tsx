import { NavLink, Outlet, Link, Navigate } from 'react-router-dom';
import { LayoutDashboard, UtensilsCrossed, Tag, ArrowLeft, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth, type PageKey } from '@/contexts/AuthContext';

const allLinks: { to: string; icon: typeof LayoutDashboard; label: string; page: PageKey; end?: boolean }[] = [
  { to: '/pos', icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard', end: true },
  { to: '/pos/menu', icon: UtensilsCrossed, label: 'Dishes Upload', page: 'menu' },
  { to: '/pos/deals', icon: Tag, label: 'Deals Upload', page: 'deals' },
];

const roleBadge: Record<string, string> = {
  admin: 'bg-primary/20 text-primary-foreground',
};

export default function POSLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout, hasPageAccess } = useAuth();

  if (!user) {
    // Clear any stale data
    localStorage.removeItem('sf_user');
    return <Navigate to="/pos/login" replace />;
  }

  const visibleLinks = allLinks.filter(link => hasPageAccess(link.page));

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-56 bg-sidebar flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-bold text-sidebar-foreground">Shahinshah</Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-sidebar-foreground"><X className="w-5 h-5" /></button>
        </div>

        {/* User info */}
        <div className="px-3 pb-3">
          <div className="bg-sidebar-accent/50 rounded-xl p-3">
            <p className="text-sm font-medium text-sidebar-foreground truncate">{user.name}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold capitalize ${roleBadge[user.role]}`}>{user.role}</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto scrollbar-thin">
          {visibleLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50'
                }`
              }
            >
              <link.icon className="w-4 h-4 shrink-0" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-3 space-y-1">
          <Link to="/" className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Website
          </Link>
          <button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-destructive hover:bg-destructive/10 transition-all">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-foreground/30 z-40 lg:hidden" />}

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b border-border flex items-center justify-between px-4 shrink-0 bg-background/80 backdrop-blur-sm">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden mr-3 text-foreground">
              <Menu className="w-5 h-5" />
            </button>
            <span className="text-xs text-muted-foreground">Shahinshah Admin Panel</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline">{user.email}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold capitalize ${roleBadge[user.role]}`}>{user.role}</span>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
