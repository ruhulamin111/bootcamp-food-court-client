import { useEffect, useState } from "react";

const useMaincourse = () => {
    const [maincourse, setMaincourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/maincourse')
            .then(res => res.json())
            .then(data => setMaincourse(data))
    }, [maincourse])

    return [maincourse, setMaincourse]
}

export { useMaincourse }