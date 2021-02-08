// note that we are abstracting this function to its own file for code readability purposes
// this is called by Course.js, which is already starting to get big (# of lines of code) as is

// this function takes in a course name (e.g., CIS 110), and returns the associated JSON object
// in the courses.json

import courses from '../data/courses'

export default courseName => {
  let courseID = parseInt(courseName.split('-')[1])

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].number === courseID) {
      // we reformat the courses like this to remove the "-" from "cross-listed"
      // to allow for easier access in later parts of the app
      const course = {
        dept: courses[i].dept,
        number: courses[i].number,
        title: courses[i].title,
        crossListed: courses[i]['cross-listed'],
        prereqs:
          courses[i].prereqs !== undefined && !Array.isArray(courses[i].prereqs) // checking if prereqs is a string instead of array, fixing if so
            ? [courses[i].prereqs]
            : courses[i].prereqs,
        description: courses[i].description,
      }

      return course
    }
  }
}
