import { useEffect, useState } from "react";

const useMaincourse = () => {
    const [maincourse, setMaincourse] = useState([]);

    useEffect(() => {
        fetch('https://powerful-wave-76590.herokuapp.com/maincourse')
            .then(res => res.json())
            .then(data => setMaincourse(data))
    }, [maincourse])

    return [maincourse, setMaincourse]
}

export { useMaincourse }