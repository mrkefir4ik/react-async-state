import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import Content from './components/content'


const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </div>
  );
}

export default App;