import React from 'react';

export const Title = ({name}) => {
  return (
      <label htmlFor={`${name}`}
             className="block text-lg font-medium text-gray-900 dark:text-white">
        {name}
      </label>
  );
}
