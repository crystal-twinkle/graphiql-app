import DeveloperCard from '../DeveloperCard/DeveloperCard';
import avatar1 from '../../assets/images/Avatar_1.jpg';
import avatar2 from '../../assets/images/Avatar_2.jpg';
import avatar3 from '../../assets/images/Avatar_3.jpg';
import signInIcon from '../../assets/icons/sign-in-icon.svg';
import signUpIcon from '../../assets/icons/sign-up-icon.svg';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto py-5">
      <nav className="flex gap-5 self-end">
        <Link
          to="/main"
          className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.05] transition-all duration-200 ease-in-out"
        >
          <img src={signInIcon} alt="local-icon" className="w-8 h-8" />
          Sign in
        </Link>
        <Link
          to="/main"
          className="flex items-center gap-1 hover:brightness-125 hover:scale-[1.05] transition-all duration-200 ease-in-out"
        >
          <img src={signUpIcon} alt="local-icon" className="w-8 h-8" />
          Sign up
        </Link>
      </nav>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">A query language for your API</h2>
        <p>
          GraphiQL is a query language for APIs and a runtime for fulfilling those queries with your
          existing data. GraphiQL provides a complete and understandable description of the data in
          your API, gives clients the power to ask for exactly what they need and nothing more,
          makes it easier to evolve APIs over time, and enables powerful developer tools.
        </p>
      </section>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">Development Team</h2>
        <div className="flex justify-between flex-wrap gap-5">
          <DeveloperCard
            name="Roman"
            avatarLink={avatar1}
            description={`Roman is the driving force behind our product's technical excellence. His strategic thinking and leadership have been instrumental in shaping our success.`}
            url="https://github.com/gemer31"
            text="Gemer31"
          ></DeveloperCard>
          <DeveloperCard
            name="Krystina"
            avatarLink={avatar2}
            description={`Krystina's coding prowess is legendary within the team. Her deep technical insights and commitment to excellence have been instrumental in shaping our product's core functionality.`}
            url="https://github.com/crystal-twinkle"
            text="Crystal-twinkle"
          ></DeveloperCard>
          <DeveloperCard
            name="Sergey"
            avatarLink={avatar3}
            description={`Sergey's impressive skills and contributions are the key to our product's exceptional user experience. Her dedication to crafting responsive, interactive, and aesthetically pleasing interfaces has a profound impact on our product's success.`}
            url="https://github.com/SadJoeBright"
            text="SadJoeBright"
          ></DeveloperCard>
        </div>
      </section>
      <section className="py-7">
        <h2 className="text-2xl font-semibold py-4">About the course</h2>
        <p>
          RS School is free-of-charge and community-based education program conducted by The Rolling
          Scopes developer community since 2013. Everyone can study at RS School, regardless of age,
          professional employment, or place of residence. The mentors and trainers of our school are
          front-end and javascript developers from different companies and countries. RS School
          operates 'Pay it forward' principle. We share our knowledge with students for free at the
          present time, hoping that in the future they will return to us as mentors and pass on
          their knowledge to the next generation of students in the same way.
        </p>
      </section>
    </div>
  );
}

export default WelcomePage;
