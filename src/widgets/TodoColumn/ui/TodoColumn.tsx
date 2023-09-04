import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import classes from './TodoColumn.module.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { $jsonPlaceholder } from 'shared/config/http/host';
import { Todo } from 'shared/types/todos.interface';
import { TodoCard } from 'widgets/TodoCard';
import { AddNewTask } from 'features/AddNewTask';
import { ShowTotal } from 'features/ShowTotal';


interface TodoColumnProps {
    className?: string;
}

export const TodoColumn: FC<TodoColumnProps> = ({className}) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTodos();
  }, [page]);

  const fetchTodos = () => {
    $jsonPlaceholder
      .get<Todo[]>(`/todos?_page=${page}&_limit=10`)
      .then((r) => {
        if (r.data.length === 0) {
          setHasMore(false);
          return;
        }
        setTodos([...todos, ...r.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <div className={classNames(classes.TodoColumn, {}, [className])}>
      <div className={classes.columnHeader}>
        <div className={classes.columnName}>
          Today
        </div>
        <div className={classes.columnControllers}>
          <AddNewTask />
          <ShowTotal total={todos.length}/>
        </div>
      </div>
      <InfiniteScroll
        dataLength={todos.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
          
      >
        <div className={classes.columnCardsWrapper}>
          {todos.map((todo) => (
            <TodoCard key={todo.id} {...todo} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
      
  );
}