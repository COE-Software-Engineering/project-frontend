export const userQuery = (email, password, userType) => {
  const query = `*[_type == '${userType}' && email == '${email}' && password == '${password}']`;
  return query;
};

export const userFilesQuery = (userId) => {
  const query = `*[_type == 'file' && userId == '${userId}']{...}`;
  return query;
};

export const chatMessagesQuery = `*[_type == 'announcement']{...}`;

export const coursesQuery = (userId = null) => {
  const query = userId
    ? `*[_type == 'course' && userId == '${userId}']{...}`
    : `*[_type == 'course']{...}`;
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
