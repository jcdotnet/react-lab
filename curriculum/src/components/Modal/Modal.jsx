import Button from '../Button/Button';
import classes from './Modal.module.css';

export default function Modal({ ref, children, onReset }) {
	return (
		<dialog ref={ref} className={classes.Modal} onClose={onReset}>
			{children}
			<form method="dialog" onSubmit={onReset}>
				<Button>CERRAR</Button>
			</form>
		</dialog>
	)
}