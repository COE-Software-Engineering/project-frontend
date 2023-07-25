export const userQuery = (email, password, userType) => {
  const query = `*[_type == '${userType}' && email == '${email}' && password == '${password}']`;
  return query;
};

export const userQueryUsingId = (userId) => {
  const query = `*[_id == '${userId}']{fullName,_id}`;
  return query;
};

export const userFilesQuery = (userId) => {
  const query = `*[_type == 'file' && userId == '${userId}']{...}`;
  return query;
};

export const announcementsQuery = `*[_type == 'announcement']{
  _id,
  title,
  details,
  _createdAt,
  userId,
  createdBy -> {
    _id,
    fullName
}} | order(_createdAt)`;

export const coursesQuery = (userId = null) => {
  const query = userId
    ? `*[_type == 'course' && userId == '${userId}']{...,createdBy -> {
    _id,
    fullName
}, courseImage {
      asset -> {
        url
      }
    },
  }`
    : `*[_type == 'course']{...,createdBy -> {
    _id,
    fullName
},courseImage {
      asset -> {
        url
      }
    }}`;
  return query;
};

export const courseQuery = (courseId) => {
  const query = `*[_type == 'course' && _id == '${courseId}']{...,createdBy -> {
    _id,
    fullName
}}`;
  return query;
};

// export const musicsQuery = (category = null) => {
//   const query = category
//     ? `*[_type == 'music' && '${category}' in categories[] -> name]{
//       name,
//       description,
//       imageUrl,
//       categories[],
//       creator ->,
//       musicFile {
//         asset -> {
//           _id,
//           url
//         },
//   }
//     }`
//     : `*[_type == 'music']{...}`;

//   return query;
// };

// export const categoriesQuery = () => {
//   const query = `*[_type == 'category']`;
//   return query;
// };
