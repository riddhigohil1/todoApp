export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className="footer">
      <span className="m50">Completed Todos : {completedTodos}</span>
      <span className="m50">Total Todos : {totalTodos}</span>
    </div>
  );
}
