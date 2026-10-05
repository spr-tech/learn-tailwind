import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/stores";
import { addTodo, removeTodo } from "../../features/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      todoInfo: "",
    },
    validate: (values) => {
      const errors: { todoInfo?: string } = {};

      if (!values.todoInfo.trim()) {
        errors.todoInfo = "Note is required";
      }

      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addTodo({ id: nanoid(), text: values.todoInfo.trim() }));
      resetForm();
    },
  });

  return (
    <div className="flex flex-col justify-center items-center gap-5 p-5">
      <div>My todos {todos.length}</div>

      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <div className="flex gap-4">
          <label htmlFor="note" className="text-slate-600 text-lg">
            Add note
          </label>
          <input
            name="todoInfo"
            type="text"
            id="note"
            placeholder="add notes"
            value={formik.values.todoInfo}
            onChange={formik.handleChange}
            className="border"
          />
        </div>

        {formik.errors.todoInfo && (
          <p className="text-red-600">{formik.errors.todoInfo}</p>
        )}

        <button
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
          className="flex justify-center bg-slate-700 rounded-md text-white p-2 mt-5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add todo
        </button>
      </form>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="flex gap-5 items-center">
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-600 p-2 rounded-lg"
            >
              Remove item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
