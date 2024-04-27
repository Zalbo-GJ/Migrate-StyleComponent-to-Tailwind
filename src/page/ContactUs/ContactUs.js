import React, { useEffect } from 'react';

import { contactUs } from '../../utils/content';
import { scrollToTop } from '../../utils/constants';
import { Headers } from '../../components';
import { Container, Email } from './styles';

const ContactUs = () => {
  useEffect(scrollToTop, []);
  return (
    <Container>
      <Headers.H2>{contactUs.header}</Headers.H2>
      {contactUs.information.map(({ header, content, type }, i) => (
        <div key={`info${i}`}>
          <Headers.H5>{header}</Headers.H5>
          {type === 'email' ? <Email>{content}</Email> : <div>{content}</div>}
        </div>
      ))}
    </Container>
  );
};

export default ContactUs;
