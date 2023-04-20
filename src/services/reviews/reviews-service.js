import axios from "axios";
const COURSES_API_URL = "http://localhost:4001/courses";

export const addReview = async (reviewData) => {
    try {
        const response = await axios.post(`${COURSES_API_URL}/${reviewData.courseNumber}/reviews`, reviewData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};