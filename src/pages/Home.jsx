import styles from "./Home.module.css";
import Timer from "../components/Timer/Timer";
import Tasks from "../components/Tasks/Tasks";
import MotivationalBanner from "../components/Banners/MotivationalBanner";
import { useState, useEffect, useCallback } from "react";
import { Analytics } from "@vercel/analytics/react"; 

const Home = () => {
  const [activeTaskId, setActiveTaskId] = useState(() => {
    try {
      const stored = localStorage.getItem("activeTaskId");
      return stored ? Number(stored) : null;
    } catch (error) {
      console.error("Failed to load activeTaskId from localStorage:", error);
      return null;
    }
  });
  const [tasks, setTasks] = useState(() => {
    try {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });
  const [showToast, setShowToast] = useState(false);
  const [toastTrigger, setToastTrigger] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("activeTaskId", activeTaskId);
  }, [activeTaskId]);

  const updateTaskSessions = useCallback((taskId, newSessions) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, sessions: newSessions } : task
      )
    );
  }, []);

  const [completedTaskTitle, setCompletedTaskTitle] = useState("");

  const handleTaskCompleted = useCallback((taskTitle) => {
    setCompletedTaskTitle(taskTitle);
    setToastTrigger(prev => prev + 1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <MotivationalBanner isVisible={showToast} trigger={toastTrigger} taskTitle={completedTaskTitle} />
        <div className={styles.mainContent}>
          <Timer
            activeTaskId={activeTaskId}
            setActiveTaskId={setActiveTaskId}
            tasks={tasks}
            updateTaskSessions={updateTaskSessions}
          />
          <Tasks
            activeTaskId={activeTaskId}
            setActiveTaskId={setActiveTaskId}
            tasks={tasks}
            setTasks={setTasks}
            onTaskCompleted={handleTaskCompleted}
          />
        </div>
        <Analytics />
      </div>
    </>
  );
};

export default Home;
