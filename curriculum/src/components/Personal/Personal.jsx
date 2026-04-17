import classes from './Personal.module.css';
import jc from '../../assets/jc.png';
import Sprite from '../../assets/sprite.svg';

export default function Personal() {
	return <div className={classes.Personal}>
		<img src={jc} alt="JC" className={classes.Avatar} />
		<h1> José Carlos Román Rubio </h1>
		<h2> Software Engineer </h2>
		<ul>
			<li>
				<svg className={classes.Icon}><use xlinkHref={Sprite + '#icon-location-pin'}></use></svg>
				Málaga, España
			</li>
			<li>
				<svg className={classes.Icon}><use xlinkHref={Sprite + '#icon-mail'}></use></svg>
				<a href="mailto:hello@josecarlosroman.com">hello@josecarlosroman.com</a>
			</li>
			<li>
				<svg className={classes.Icon}><use xlinkHref={Sprite + '#icon-linkedin'}></use></svg>
				<a href="https://www.linkedin.com/in/romanrubio/">in/romanrubio</a>
			</li>
		</ul>
		<p>
			<svg className={classes.Icon} style={{ verticalAlign: 'sub' }}><use xlinkHref={Sprite + '#icon-code'}></use></svg>
			Esta página web se ha creado con <strong><a href="https://react.dev/" target="_blank" rel="noreferrer">React</a></strong>.
			Código: <strong><a href="https://github.com/jcdotnet/react-lab/tree/main/curriculum">GitHub</a></strong>.
		</p>
	</div>
}