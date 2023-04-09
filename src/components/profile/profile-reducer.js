import { createSlice } from "@reduxjs/toolkit";

const initialProfile = {
  firstName: "Jose",
  lastName: "Annunziato",
  handle: "@jannunzi",
  bio: "Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.",
  dateOfBirth: "7/7/1968",

  major: "Computer Science",
  type: "faculty",

  followingUser: [],
  followerUser: [],
  sentPost: [],
  likedPost: [],
  commentedPost: [],
  bookmarkPost: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfile,
  reducers: {
    editFirstName(state, action) {
      const newName = action.payload;
      state.firstName = newName;
    },
    editLastName(state, action) {
      const newName = action.payload;
      state.lastName = newName;
    },
    editBio(state, action) {
      const newBio = action.payload;
      state.bio = newBio;
    },
    editDOB(state, action) {
      const newDOB = action.payload;
      state.dateOfBirth = newDOB;
    },
  },
});
export const { editFirstName, editLastName, editBio, editDOB } =
  profileSlice.actions;
export default profileSlice.reducer;
