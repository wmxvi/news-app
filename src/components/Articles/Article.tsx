import AddBookmarkButton from '../AddBookmarkButton/AddBookmarkButton';
import useStyles from './style/Article';

const Article = ({...props}) => {
    const classes = useStyles({...props})
    const author = props.data.author ? props.data.author : props.data.source.name;

    return (
        <article className={classes.article}>
            <h3 className={classes.author}>{author}</h3>
            <h1 className={classes.title}>{props.data.title}</h1>

            <div className={classes.actions}>
                <AddBookmarkButton article={props.data} />
            </div>
            { props.data.urlToImage ? (<img src={props.data.urlToImage} className={classes.coverImage} />) : <div className={classes.placeholder}>No image</div>}
        </article>
    );
}

export default Article;