import { useEffect, useState } from "react"
import api from '../mock/api.json'

type TReview = {
    name: string,
    position: string,
    review: string,
    photo: string
}


const useHandlers = () => {


    const [index, setIndex] = useState<number>(0)
    const [reviews, setReviews] = useState<TReview[]>(api.reviews)
    const [review, setReview] = useState<TReview>()

    const handlerNext = () => {
        (index == (reviews.length - 1)) ? setIndex(0) : setIndex(index + 1)
    }

    const handlerPrev = () => {
        (index == 0) ? setIndex(reviews.length - 1) : setIndex(index - 1)
    }

    useEffect(() => {
        setReview(reviews[index])
    }, [index])


    return {
        index,
        reviews,
        review,
        handlerNext,
        handlerPrev,
        setReview
    }
}

export default useHandlers