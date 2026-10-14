import React, { useState } from 'react';
import { navMenu } from '../../../data/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const HeaderNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className='flex gap-8 justify-between items-center'>
      <div className='flex gap-4 xl:gap-6'>
        {navMenu.map((item) => {
          if (item.children?.length) {
            const isOpen = openDropdown === item.name;
            return (
              <div
                key={item.name}
                className='relative text-black font-bold whitespace-nowrap text-sm xl:text-base'
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type='button'
                  className='inline-flex items-center gap-1'
                  aria-expanded={isOpen}
                  aria-haspopup='true'
                  onClick={() =>
                    setOpenDropdown(isOpen ? null : item.name)
                  }
                >
                  {item.name}
                  <ChevronDownIcon
                    className={`h-3.5 w-3.5 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className='absolute left-0 top-full z-50 min-w-[8.5rem] pt-2'>
                    <div className='rounded-lg border border-neutral-200 bg-white py-1.5 shadow-lg'>
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.link}
                          target={
                            child.link.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            child.link.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className='block px-4 py-2 text-sm font-bold text-neutral-800 transition-colors hover:bg-neutral-50 hover:text-ap-darkblue'
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <div
              className='text-black font-bold whitespace-nowrap text-sm xl:text-base'
              key={item.name}
            >
              <a href={item.link}>{item.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderNav;
