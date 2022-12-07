function RecipesComponent({ label, image, calories, ingredients }) {
    return(
        <div className="recipe-cont">
            <div className="left-side">
                <h2 className="label">{ label }</h2>
                <img src={ image } alt="recipe" className="recipe-image"/>
                <p>Calories: { calories.toFixed(2) }</p>
            </div>
            <ul className="right-side">
                {ingredients.map((ingredient, id) => (
                    <li key={ id }>
                        { ingredient }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipesComponent;