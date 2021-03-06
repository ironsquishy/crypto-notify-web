import { inherits } from 'util';

export const ResponseContainerStyles = theme => ({});

export const ResponseInputStyles = theme => ({
	textField: {
		width: '100%',
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	button: {
		float : 'right',
		margin: theme.spacing.unit,
	}
});

export const UserResponseStyles = theme => ({
	card : {
		minWidth : 75,
		display : 'flex'
	},

	grow : {
		flexGrow : 1
	},

	cardAction : {
		backgroundColor : theme.palette.primary.main
	},
  
	cardActionDisable : {
		backgroundColor : 'inherit'
	},
	button : {
		color : 'grey'
	},
	disableButton : {
		color : 'red'
	}
});

