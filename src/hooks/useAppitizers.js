import { useEffect, useState } from "react";

const useAppitizers = () => {
    const [appitizers, setAppitizers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/appitizers')
            .then(res => res.json())
            .then(data => setAppitizers(data))
    }, [appitizers])
    return [appitizers, setAppitizers]
}
export { useAppitizers }