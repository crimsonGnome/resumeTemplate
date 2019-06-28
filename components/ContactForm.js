import { Component } from 'react';
import Contact from './styles/ContactFormStyles';

class ContactForm extends Component {
  render() {
    return (
      <Contact>
        <div className="feature left-border">
          <i className="fas fa-phone" />
          (626) 347 4636
        </div>
        <div className="feature left-border">
          <i className="far fa-envelope" />
          joseph.eggers.dev@gmail.com
        </div>
        <div className="feature left-border">
          <i className="fas fa-laptop-code" />

          <a href="https://crimsongnome.com" target="_blank">
            crimsonGnome.com
          </a>
        </div>
        <div className="feature">
          <i className="fab fa-github" />

          <a href="https://github.com/crimsonGnome" target="_blank">
            github/crimsonGnome
          </a>
        </div>
      </Contact>
    );
  }
}

export default ContactForm;
