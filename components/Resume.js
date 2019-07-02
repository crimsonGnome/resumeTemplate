import { Component } from 'react';
import {
  MainBody,
  SixtyFortyTop,
  ThirtySeventyBottom
} from './styles/BodyLayout.js';
import Title from './styles/Title';
import {
  ImgContainer,
  Logo,
  Border,
  WhiteBackground,
  WhiteBackground2
} from './styles/ResumeStyles';
import ContactForm from './ContactForm.js';
import Education from './Education';
import Experience from './Experience';

class Resume extends Component {
  render() {
    return (
      <MainBody>
        <WhiteBackground>
          <Border>
            <SixtyFortyTop>
              <div>
                <Title>Joseph Eggers</Title>
                <label className="crimson dev">Software Developer</label>
              </div>
              <div className="grid">
                <div>
                  <label className="crimson">Address:</label>
                  <div>515 E. Bellbrook St.</div>
                  <div>Covina, Ca 91722</div>
                </div>
              </div>
            </SixtyFortyTop>
            <WhiteBackground2>
              <br />
              <br />
              <ContactForm />
            </WhiteBackground2>
            <ThirtySeventyBottom>
              <Education />
              <Experience />
            </ThirtySeventyBottom>
          </Border>
        </WhiteBackground>
      </MainBody>
    );
  }
}

export default Resume;
