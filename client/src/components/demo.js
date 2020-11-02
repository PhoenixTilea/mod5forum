import React from 'react';
import ReactDOM from 'react-dom';


const Category = props => {
    const [values, setValues] = React.useState(
        props.initialValues || { title: '', description: '' }
    )
    const _handleSubmit = e => {
        props.handleSubmit(e, values)
    }
    const handleChange = e => {
        const { target } = e;
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    return (
        <form onSubmit={_handleSubmit} id={props.id}>
            <input name="title" placeholder="Title" value={values.title} onChange={handleChange} />
            <input name="description" placeholder="Description" value={values.description} onChange={handleChange} />
            <button>{props.saveLabel || 'Submit'}</button>
            <button>Cancel</button>
        </form>
    )
}


const CategoriesForm = props => {
    const [categories, setCategories] = React.useState([]);
    const addCategory = (newCategory) => {
        // add categories to the array
        setCategories([...categories, newCategory])
    }
    const editCategory = (id, updatedCategory) => {
        // find category in existing array, and update it with new values
        setCategories(categories.map((category, i) => {
            if (i == id) return updatedCategory;
            else return category;
        }))
    }
    const handleAdd = (e, values) => {
        e.preventDefault();
        addCategory(values);
    }
    const handleEdit = (e, values) => {
        const { target } = e;
        e.preventDefault();
        editCategory(target.id, values)
    }
    return (
        <div>
            <div>
                <label>Add New Category:</label>
                <Category handleSubmit={handleAdd} id="add" saveLabel="Add" />
            </div>
            <div>
                <div>
                    <h3>Categories:</h3>
                </div>
                {categories.map((category, i) => (
                    <div key={i}>
                        <h4>{category.title}</h4>
                        <p>{category.description}</p>
                        <Category
                            id={i}
                            initialValues={category}
                            handleSubmit={handleEdit}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
const App = props => {
    return (
        <div>
            <CategoriesForm />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));