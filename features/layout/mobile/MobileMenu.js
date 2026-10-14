import React, { useState } from 'react';
import Logo from '../../../shared/Logo';
import Link from 'next/link';
import { navMenu } from '../../../data/navigation';
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';

const MobileMenu = ({ close, isOpen }) => {
  const [openSection, setOpenSection] = useState(null);

  const menuVariants = {
    hidden: {
      x: -1000,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    show: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className='lg:hidden fixed z-50 top-0 left-0 right-0 bottom-0 flex'
        variants={menuVariants}
        initial='hidden'
        animate={isOpen ? 'show' : 'hidden'}
      >
        <motion.div className='flex flex-col w-full p-6 md:p-10 bg-slate-700 overflow-y-auto'>
          <div className='flex justify-between'>
            <div className='w-2/5'>
              <Logo />
            </div>
            <div onClick={() => close()}>
              <XMarkIcon className='w-10 h-10 stroke-white/60' />
            </div>
          </div>
          <motion.div className='flex flex-col gap-4 md:gap-5 top-40 relative pb-16'>
            {navMenu.map((item, i) => {
              if (item.children?.length) {
                const isOpenSection = openSection === item.name;
                return (
                  <motion.div
                    key={item.name}
                    variants={items}
                    initial='hidden'
                    animate='show'
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    <button
                      type='button'
                      className='flex w-full items-center justify-between font-bold text-4xl md:text-7xl text-white'
                      onClick={() =>
                        setOpenSection(isOpenSection ? null : item.name)
                      }
                      aria-expanded={isOpenSection}
                    >
                      {item.name}
                      <ChevronDownIcon
                        className={`h-8 w-8 md:h-12 md:w-12 stroke-white/70 transition-transform ${
                          isOpenSection ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpenSection && (
                      <div className='mt-3 flex flex-col gap-2 pl-2'>
                        {item.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.link}
                            target={
                              child.link.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              child.link.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            onClick={() => close()}
                            className='font-bold text-2xl md:text-4xl text-white/80'
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              }

              return (
                <motion.div key={item.name} onClick={() => close()}>
                  <Link href={item.link}>
                    <motion.div
                      className='font-bold text-4xl md:text-7xl text-white'
                      key={isOpen}
                      variants={items}
                      initial='hidden'
                      animate='show'
                      transition={{ delay: 0.4 + i * 0.05 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
