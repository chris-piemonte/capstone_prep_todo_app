define({
  api: [
    {
      type: "delete",
      url: "/todos/:id",
      title: "Deletes a todo",
      group: "Todo",
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "HTTP/1.1 204 No Content",
            type: "String",
          },
        ],
      },
      error: {
        fields: {
          404: [
            {
              group: "404",
              optional: false,
              field: "NoTodo",
              description: "<p>When the todo with id = {id} cannot be found</p>",
            },
          ],
        },
        examples: [
          {
            title: "NoTodo Error-Response:",
            content: "HTTP/1.1 404 Not Found\n'The todo could not be found.'",
            type: "String",
          },
        ],
      },
      version: "0.0.0",
      filename: "routes/api.js",
      groupTitle: "Todo",
      name: "DeleteTodosId",
    },
    {
      type: "get",
      url: "/reset",
      title: "Resets the database.",
      group: "Todo",
      success: {
        examples: [
          {
            title: "Success-Response:",
            content: "HTTP/1.1 200 OK\n'Database reset successful!'",
            type: "String",
          },
        ],
      },
      version: "0.0.0",
      filename: "routes/api.js",
      groupTitle: "Todo",
      name: "GetReset",
    },
    {
      type: "get",
      url: "/todos",
      title: "Retrieves all todos",
      group: "Todo",
      success: {
        fields: {
          "Success 200": [
            {
              group: "Success 200",
              type: "Object[]",
              optional: false,
              field: "todos",
              description: "<p>List of todos.</p>",
            },
            {
              group: "Success 200",
              type: "Number",
              optional: false,
              field: "todo.id",
              description: "<p>ID of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.title",
              description: "<p>Title of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.day",
              description: "<p>Day of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.month",
              description: "<p>Month of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.year",
              description: "<p>Mear of todo.</p>",
            },
            {
              group: "Success 200",
              type: "Boolean",
              optional: false,
              field: "todo.completed",
              description: "<p>Completed status of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.description",
              description: "<p>Description of todo.</p>",
            },
          ],
        },
        examples: [
          {
            title: "Success-Response:",
            content:
              "HTTP/1.1 200 OK\n[\n  {'id': 1, 'title': 'todo1', 'day': '11', 'month': '11',\n    'year': '2017', 'completed': true, 'description': 'Some Description'},\n  {'id': 2, 'title': 'todo2', 'day': '', 'month': '',\n    'year': '', 'completed': false, 'description': ''}\n]",
            type: "json",
          },
        ],
      },
      version: "0.0.0",
      filename: "routes/api.js",
      groupTitle: "Todo",
      name: "GetTodos",
    },
    {
      type: "get",
      url: "/todos/:id",
      title: "Retrieves todo with id = {id}",
      group: "Todo",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "Number",
              optional: false,
              field: "id",
              description: "<p>The id of the requested todo.</p>",
            },
          ],
        },
      },
      success: {
        fields: {
          "Success 200": [
            {
              group: "Success 200",
              type: "Object",
              optional: false,
              field: "todo",
              description: "<p>Todo object.</p>",
            },
            {
              group: "Success 200",
              type: "Number",
              optional: false,
              field: "todo.id",
              description: "<p>ID of schedule.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.title",
              description: "<p>Title of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.day",
              description: "<p>Day of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.month",
              description: "<p>Month of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.year",
              description: "<p>Year of todo.</p>",
            },
            {
              group: "Success 200",
              type: "Boolean",
              optional: false,
              field: "todo.completed",
              description: "<p>Completed status of todo.</p>",
            },
            {
              group: "Success 200",
              type: "String",
              optional: false,
              field: "todo.description",
              description: "<p>Description of todo.</p>",
            },
          ],
        },
        examples: [
          {
            title: "Success-Response:",
            content:
              "HTTP/1.1 200 OK\n{'id': 1, 'title': 'todo 1', 'day': '11', 'month': '11', 'year': '2017', 'completed': true, 'description': 'sample todo'}",
            type: "json",
          },
        ],
      },
      error: {
        fields: {
          404: [
            {
              group: "404",
              optional: false,
              field: "NoTodo",
              description: "<p>When the todo with id = {id} cannot be found</p>",
            },
          ],
        },
        examples: [
          {
            title: "NoTodo Error-Response:",
            content: "HTTP/1.1 404 Not Found\n'The todo could not be found.'",
            type: "String",
          },
        ],
      },
      version: "0.0.0",
      filename: "routes/api.js",
      groupTitle: "Todo",
      name: "GetTodosId",
    },
    {
      type: "post",
      url: "/todos",
      title: "Saves a new todo.",
      description:
        "<p>Request payload should be in json. Note that you will need the &quot;Content-Type: application/json&quot; header.</p>",
      group: "Todo",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: false,
              field: "title",
              description: "<p>Title of todo. At least 3 characters long.</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "day",
              description: "<p>Day of todo. Should be 2 characters long.</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "month",
              description: "<p>Month of todo. Should be 2 characters long.</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "year",
              description: "<p>Year of todo. Should be 4 characters long.</p>",
            },
            {
              group: "Parameter",
              type: "Boolean",
              optional: true,
              field: "completed",
              description:
                "<p>Completed status of todo. Will default to false for a new todo.</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "description",
              description: "<p>Description of todo. At least 1 character.</p>",
            },
          ],
        },
        examples: [
          {
            title: "Request-Example (all params provided):",
            content:
              "{'title': 'todo 1', 'day': '11', 'month': '11', 'year': '2017', 'completed': true, 'description': 'sample todo'}",
            type: "json",
          },
          {
            title: "Request-Example (not all params provided):",
            content: "{'title': 'todo 1', 'description': 'sample todo'}",
            type: "json",
          },
        ],
      },
      success: {
        fields: {
          "Success 201": [
            {
              group: "Success 201",
              type: "json",
              optional: false,
              field: "todo",
              description:
                "<p>Returns the newly created todo with an id attribute. Empty strings are assigned to properties that were not provided parameter values.</p>",
            },
          ],
        },
        examples: [
          {
            title: "Success-Response (all params provided):",
            content:
              "HTTP/1.1 201 CREATED\n{'id': 1, 'title': 'todo 1', 'day': '11', 'month': '11', 'year': '2017', 'completed': true, 'description': 'sample todo'}",
            type: "json",
          },
          {
            title: "Success-Response (not all params provided):",
            content:
              "HTTP/1.1 201 CREATED\n{'id': 1, 'title': 'todo 1', 'day': '', 'month': '', 'year': '', 'completed': false, 'description': 'sample todo'}",
            type: "json",
          },
        ],
      },
      error: {
        fields: {
          400: [
            {
              group: "400",
              optional: false,
              field: "InvalidInput",
              description:
                "<p>When the todo cannot be saved (due to incorrect attrbiutes).</p>",
            },
          ],
        },
        examples: [
          {
            title: "InvalidInput Error-Response:",
            content: "HTTP/1.1 400 Bad Request\n'Todo cannot be saved.'",
            type: "String",
          },
        ],
      },
      version: "0.0.0",
      filename: "routes/api.js",
      groupTitle: "Todo",
      name: "PostTodos",
    },
    {
      type: "put",
      url: "/todos/:id",
      title: "Updates a todo.",
      description:
        "<p>Uses key/value pairs to set the attributes of the todo. If the key/value pair is not present, its previous value is preserved. Note that the key/value pairs are in json and that you need the &quot;Content-Type: application/json&quot; header.</p>",
      group: "Todo",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "title",
              description: "<p>Title of todo. At least 3 characters long.</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "day",
              description: "<p>Day of todo. Should be 2 characters long.</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "month",
              description: "<p>Month of todo. Should be 2 characters long.</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "year",
              description: "<p>Year of todo. Should be 4 characters long.</p>",
            },
            {
              group: "Parameter",
              type: "Boolean",
              optional: true,
              field: "completed",
              description: "<p>Completed status of todo.</p>",
            },
            {
              group: "Parameter",
              type: "String",
              optional: true,
              field: "description",
              description: "<p>Description of todo. At least 1 character</p>",
            },
          ],
        },
        examples: [
          {
            title: "Request-Example:",
            content: "{'completed': true, 'description': 'done'}",
            type: "json",
          },
        ],
      },
      success: {
        fields: {
          200: [
            {
              group: "200",
              type: "json",
              optional: false,
              field: "todo",
              description: "<p>Returns the updated todo.</p>",
            },
          ],
        },
        examples: [
          {
            title: "Success-Response:",
            content:
              "HTTP/1.1 200 OK\n{'id': 1, 'title': 'todo1', 'day': '11', 'month': '11', 'year': '2017', 'completed': true, 'description': 'done'}",
            type: "json",
          },
        ],
      },
      error: {
        fields: {
          400: [
            {
              group: "400",
              optional: false,
              field: "InvalidInput",
              description:
                "<p>When the todo cannot be saved (due to incorrect attributes).</p>",
            },
          ],
          404: [
            {
              group: "404",
              optional: false,
              field: "NoTodo",
              description: "<p>When the todo with id = {id} cannot be found</p>",
            },
          ],
        },
        examples: [
          {
            title: "InvalidInput Error-Response:",
            content: "HTTP/1.1 400 Bad Request\n'Todo cannot be saved.'",
            type: "String",
          },
          {
            title: "NoTodo Error-Response:",
            content: "HTTP/1.1 404 Not Found\n'The todo could not be found.'",
            type: "String",
          },
        ],
      },
      version: "0.0.0",
      filename: "routes/api.js",
      groupTitle: "Todo",
      name: "PutTodosId",
    },
  ],
});
