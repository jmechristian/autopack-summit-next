import React from 'react';
import { navMenu } from '../../../data/navigation';

const FooterNav = () => {
  const links = navMenu.flatMap((item) => {
    if (item.children?.length) {
      return item.children.map((child) => ({
        name: `${item.name} ${child.name}`,
        link: child.link,
      }));
    }
    return [{ name: item.name, link: item.link }];
  });

  return (
    <div className='px-6 xl:px-0'>
      <div className='grid grid-cols-2 gap-y-3 xl:gap-y-6'>
        {links.map((item) => (
          <div
            className='text-white font-medium xl:text-xl md:text-lg'
            key={item.name}
          >
            <a
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={
                item.link.startsWith('http') ? 'noopener noreferrer' : undefined
              }
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterNav;
