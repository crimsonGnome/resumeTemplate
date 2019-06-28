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
          <h4>Skillset</h4>
          <DualList>
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Photoshop</li>
          </DualList>
          <h4>Librares, Framework, JS</h4>
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
              <ul>
                <li>
                  <img src="/static/crimsonList.png" />
                  <div>
                    Raised over $10,000 and received the philanthropy
                    organzation of the year from ULV for three years in a row
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <span>ULV ToastMaster</span>
              <label>2018 -</label>
              <ul>
                <li>
                  <img src="/static/crimsonList.png" />
                  <div>Completed Level 1 of Leaadership Development</div>
                </li>
              </ul>
            </div>
            <div>
              <span>President and Founder of ULV Boardgame Club</span>
              <label>2013-2017</label>
            </div>
          </ResumeFormatDark>
        </DarkEducation>
      </div>
    );
  }
}

export default Education;
