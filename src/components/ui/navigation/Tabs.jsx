import { useState } from 'react';
import { cn } from '../../../utils/helpers';

const Tabs = ({ defaultValue, children, className = '', ...props }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={cn('w-full', className)} {...props}>
      {children.map((child) => {
        if (child.type === TabsList) {
          return <child.type key="list" {...child.props} activeTab={activeTab} onTabChange={setActiveTab} />;
        }
        if (child.type === TabsContent) {
          return child.props.value === activeTab ? <child.type key={child.props.value} {...child.props} /> : null;
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ children, activeTab, onTabChange, className = '', ...props }) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-lg bg-[var(--color-bg-tertiary)] p-1',
        className
      )}
      {...props}
    >
      {children.map((child) => (
        <button
          key={child.props.value}
          onClick={() => onTabChange(child.props.value)}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-md transition-all duration-200',
            activeTab === child.props.value
              ? 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] shadow-sm'
              : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
          )}
        >
          {child.props.children}
        </button>
      ))}
    </div>
  );
};

const TabsContent = ({ children, className = '', ...props }) => {
  return (
    <div className={cn('mt-4', className)} {...props}>
      {children}
    </div>
  );
};

const Tab = ({ children, value }) => ({ children, value });

Tabs.List = TabsList;
Tabs.Content = TabsContent;
Tabs.Tab = Tab;

export default Tabs;
