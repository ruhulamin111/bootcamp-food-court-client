import { useEffect, useState } from "react";

const useDesart = () => {
    const [desart, setDesart] = useState([]);

    useEffect(() => {
        fetch('https://powerful-wave-76590.herokuapp.com/desart')
            .then(res => res.json())
            .then(data => setDesart(data))
    }, [desart])

    return [desart, setDesart]

}
export { useDesart }