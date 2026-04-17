import classes from './Project.module.css';

const Project = (props) => {

	return (
		<div className={classes.Project}>
			<h4> Nombre: </h4>
			<div> {props.project.title} </div>
			
            <h4> Descripción: </h4> 
            {props.project.description}
        </div>
	)
}

export default Project;