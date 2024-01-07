
import React, { useState } from 'react'

const Home = () => {
    // on component load
    // useEffect(() => {
    //   alert("page loaded 1st time")


    // }, [])

    const [count, setCount] = useState(0)
    const handleAddCount = () => {
        setCount(count + 1)
    }
    // console.log(count)
    let a = 123
    // console.log(a)
    a += 3
    // console.log(a)
    // handleaddCount
    const [text, setText] = useState("")
    const [name, setName] = useState("")
    const handleTextChange = (e) => {
        setText(event.target.value)
    }
    const handleNameChange = (e) => {
        setName(event.target.value)
    }
    const handleTextFormSubmit = (e) => {
        e.preventDefault()
        console.log(text)
        console.log(name)
    }
    return (
        <>
            <div>Home</div>
            <button
                type="button"
                onClick={handleAddCount}
            >
                Increment the value of a
            </button>
            {count}
            <h1 className="logo">Hello react js</h1>
            <h2>second heading</h2>
            2+4
            {2 + 4}
            <br />
            {a}

            <form onSubmit={handleTextFormSubmit}>
                {/* text start */}
                <input
                    type="text"
                    name="text"
                    id="text"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="enter text"
                />
                {/* text end */}
                {/* last name start*/}
                <input
                    type="name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="enter name"
                />
                {/* last name end */}
                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default Home