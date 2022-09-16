import { useEffect, useState } from "react";

const useDesart = () => {
    const [desart, setDesart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/desart')
            .then(res => res.json())
            .then(data => setDesart(data))
    }, [desart])

    return [desart, setDesart]

}
export { useDesart }