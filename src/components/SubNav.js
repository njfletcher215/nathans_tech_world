import '../styles/subnav.css';

export default function HoverNav(props) {
    return(
        <ul className={"sub-nav " + props.className}>
            {props.links.map((link) => {return(
                <li>
                    <a href={link.url}>{link.name}</a>
                </li>
            )})}
        </ul>
    )
}