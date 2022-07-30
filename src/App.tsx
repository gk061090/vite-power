import { Counter } from "./components/Counter";
import { api } from "./redux/queries/api";

export default function App() {
  const { isFetching, data } = api.endpoints.getPost.useQueryState({ id: 1 });

  return (
    <div>
      <Counter />
      <div style={{ maxWidth: 300 }}>
        {isFetching ? "loading..." : JSON.stringify(data)}
      </div>
    </div>
  );
}
