import { Component } from 'react';
import { ResumeFormat } from './styles/ResumeStyles';

class Experience extends Component {
  render() {
    return (
      <ResumeFormat>
        <h2>Experience</h2>
        <div>
          <span className="title">Honey Fields Artistry</span>
          <label>March 2019 - May 2019</label>
          <ul>
            <li>
              <label>Features:</label>
              <p>
                Full ecommerce store; user accounts; admin panel; admin CRUD for
                store filters, portfolio, custom items, orders, and store; user
                cart with RUD, cart update without page reload; random image
                gallery generator; purchase receipts with ID; item search;
                seprate admin edit view and admin bar; admin panel; admin
                privilege controls; photoshopped textures
              </p>
            </li>
            <li>
              <label>Tech Stack:</label>
              <p>
                HTML; CSS; Javascript; ReactJS; GraphQL; NextJS; Prisma Yoga;
                Apollo Client; Stripe API
              </p>
            </li>
          </ul>
        </div>
        <div>
          <span className="title">Youth Theatre Works</span>
          <label>October 2018 - Januray 2019</label>
          <ul>
            <li>
              <label>Features:</label>
              <p>
                user accounts; nested sub user accounts for kids to
                register;mass email to cast; Youtube video integration; CRUD
                article section;Crud Ticket Sells; CRUD reminder system; Cast
                Roster with private admin and parent access;random generated
                quotes;photoshop design;
              </p>
            </li>
            <li>
              <label>Tech Stack:</label>
              <p>Handlebars; NodeJS; Express; MongoDB; Stripe API</p>
            </li>
          </ul>
        </div>
        <div>
          <span className="title">Wrench Wizards - </span>
          <label>June 2017- December 2017</label>
          <ul>
            <li>
              <label>Job Role - Jr. Dev</label>
              <p>
                Created bid system for app; Designed CSS; Google Maps Store
                Locator;
              </p>
            </li>
            <li>
              <label>Tech Stack:</label>
              <p>PHP; HTML; CSS; SQL</p>
            </li>
          </ul>
        </div>
        <h2>Additonal Experience</h2>

        <div>
          <span className="title">WhereInTheWorldisRobertSilvas - </span>
          <label>January 2018- March 2018</label>
          <ul>
            <li>
              <p>
                Friend Tracking website the uses Meta data from pictures to
                geoTag locations
              </p>
            </li>
            <li>
              <label>Tech Stack:</label>
              <p>PHP; HTML; Google Maps; SQL; Javascript</p>
            </li>
          </ul>
        </div>
        <div>
          <span className="title">PDF Generator - </span>
          <label>June 2019</label>
          <ul>
            <li>
              <p>Resume Template with PDF generator</p>
            </li>
            <li>
              <label>Tech Stack:</label>
              <p>NextJS; ReactJS; HTML5; CSS3</p>
            </li>
          </ul>
        </div>
      </ResumeFormat>
    );
  }
}

export default Experience;
