import { Component } from 'react';
import { ResumeFormat, SeventyThirtyResumeLogo } from './styles/ResumeStyles';
import { ImgContainer, Logo } from './styles/ResumeStyles';

class Experience extends Component {
  render() {
    return (
      <ResumeFormat>
        <h2 className="marginPaddingSame">Experience</h2>
        <div>
          <span className="title">Honeyfields Artistry</span> -{' '}
          <span className="role">Software Developer</span> -{' '}
          <label>March 2019 - May 2019</label>
          <ul>
            <li>
              Developed a full functioning e-commerce store with filtering
              system, item search, and custom order features
            </li>
            <li>
              Created protected routes that allows admins to toggle edit view
              and have CRUD (Create, Read, Update, Delete) implementation for
              all store items, store filters, and upcoming events
            </li>
            <li>
              Programmed sold item pinboard that generates the last 40 items and
              can also omit items based on the store filters
            </li>
            <li>
              <label>
                HTML5; CSS3; Javascript; ReactJS; GraphQL; NextJS; Prisma Yoga;
                Apollo Client
              </label>
            </li>
          </ul>
        </div>
        <div>
          <span className="title">Youth Theatre Works</span> -{' '}
          <span className="role">Software Developer</span> -{' '}
          <label>October 2018 - January 2019</label>
          <ul>
            <li>
              Engineered user accounts with nested sub accounts to register
              children to productions allowing only admins and parents access to
              allergies, shirt sizes, and personal information of the child
            </li>
            <li>
              Renovated their communication system by creating mass email system
              for reminders to subscribed users, update their play home page, or
              change their rehearsal schedule on the website
            </li>
            <li>
              Developed online ticket system allowing admins full CRUD
              implementation to easily toggle ticket sells on their website
            </li>
            <li>
              <label>Handlebars; NodeJS; Express; MongoDB; Bootstrap</label>
            </li>
          </ul>
        </div>
        <div>
          <span className="title">Wrench Wizards - </span>-{' '}
          <span className="role">Jr. Software Developer</span> -{' '}
          <label>June 2017- December 2017</label>
          <ul>
            <li>
              Developed a bid system that allowed users to see the bids from
              lowest to highest
            </li>
            <li>Helped redesigned major components of the app</li>
            <li>
              Streamlined google maps geotag integration for store locator
            </li>
            <li>
              <label>PHP; HTML5; CSS3; MySQL</label>
            </li>
          </ul>
        </div>
        <h2 className="margin-top">Additonal Experience</h2>

        <div>
          <span className="title">WhereInTheWorldIsRobertSilva - </span>
          <label>January 2018- March 2018</label>
          <ul>
            <li>
              Friend tracking mobile only website the uses meta data from
              pictures to geotag locations
            </li>
            <li>
              <label>PHP; HTML5; Google Maps; MySQL; Javascript; CSS3</label>
            </li>
          </ul>
        </div>
        <SeventyThirtyResumeLogo>
          <div>
            <span className="title">PDF Generator - </span>
            <label>June 2019</label>
            <ul>
              <li>Resume Template with PDF generator</li>
              <li>
                <label>NextJS; ReactJS; HTML5; CSS3</label>
              </li>
            </ul>
          </div>

          <ImgContainer>
            <Logo src="/static/crimsonGnome.png" />
          </ImgContainer>
        </SeventyThirtyResumeLogo>
      </ResumeFormat>
    );
  }
}

export default Experience;
