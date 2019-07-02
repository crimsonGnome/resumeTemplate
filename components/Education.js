import { Component } from 'react';
import EducationStyles, {
  DualList,
  DarkEducation
} from './styles/EducationStyles';

import { ResumeFormatDark } from './styles/ResumeStyles';

class Education extends Component {
  render() {
    return (
      <div>
        <EducationStyles>
          <h3 className="marginPaddingSame">Skillset</h3>
          <DualList>
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Photoshop</li>
          </DualList>
          <h4>Libraries, Framework, JS</h4>
          <DualList>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>Prisma</li>
            <li>Express</li>
            <li>OAuth</li>
            <li>Google Maps</li>
          </DualList>
        </EducationStyles>
        <DarkEducation>
          <ResumeFormatDark>
            <h3>Education</h3>
            <div>
              <span className="title">
                B.S. Degree in Physics from the University of La Verne
              </span>
              <label>2013-2017</label>
              <ul>
                <li>
                  <img src="/static/crimsonList.png" />
                  <div> Graduated with Honors</div>
                </li>
              </ul>
            </div>

            <h3>Notable Achievements</h3>
            {/* EagleScout received the medal of merit SAE philanthropy chair-
          received the philanthropy organization from ULV for three years in a
          row ToastMaster */}
            <div>
              <span>Eagle Scout</span>
              <ul>
                <li>
                  <img src="/static/crimsonList.png" />
                  <div>Received the medal of merit</div>
                </li>
              </ul>
            </div>
            <div>
              <span>SAE Philanthropy Chair</span>
              <label>2014-2017</label>
              <ul className="last">
                <li>
                  <img src="/static/crimsonList.png" />
                  <div>Raised $4,500 at a single event</div>
                </li>
                <li>
                  <img src="/static/crimsonList.png" />
                  <div>
                    From 2014 -2017, recieved the Philanthropy Organization of
                    the Year Award for three consectuive years from ULV
                  </div>
                </li>
              </ul>
            </div>
          </ResumeFormatDark>
        </DarkEducation>
      </div>
    );
  }
}

export default Education;
