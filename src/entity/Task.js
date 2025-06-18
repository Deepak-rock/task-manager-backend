const {EntitySchema} = require("typeorm");

module.exports = new EntitySchema({
  name: "Task",
  tableName: "tasks",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      generated: "uuid"
    },
    title: {
      type: "varchar",
      nullable: false
    },
    description: {
      type: "text",
      nullable: true
    },
    status: {
      type: "enum",
      enum: ["todo", "in_progress", "done"],
      default: "todo"
    },
    dueDate: {
      type: "date",
      nullable: true
    },
    createdAt: {
      type: "timestamp",
      createDate: true
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true
    }
  }
});
