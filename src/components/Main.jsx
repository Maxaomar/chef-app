import React from "react";

export default  function Main() {
    const [ingredients, setIngredients] = React.useState([]);

    const listOfIngredients = ingredients.map((ingredient) => (
               <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {

        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }


    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input  type="text" placeholder="e.g oregano" aria-label="add ingredient" name="ingredient"/>
                   <button>Add Ingredient</button>
            </form>
            <ul>
                {listOfIngredients}
            </ul>
        </main>
    )
}