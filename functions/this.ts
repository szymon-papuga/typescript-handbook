type User = {
    name: string
    admin: boolean
}

interface DB {
    filterUsers(predicate: (this: User) => boolean): User[]
}

function getDB() {
    return {
        users: [{ name: "Mike", admin: false }, { name: "John", admin: true }],
        filterUsers(predicate: (this: User) => boolean): User[] {
            return this.users.filter((user: User) => predicate.call(user))
        }
    }
}

const db = getDB()
const admins = db.filterUsers(function (this: User) {
    console.log(this)
    return this.admin
})

console.log(admins)
