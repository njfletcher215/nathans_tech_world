import '../styles/navbar.css';

export default function Navbar() {
  return (
    <ul class="nav">
      <li>
        <a href="/software-tutorials">Software Tutorials</a>
      </li>
      <li>
        <a href="/hardware-tutorials">Hardware Tutorials</a>
      </li>
      <li>
        <a href="/schematics">Schematics</a>
      </li>
      <li>
        <a href="/cool-tech">Cool Tech!</a>
      </li>
      <li>
        <a href="/games">Games</a>
      </li>
    </ul>
  );
}