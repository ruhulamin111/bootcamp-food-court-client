import { useEffect, useState } from "react"

const useCart = () => {
    const [order, setOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [order])

    return [order, setOrder]
}

export { useCart }