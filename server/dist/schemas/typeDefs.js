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

  type Query {
    Accounts: [Account]
    Tasks: [Task]
  }
`;
export default typeDefs;
