import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
     
      title={'GLOOFT'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://www.glooft.com/">https://www.glooft.com/</a>{' '}
          </p>
          {/* <p>
            GitHub :{' '}
            <a href="https://github.com/idurar/idurar-erp-crm">
              https://github.com/idurar/idurar-erp-crm
            </a>
          </p> */}
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.glooft.com/contact/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
