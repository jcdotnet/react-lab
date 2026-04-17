import { useEffect, useState } from 'react';

import classes from './Curriculum.module.css';
import Section from '../Section/Section';
import CustomList from '../CustomList/CustomList';
import Spinner from '../Spinner/Spinner';
import Skill from '../Skill/Skill';
import { BACKGROUND } from '../../shared/data';

function Curriculum() {

	const [projects, setProjects] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		// async function fetchData() {
		// 	const response = await fetch('https://josecarlosroman.com/api/categories/skills');
		// 	const skills = await response.json();
		// 	setSkills(skills);
		// }
		// fetchData();
		setProjects(BACKGROUND.projects);
		setSkills(BACKGROUND.skills);	
	}, []);

	let projectsList = <Spinner />

	if (projects)
		projectsList = <CustomList items={projects.map(p => p.title)} projects={projects} />;

	return (
		<div className={classes.curriculum}>
			<Section title="Formación">
				<CustomList items={BACKGROUND.education} />
			</Section>
			<Section title="Conocimientos">
				<div className={classes.skills}>
					{skills.length > 0 && skills.map((cat) => (
						<Skill key={cat.name} name={cat.name} skills={cat.skills.map(skill => skill.name)} />
					))}
				</div>
			</Section>
			<Section title="Proyectos">
				{projectsList}
			</Section>
			<Section title="Experiencia">
				<CustomList items={BACKGROUND.jobs} />
			</Section>
			<Section title="Cursos">
				<CustomList items={BACKGROUND.courses} />
			</Section>
		</div>
	);

}

export default Curriculum;