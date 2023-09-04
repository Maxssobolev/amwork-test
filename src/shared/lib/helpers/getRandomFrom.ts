export const getRandomFrom = (roles: string[]) => {
  const randomIndex = Math.floor(Math.random() * roles.length);
  return roles[randomIndex];
}