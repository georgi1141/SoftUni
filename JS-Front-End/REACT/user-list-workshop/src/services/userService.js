const url = "http://localhost:3030/jsonstore/users";

export const getAllUsers = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const users = Object.values(data);
  return users;
};

export const createUser = async (userData) => {
  const data = {
    firstName:userData.firstName,
    lastName:userData.lastName,
    email:userData.email,
    imageUrl:userData.imageUrl,
    phoneNumber:userData.phoneNumber,
    createdAt:new Date().toISOString(),
    updatedAt:new Date().toISOString(),
    address: {
      country:userData.country,
      city:userData.city,
      street:userData.street,
      streetNumber:userData.streetNumber,
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = response.json()
  return result
};

export const deleteUserFromDb = async (userId) => {
    try {
    
        const response = await fetch(url, {
            method: "DELETE",
        });

        if (response.ok) {
            console.log(`User with ID ${userId} has been deleted successfully.`);
        } else {
            console.error(`Failed to delete user with ID ${userId}.`);
            // You can also handle the error more specifically based on the response status.
        }
    } catch (error) {
        console.error("An error occurred while deleting the user:", error);
    }
}
