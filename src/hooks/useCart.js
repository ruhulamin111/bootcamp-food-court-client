import { useEffect, useState } from "react"

const useCart = () => {
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('https://powerful-wave-76590.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [order])

    return [order, setOrder]
}

export { useCart }