export async function fetchUpcomingProject() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/upcomingProjects/api`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
