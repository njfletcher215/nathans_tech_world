import '../styles/navbar.css';
import SubNav from './SubNav';

import { showTargetClass, hideTargetClass } from '../CommonFunctions';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul class="nav">
        <li className='nav-item' onMouseEnter={(event) => showTargetClass(event, 'software-tutorials-sub-nav')} onMouseLeave={(event) => hideTargetClass(event, 'software-tutorials-sub-nav')}>
          <a className='nav-link' href="/#/software-tutorials">Software Tutorials</a>
          <SubNav className="software-tutorials-sub-nav" links={[
                {url: "/#/article/0", name: "Article 0"},
                {url: "/#/article/1", name: "Article 1"},
                {url: "/#/article/2", name: "Article 2"},
                {url: "/#/article/3", name: "Article 3"},
                {url: "/#/article/4", name: "Article 4"}
            ]} />
        </li>
        <li className='nav-item' onMouseEnter={(event) => showTargetClass(event, 'hardware-tutorials-sub-nav')} onMouseLeave={(event) => hideTargetClass(event, 'hardware-tutorials-sub-nav')}>
          <a className='nav-link' href="/#/hardware-tutorials">Hardware Tutorials</a>
          <SubNav className="hardware-tutorials-sub-nav" links={[
                {url: "/#/article/0", name: "Article 0"},
                {url: "/#/article/1", name: "Article 1"},
                {url: "/#/article/2", name: "Article 2"},
                {url: "/#/article/3", name: "Article 3"}
            ]} />
        </li>
        <li className='nav-item' onMouseEnter={(event) => showTargetClass(event, 'schematics-sub-nav')} onMouseLeave={(event) => hideTargetClass(event, 'schematics-sub-nav')}>
          <a className='nav-link' href="/#/schematics">Schematics</a>
          <SubNav className="schematics-sub-nav" links={[
                {url: "/#/article/0", name: "Schematic 0"},
                {url: "/#/article/1", name: "Schematic 1"},
                {url: "/#/article/2", name: "Schematic 2"}
            ]} />
        </li>
        <li className='nav-item' onMouseEnter={(event) => showTargetClass(event, 'cool-tech-sub-nav')} onMouseLeave={(event) => hideTargetClass(event, 'cool-tech-sub-nav')}>
          <a className='nav-link' href="/#/cool-tech">Cool Tech!</a>
          <SubNav className="cool-tech-sub-nav" links={[
                {url: "/#/article/0", name: "Article 0"},
                {url: "/#/article/1", name: "Article 1"}
            ]} />
        </li>
        <li className='nav-item' onMouseEnter={(event) => showTargetClass(event, 'games-sub-nav')} onMouseLeave={(event) => hideTargetClass(event, 'games-sub-nav')}>
          <a className='nav-link' href="/#/games">Games</a>
          <SubNav className="games-sub-nav" links={[
                {url: "/#/article/0", name: "Game 0"},
                {url: "/#/article/1", name: "Game 1"}
            ]} />
        </li>
      </ul>
    </div>
  );
}