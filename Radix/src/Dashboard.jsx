import React from 'react';
import AppMenu from './menu';
import AppPopover from './popover';
import AppCard from './Card';
import AppTable from './Table';
import AppTabs from './Tabs';
import { Overview } from './overview';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <AppMenu />
      </header>
      <AppPopover />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <AppCard title="Card 1">
          <p>Content for card 1.</p>
        </AppCard>
        <AppCard title="Card 2">
          <p>Content for card 2.</p>
        </AppCard>
        <AppCard title="Card 3">
          <p>Content for card 3.</p>
        </AppCard>
        <AppCard title="Card 4">
          <p>Content for card 4.</p>
        </AppCard>
      </div>
      <div className="mt-8">
        <AppTabs />
      </div>
      <div className="mt-8">
        <Overview />
      </div>
      <div className="mt-8">
        <AppTable />
      </div>
    </div>
  );
}

export default Dashboard;
