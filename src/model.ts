export interface User {
    name: string,
    email: string
}

export const users: { [key: string]: User } = {
    "id0": {
        name: "foo",
        email: "foo@example.com"
    },
    "id1": {
        name: "bar",
        email: "bar@example.com"
    }
}
