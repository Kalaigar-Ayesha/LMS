import React from 'react';
import { clsx } from 'clsx';

interface ProgressBarProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'yellow' | 'red';
  showLabel?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  size = 'md',
  color = 'blue',
  showLabel = true,
  className
}) => {
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600'
  };

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
      )}
      <div className={clsx(
        'w-full bg-gray-200 dark:bg-gray-700 rounded-full',
        sizeClasses[size]
      )}>
        <div
          className={clsx(
            'rounded-full transition-all duration-300 ease-in-out',
            colorClasses[color],
            sizeClasses[size]
          )}
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;