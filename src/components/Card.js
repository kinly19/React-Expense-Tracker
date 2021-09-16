import './Card.scss'

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div> //props.children will always be the content between the opening and closing tags of your custom component.
    )
};

export default Card;