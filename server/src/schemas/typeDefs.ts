const typeDefs = `
  type Account {
    _id: ID!
    username: string;
    password: string;
    tasks: [];
    lastAccessed: Date
  }

    type Task {
    _id: ID!
    name: string;
    isCompleted: boolean;
    startDate: Date;
    endDate: Date;
  }

  type Auth {
    token: ID!
    account: Account
  }

  type Query {
    Accounts: [Account]
    Tasks: [Task]
  }
  
  type Mutation {
    addAccount(input: AccountInput!): Auth
    login(username: String!, password: String!): Auth

    addTask(taskId: ID!, tasks: Task!): Account
    removeAccount: Account
    removeTask(tasks: Task!): Account
  }
`;

export default typeDefs;
