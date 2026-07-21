import { motion } from 'framer-motion';

const RibbonLogos = () => {
  return (
    <section className=' overflow-hidden'>
      <h2 className='mx-4 mb-12 text-center text-lg font-oswald uppercase font-medium text-neutral-900 md:text-4xl'>
        Featuring Subject-Matter Experts From:
      </h2>
      <div className='flex overflow-hidden border-y-4 border-neutral-900 bg-white'>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className='h-6'></div>
      <div className='flex overflow-hidden border-y-4 border-neutral-900 bg-white'>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? '-100%' : '0%' }}
      animate={{ translateX: reverse ? '0%' : '-100%' }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      className='flex px-2'
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ image, name, link }) => {
  return (
    <a
      href={link}
      rel='nofollow'
      target='_blank'
      className='flex items-center justify-center gap-3 px-4  text-black transition-colors hover:bg-neutral-200 md:py-6'
    >
      <div
        className='w-20 h-full bg-contain bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <span className='whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl'>
        {name}
      </span>
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/ford-bw.png'}
      name='Ford'
      link={'https://www.ford.com/'}
    />
    <LogoItem
      image={
        'https://packschool.s3.amazonaws.com/bmw-logo-logo-png-transparent.png'
      }
      name='BMW'
      link={'https://www.bmwgroup.com/en.html'}
    />
    <LogoItem
      image={
        'https://packmedia54032-staging.s3.us-east-1.amazonaws.com/public/honda.png'
      }
      name='Honda'
      link={'https://www.honda.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/mercedes.png'}
      name='Mercedes-Benz'
      link={'https://www.mercedes-benz.com/en/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/nissan-new.jpeg'}
      name='Nissan'
      link={'https://www.nissanusa.com/'}
    />
    <LogoItem
      image={
        'https://packmedia54032-staging.s3.us-east-1.amazonaws.com/public/tesla.png'
      }
      name='Tesla'
      link={'https://www.tesla.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/Volvo-Iron-Mark-Black.png'}
      name='Volvo'
      link={'https://www.volvocars.com/us/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/ferrari.png'}
      name='Ferrari'
      link={'https://www.ferrari.com/en-US'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/gm.png'}
      name='GM'
      link={'https://www.gm.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/acgo-bw.png'}
      name='AGCO'
      link={'https://www.agcocorp.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/afs-bw.png'}
      name='AutoForecast Solutions'
      link={'https://autoforecastsolutions.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/cummins.png'}
      name='Cummins'
      link={'https://www.cummins.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/ps-logo-square.svg'}
      name='Packaging School'
      link={'https://packagingschool.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/hd-bw.png'}
      name='Harley-Davidson'
      link={'https://www.harley-davidson.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/isuzu-bw.png'}
      name='Isuzu'
      link={'https://www.isuzu.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/Kubota-logo.jpg'}
      name='Kubota'
      link={'https://www.kubota.com/'}
    />
    <LogoItem
      image={
        'https://packschool.s3.us-east-1.amazonaws.com/Rivian_Logo_Black.png'
      }
      name='Rivian'
      link={'https://www.rivian.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/Toyota_EU.svg.webp'}
      name='Toyota'
      link={'https://www.toyota.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/yamaha-bw.png'}
      name='Yamaha'
      link={'https://ymmc.yamaha-motor.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/Zoox_logo_2021.png'}
      name='Zoox'
      link={'https://www.zoox.com/'}
    />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/bosch+icon.png'}
      name='Bosch'
      link={'https://www.boschautoparts.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/JTEKT_only_Black.png'}
      name='JTEKT'
      link={'https://jtekt-na.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/opmobility2.png'}
      name='OP Mobility'
      link={'https://www.plasticomnium.com/en/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/magna.png'}
      name='Magna Mirrors'
      link={'https://www.magna.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/trienda.png'}
      name='TriEnda'
      link={'https://www.trienda.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.amazonaws.com/SURGERE_Logo.png'}
      name='Surgere'
      link={'https://surgere.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/pakfab-bw.png'}
      name='PAKFAB'
      link={'https://pakfab.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/conteyor.png'}
      name='KTP conTeyor'
      link={'https://www.ktpconteyor.com/en'}
    />
    <LogoItem
      image={
        'https://autopacksummitapp94b14feadba64f23aff0ed8deae77b99bc6-dev.s3.us-east-1.amazonaws.com/public/company-logos/4a844921-1a6b-4452-a9cb-08db41546f69/1772209236603.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAYBLPHMU2FDYOJJBL%2F20260721%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260721T183226Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDUYqbigc2XxpJLkeP%2FrUihSEYiUjMq97ShzlsGgRHzFgIgBaTPCMj9s%2FncLF%2F%2BvoeQVDvx2cYvDfRqxrEyZqznzBkqtgUIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARACGgw1NTI2NzM0MzY5ODAiDMh2zzWTLg3djaO0nCqKBRI11oTomn6HmUP89NGfnX%2Fb3FXPDhE2%2BCpwDOWX7PGjPwB0uNDQaI5JMLgNmnGS%2FImzH2wi1rEZqASqg57vkDN3NDQB19tJhhKRxY%2Ft6sIEyDa0kYvkAhBjpOFxAqGAey68VUCVUjH37f1Q6FUUusgwAIvOQ%2BPRFlNsMb5dTgz2PibEhD5Fr8UBibzCW7GJH5VEHI3Kz9osPni8mcYwDAilK7LbcxuQpn6GXdhbIyEHx7UUZff%2BE452LA5j4OIOgq%2FKfzuq%2FgIAGywHsbnSMM60c4b9WW8XaTjrAlIHAt%2BWLERxYnasIye22wpqCX0FjGFcUMFOiil2JQWJAJpA2b2X28YF5om3GHEYsZleQAUyTMV4B1CgbhxW2%2FvzukNUXyZScCkzkgaSaNd4HPv4cCbBEUjXBmruVKrNcjLnqTy9f%2F88xKNG%2BaKhoCMS1F%2BM%2F%2FF7gkNra7G3TDI3tgtDcgymEPRbwEQoThXEGnHTM1rGxoiZB0YPBN3j40e768rqdaUcbgPqQd%2B7p0p0sKdELU2ZROlcoA7tsfPWdzdQVs7igVaN0OTRADTSltT3y9aumBE2h0p3aHO%2BIlogMBoYYfCwkF3835GkHQF%2BgT0aAxv601t7qGl00NwkpVU0DsT1XBlZks7i8b%2BHBFmBgJDd1UWFpnWB%2Fa43Dwxe24CWjzlLz5rOfH6uG4Wz7A2rLneAgS3i5fScY5gaNB6txztdboWqViErJKS5lfRNdEVo4ehpYVUiuJ%2BZaZejtC99ISS%2F6ao%2FZ2cc3DgYAcnqhAIxOfNMHSBMtudv%2FHKwQH3DmwtbvRqI7pb2h%2BwuG2malT2z4RLxmyigLqWMm%2Fhg3e%2FlnFXu7kLTfWiSalmfMLr2%2FtIGOt8C39NnydXfULRdqRxfHgstsCAEzMSwUTViwsmxA3CMb9FvPswQ1cJ9lG0LngJgmQNX3IoPMCPq6wHfLL81sR1WfCIqsP7pH7lxQamh8Lq2Dov1ss%2FyGDyiwkEDidTNKsxX6nakrxQISoDwO6phBYYXUvQpmGeNm1TdJ0iYBhYmuXjT6OVbJX9IBo7t%2By4uRxFFwWP0HgjXeu%2FXORdi0ywBUrgswNus3qaojnaWCa37Jgc98la7WVf%2BlbkwHOvZiXLrT7XkjbKjBoDambJJeCsGmadbmUpEytI23msGPUtTrA3ucO5vDgW3rJMbmUGnUTW26pdSaPvXoV2Uy%2BPgLPYcpENHxoHbpXAH3zuqyABmtE6uPKjz5GEPdwSwm4%2BtcPoGJICfo%2FOppIDAzPKPxp3Mot2km3MCkUSHfE6QryRxyIaidfpGMVV7SnQb4DmCLKIJQbLCCFbBPKhxS88q3%2Fxc&X-Amz-Signature=3f8f9d490a5db282ef679cd4d7d78f021e296c46124f1b902992ec575f99f2f2&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FmacOS%2F10.15.7%20lang%2Fjs%20md%2Fbrowser%2FChrome_151.0.0.0%20api%2Fs3%2F3.6.1%20aws-amplify%2F5.0.8_js&x-id=GetObject'
      }
      name='Daubert Cromwell'
      link={'https://www.daubertcromwell.com/'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/borgwarn-bw.png'}
      name='borgwarner'
      link={'https://borgwarner.com'}
    />
    <LogoItem
      image={'https://packschool.s3.us-east-1.amazonaws.com/reauto-bw.png'}
      name='RE Automated'
      link={'https://reautomated.com/'}
    />
  </>
);

export default RibbonLogos;
