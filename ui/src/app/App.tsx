import { AuthProvider } from "../shared/auth/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <h1 className="text-2xl font-bold text-blue-600">Hello from SmartTasks UI</h1>
    </AuthProvider>
  );
}