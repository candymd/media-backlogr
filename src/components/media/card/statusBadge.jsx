import propTypes from "prop-types";
import { MEDIA_STATUS_TYPES } from "../../../../domain/config";

function StatusBadge({ status }) {
  const statusClasses = {
    [MEDIA_STATUS_TYPES.IN_BACKLOG]: "bg-status-warning text-white",
    [MEDIA_STATUS_TYPES.IN_PROGRESS]: "bg-status-blue text-white",
    [MEDIA_STATUS_TYPES.COMPLETED]: "bg-status-success text-white",
  };

  if (!status || !statusClasses[status]) {
    return null;
  }

  return (
    <span
      aria-label="badge"
      className={`inline-flex mt-2 items-center px-2 py-1 rounded-full text-xs font-semibold ${
        statusClasses[status] || "bg-gray-300 text-gray-800"
      }`}
    >
      {status?.replace(/_/g, " ").toUpperCase()}
    </span>
  );
}

export default StatusBadge;
StatusBadge.propTypes = {
  status: propTypes.oneOf([
    MEDIA_STATUS_TYPES.IN_BACKLOG,
    MEDIA_STATUS_TYPES.IN_PROGRESS,
    MEDIA_STATUS_TYPES.COMPLETED,
  ]).isRequired,
};
