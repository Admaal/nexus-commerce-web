export function Button({ children, variant = "primary", size = "md", disabled, className = "", ...props }) {
  return (
    <button
      disabled={disabled}
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
