import stylePaginated from "../styles/Paginated.module.css";

const Paginated = (props) => {
    const Pages = []
    const numberOfPages = Math.ceil(props.recipes/props.recipesPage); 
    
    for (let i = 1; i <= numberOfPages; i++) {
        Pages.push(i)
    }

    return (
        <div className={stylePaginated.container}>
            <ul>{Pages.map((page) => <a onClick={() => props.setPages(page)}>{page}</a>)}</ul>            
        </div>
    )
};

export default Paginated;
