import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        fetchTasks();
    }, [isAuthenticated, navigate]);

    const fetchTasks = async () => {
        setLoading(true);
        try {
            const response = await api.get('/tasks');
            const tasksData = response.data.tasks || [];
            setTasks(tasksData);
            setError('');
        } catch (err) {
            console.error('Error fetching tasks:', err);
            setError('No se pudieron cargar las tareas');
            setTasks([]);
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async (newTask) => {
        try {
            const response = await api.post('/tasks', newTask);
            // ✅ Extraer la tarea de la respuesta
            const newTaskData = response.data.task || response.data;
            setTasks(prev => [...prev, newTaskData]);
            setError('');
        } catch (err) {
            console.error('Error adding task:', err);
            setError('Error al crear la tarea');
        }
    };

    const handleToggle = async (id, completed) => {
        try {
            const response = await api.put(`/tasks/${id}`, { completed: completed ? 1 : 0 });
            // ✅ Extraer la tarea actualizada de la respuesta
            const updatedTask = response.data.task || response.data;
            setTasks(prev => prev.map(task => task.id === id ? updatedTask : task));
            setError('');
        } catch (err) {
            console.error('Error toggling task:', err);
            setError('Error al actualizar la tarea');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Eliminar esta tarea?')) return;
        try {
            await api.delete(`/tasks/${id}`);
            setTasks(prev => prev.filter(task => task.id !== id));
            setError('');
        } catch (err) {
            console.error('Error deleting task:', err);
            setError('Error al eliminar la tarea');
        }
    };

    if (loading) return <div className="container mt-5">Cargando...</div>;

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Mis Tareas</h2>
                <button onClick={logout} className="btn btn-outline-danger">Cerrar sesión</button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <TaskForm onAdd={handleAdd} />
            <TaskList 
                tasks={tasks}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Dashboard;