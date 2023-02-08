import { address, name, phone, email, uuid } from "casual";

interface GetUserArgs {
  page: number;
}

const PAGE_SIZE = 10;

const generateUsers = () => {
  return Array(2000)
    .fill(undefined)
    .map(() => {
      return {
        address,
        name,
        phone,
        email,
        id: uuid
      };
    });
};

export const getUsers = async function (context: unknown, args: GetUserArgs) {
  const { page } = args;
  return generateUsers().slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
};
