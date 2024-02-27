interface User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export async function createUser(body: User) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/users/api`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
