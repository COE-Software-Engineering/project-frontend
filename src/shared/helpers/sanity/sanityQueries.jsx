export const sharedResourcesQuery = `*[_type == 'shared_resource']{ 
    file {
      asset -> {
        url,
        originalFilename,
        size
      }
    },
    _id,
    sharerName,
    urlLink,
    _createdAt
}`;
export const courseMaterialsQuery = (courseName) => {
  const query = `*[_type == 'course_material' && courseName == '${courseName}']{
    file {
      asset -> {
        url,
        originalFilename,
        size
      }
    },
    _id,
    courseName,
    _createdAt
}`;
  return query;
};
