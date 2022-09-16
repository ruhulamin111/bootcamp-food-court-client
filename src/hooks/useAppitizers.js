import { useEffect, useState } from "react";

const useAppitizers = () => {
    const [appitizers, setAppitizers] = useState([]);
    useEffect(() => {
        fetch('https://powerful-wave-76590.herokuapp.com/appitizers')
            .then(res => res.json())
            .then(data => setAppitizers(data))
    }, [appitizers])
    return [appitizers, setAppitizers]
}
export { useAppitizers }