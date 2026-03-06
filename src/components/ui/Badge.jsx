const STATUS_STYLES = {
  PENDING: "badge--pending",
  PROCESSING: "badge--processing",
  COMPLETED: "badge--completed",
  FAILED: "badge--failed",
};

export function Badge({ status }) {
  return (
    <span className={`badge ${STATUS_STYLES[status] ?? "badge--pending"}`}>
      {status}
    </span>
  );
}
