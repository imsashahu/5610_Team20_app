import axios from "axios";
const COURSES_API_URL = process.env.BASE_API || "http://localhost:4001/courses";

const addReview = async (reviewData) => {
  try {
    const response = await axios.put(
      `${COURSES_API_URL}/${reviewData.courseNumber}`,
      reviewData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default addReview;
