import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
interface BreadcrumbProps {
  items: {
    label: string;
    path?: string;
  }[];
}
export function Breadcrumb({
  items
}: BreadcrumbProps) {
  return <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 overflow-x-auto whitespace-nowrap pb-2">
      <Link to="/" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
        <Home size={16} />
      </Link>
      {items.map((item, index) => <Fragment key={index}>
          <ChevronRight size={14} className="mx-2 flex-shrink-0" />
          {item.path ? <Link to={item.path} className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
              {item.label}
            </Link> : <span className="text-orange-600 dark:text-orange-500 font-medium">
              {item.label}
            </span>}
        </Fragment>)}
    </nav>;
}