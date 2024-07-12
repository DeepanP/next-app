import Todo from '../models/Todo';

export const resolvers = {
  Query: {
    todos: async () => {
      return await Todo.find({});
    },

    todo: async (_, {id}) => {
        return await Todo.findById(id);
    },
  },
  Mutation: {
    addTodo: async (_, { text }) => {
      const todo = new Todo({ text, completed: false });
      await todo.save();
      return todo;
    },
    toggleTodo: async (_, { id }) => {
      const todo = await Todo.findById(id);
      if (!todo) return null;
      todo.completed = !todo.completed;
      await todo.save();
      return todo;
    },
    deleteTodo: async (_, { id }) => {
      const result = await Todo.deleteOne({ _id: id });
      return result.deletedCount === 1;
    },
  },
};